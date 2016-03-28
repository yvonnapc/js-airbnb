import Ember from 'ember';
  isImageShowing: false,
  actions: {
    imageShow: function(){
      this.set('isImageShowing', true);
    }
  }

export default Ember.Component.extend({
});
