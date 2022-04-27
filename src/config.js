import helpers from './dependencies/helpers.js';

export default {
    data(){
        return {
            APP_NAME: 'CHESTER DOCUMENTATION',
            DATA_PROVIDER: helpers.provider('#chester'),
            ASSETS_CDN: './src/assets/style.css',
            ICONS_CDN: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
    }
};