/*
 * This is the main entrypoint for the evergreen-client
 */

const logger = require('winston');

 class Blah {
   static asyncFunction() {

     const tasks = [];
     tasks.push(logger.info('1'));
     tasks.push(logger.info('2'));

     return Promise.all(tasks).then( () => {
       logger.info("3");
     });
   }
 }

 Blah.asyncFunction().then(() => {
   logger.info('in external call');
 });
