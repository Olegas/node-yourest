(function(){

   "use strict";

   var Transport = require('./lib/transport.js');
   var Project = require('./lib/project.js');
   var Task = require('./lib/task.js');

   function YouTrack(params) {
      this._params = params;
      this._transport = new Transport(params);
   }


   Object.defineProperty(YouTrack.prototype, 'project', {
      'get': function() {
         return this._project || (this._project = Project(this._transport))
      }
   });

   Object.defineProperty(YouTrack.prototype, 'task', {
      'get': function() {
         return this._task || (this._task = Task(this._transport))
      }
   });

   module.exports = function(params) {
      return new YouTrack(params);
   }


})();