const read = require('read-data-file');

module.exports = {
    model: 'exchange',
    /**
      * @return {Promise}
      */
    documents: function() {
      return Promise.all([
        read('./content/products.yml').then(products => {
          return products.map(product => {
            product.tags = ['Product'];
            return product;
          });
        }),
        read('./content/services.yml').then(services => {
          return services.map(service => {
            service.tags = ['Service']
            return service;
          });
        })
      ]).then(docGroups => [].concat.apply([], docGroups));
    }
};
