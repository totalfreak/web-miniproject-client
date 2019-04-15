import DS from 'ember-data';
import application from '../routes/application';
import ember from 'ember';


application.Post = DS.Model.extend({ 
  title: DS.attr('string'),
  image: DS.attr('string'),
  text: DS.attr('string'),
  comments: DS.hasMany('comment')
});


export default application.Post;