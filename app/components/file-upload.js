import FileField from 'ember-uploader/components/file-field';
import Uploader from 'ember-uploader/uploaders/uploader';

export default FileField.extend({
    filesDidChange(files) {
        const uploader = Uploader.create({
            url: this.get(url)
        });

        if (!Ember.isEmpty(files)) {
            uploader.upload(files[0]);
            console.log(files[0]);
            
        }
    }
});
