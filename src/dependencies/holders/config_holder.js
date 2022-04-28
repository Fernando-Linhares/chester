import helpers from './../helpers.js';
import layout from './../../components/layout.js';

export default {

    _appname: null,

    _root: null,

    _assetCdn: null,

    _iconsCdn: null,

    build(config){

        this.setAppName(config._APP_NAME)

        this.setRoot(config._ROOT)

        this.setAssetCdn(config._ASSETS_CDN)

        this.setIconsCdn(config._ICONS_CDN)

        return this;
    },

    root(){
        return helpers.select(this.getRoot());
    },

    layout(){

        helpers.addSkills(layout)

        return layout;
    },

    setAppName(appname){
        this._appname = appname
    },
    
    setRoot(root){
        this._root = root
    },
    
    setAssetCdn(assetCdn){
        this._assetCdn = assetCdn
    },

    setIconsCdn(iconsCdn){
        this._iconsCdn = iconsCdn
    },

    getAppName(){
        return this._appname
    },
    
    getRoot(){
        return this._root;
    },
    
    getAssetCdn(){
        return this._assetCdn;
    },
    
    getIconsCdn(){
        return this._iconsCdn;
    }
}