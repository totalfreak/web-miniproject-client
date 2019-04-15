import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  ajax: Ember.inject.service(),
  actions: {
    sendRequest(title, image, text) {
    console.log(title + " " + image + " " + text);
        if(title.length > 5 && text.length > 20) {
            this.get('ajax').request('https://web-miniproject-server.herokuapp.com/api/posts', {
                method: 'POST',
                data: {
                post: {
                    title: title,
                    image: image,
                    text: text
                }
                }
            });
            //Reload page after the POST has been sent
            setTimeout(function() {
                window.location.reload(true);
            }, 1000);
            return;
        } else {
            console.log("More text is needed");
        }
      
      
    }    
  }
});
