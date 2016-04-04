import Ember from 'ember';

export function rentalCost(params/*, hash*/) {
  var rentalPrice = params[0].get('cost');

  if(rentalPrice >= 150) {
    return '$$$$'
  } else if(rentalPrice >= 100) {
    return '$$$'
  } else if(rentalPrice >= 40) {
    return '$$'
  } else {
    return '$'
  }
}

export default Ember.Helper.helper(rentalCost);
