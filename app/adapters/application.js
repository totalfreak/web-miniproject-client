import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'https://web-miniproject-client.herokuapp.com/'
});
