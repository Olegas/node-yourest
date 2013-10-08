(function(){

   "use strict";

   var request = require('request');

   function Transport(params) {

      var self = this;

      this._failed = false;
      this._auth = false;
      this._jar = request.jar();
      this._host = params.url;

      request({
         method: 'post',
         jar: this._jar,
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
         },
         url: params.url + "/rest/user/login?" + params.login + "&" + params.password
      }, function(err, res, body){
         if(err) {
            self._failed = true;
         } else {
            self._auth = true;
         }
      })
   }

   Transport.prototype.request = function(o, cb) {
      o.jar = this._jar;
      o.url = this._host + o.url;
      request(o, cb);
   };

   module.exports = Transport;


})();