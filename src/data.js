require('dotenv').config();
const http = require('http');
const fortune = require('fortune');
const fortuneHTTP = require('fortune-http');
const mongodbAdapter = require('fortune-mongodb');

/**
  * Data abstraction class for sourcing data from multiple sources as JSONAPI format
  */
module.exports = class Data
{
  constructor(entities = [], adapter = 'mongo')
  {
    this.entities = entities;
    switch (adapter)
    {
      case 'mongo':
        this.adapterClass = mongodbAdapter;
        this.adapterOptions = {
          url: `mongodb://${process.env['DB_HOST']}:${process.env['DB_PORT']}/${process.env['DB_NAME']}`
        };
      break;
    }
  }

  get store()
  {
    return fortune(this.entities, {
      adapter: this.adapter
    });
  }

  /**
    * Get fortune adapter/plugin with options
    */
  get adapter()
  {
    return [this.adapterClass, this.adapterOptions];
  }
}
