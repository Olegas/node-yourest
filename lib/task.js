(function(){

   "use strict";

   var u = require('./util.js');

   module.exports = function(transport) {
      return function(taskId) {
         return {
            time: {
               track: function(timespec, description, cb) {

                  if(arguments.length == 2) {
                     cb = description;
                     description = "";
                  }

                  var body = "<workItem><date>" + (+new Date()) + "</date><duration>" + u.timeToMinutes(timespec) + "</duration><description>" + description + "</description></workItem>";

                  transport.request({
                     method: 'post',
                     url: "/rest/issue/" + taskId + "/timetracking/workitem",
                     body: body,
                     headers: {
                        'Content-type': 'text/xml'
                     }
                  }, cb);
               }
            }
         }
      }
   }

})();