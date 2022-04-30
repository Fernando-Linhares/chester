import config_holder from './holders/config_holder.js';
import recursiveElementCreator from './recursive.js';

export default {

    hasAttr(element, ...attribute){

        if(typeof attribute == 'array'){
            for(attr of attribute){
                if(!element.hasAttribute(attr)){
                    return false;
                }
            }

            return true;
        }
        else{

            return element.hasAttribute(attribute);
        }
    },

    addSkills(element){
        recursiveElementCreator(element);
    },

    select(id){
        return document.querySelector(id);
    },

    hold(data){
        return config_holder.build(data)
    },

    create(tag){
        document.createElement(tag);
    }
}