import DS from 'ember-data';
import application from '../routes/application';

application.Post = DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  text: DS.attr('string'),
  comments: DS.hasMany('comment')
});

application.Comment = DS.Model.extend({
  text: DS.attr('string')
});

export default application.Post;