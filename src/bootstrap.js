import App from './dependencies/application/core.js'
import config from './config.js'
import helpers from './dependencies/helpers.js';

export default {
    load(){
        let data = config.data();

        return this.startApp(data)
    },

    startApp(dependecies){

       let data =  helpers.hold(dependecies);

        return  App(data);
    }
};