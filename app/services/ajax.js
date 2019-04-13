// app/services/ajax.js

import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
    host: 'https://web-miniproject-server.herokuapp.com/api/posts'
});
