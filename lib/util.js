(function(){

   "use strict";

   var mods = {
      'd': 24 * 60,
      'h': 60,
      'm': 1
   };

   module.exports = {
      timeToMinutes: function(spec) {
         return spec.replace(/([0-9]+)([dhm]{1,1})/g, function(match, val, mod){
            return parseInt(val, 10) * mods[mod] + " ";
         }).split(' ').reduce(function(s, i){
            i = parseInt(i, 10);
            if(!isNaN(i)) {
               return s + parseInt(i, 10);
            } else {
               return s;
            }
         }, 0);
      }
   }


})();