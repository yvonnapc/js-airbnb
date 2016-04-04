import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateRentalForm: false,
  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ', ' + this.get('city.country');
  }), 

  actions: {
    imageShow: function(){
      this.set('isImageShowing', true);
    },
    imageHide: function (){
      this.set('isImageShowing', false);
    },
    update(rental, params){
      this.sendAction('update', rental, params);
    },
  }
});
