import RESTAdapter from '@ember-data/adapter/rest';
// debugger
export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api';

  
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}