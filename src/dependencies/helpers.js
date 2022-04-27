export default {

    provider(elementRoot){
        let element = select(elementRoot);

       if(this.hasAttr(element, 'provider', 'data_provider', 'data', 'service')){
           return element.getAttribute('provider')
       }

       throw 'data provider is not defined';
    },

    hasAttr(element, ...attribute){

        if(typeof attribute == 'array'){
            for(attr of attribute){
                if(!element.hasAttribute(attr)){
                    return false;
                }
            }

            return true;
        }else{

            return element.hasAttribute(attribute);
        }
    },

    select(id){
        return document.querySelector(id);
    },

}