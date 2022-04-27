import App from './dependencies/application/core.js'
import config from './config.js'

export default {
    load(){
        let data = config.data();

        return this.startApp(data)
    },

    startApp(dependecies){
        return  App(dependecies);
    }
};