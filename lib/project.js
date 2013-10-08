(function(){

   "use strict";

   module.exports = function(transport) {
      return {
         list: function(cb) {
            transport.request({
               method: 'get',
               url: '/rest/project/all'
            }, cb);
         }
      }
   };


})();