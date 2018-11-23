const gulp = require('gulp');
const Data = require('./src/data');
 // TODO: Abstract below constants
const entities = require('./src/entities');
// Data sources
const dataSources = {
  exchange: require('./data/exchange'),
  salutation: require('./data/salutation')
};

// Default
gulp.task('default', ['seed']);

/**
  * Seed database using consolidated data sources
  */
gulp.task('seed', function() {
  const store = new Data(entities).store;
  return Promise.all(
    Object.entries(entities).map(entity => {
      let [name, schema] = entity;
      if (dataSources[name] != undefined) {
        return store.find(name).then( (res) => {
          if (res.payload.count > 0) {
            let ids = res.payload.records.map(record => record.id);
            return store.delete(name, ids);
          } else {
            return null;
          }
        }).then( () => {
          return dataSources[name].documents();
        }).then(docs => store.create(name, docs));
      } else {
        return null;
      }
    })
  ).then( () => {
    console.log('Seeding complete, now disconnecting');
    process.exit();
  });
});
