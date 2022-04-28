/**
 * component actions
 * 
 * style();
 * content();
 * tag();
 * event();
 * click();
 * children();
 * attribute();
 * id();
 * class();
 * 
 */

function load(component){

    let tag = hasTag(component) ? component.tag() : 'div';

    let html = createElementBy(tag)

    if(hasStyle(component))
        addStyle(html, component.style());

    if(hasContent(component))
        addContent(html, component.content());

    if(hasEvent(component))
        addEvent(html, component.event());

    if(hasClick(component))
        addClick(html, component.click());

    if(hasId(component))
        addId(html, component.id());

    if(hasAttr(component))
        addAttr(html, component.attribute());

    if(hasChildren(component))
        addChildren(html, component.children());

    if(hasClass(component))
        addClass(html, component.class());

    return html;
}

function hasId(element){
    return hasMethod(element, 'id');
}

function addId(html, id) {
    if(Array.isArray(id)){

        id.forEach((idName) => addAttr(html, {key:'id', value: idName}));

    }else{

        addAttr(html, {key:'id', value: classname});
    }
}

function hasClick(element) {
    return hasMethod(element, 'click');
}

function isDefined(prop) {
    return typeof prop !== 'undefined';
}

function isNotNull(prop){
    return typeof prop !== null;
}

function isFunction(prop){
    return typeof prop === 'function';
}

function has(prop){
    return isNotNull(prop) && isDefined(prop);
}

function hasFunction(prop){
    return has(prop) && isFunction(prop);
}

function hasMethod(object, method){
    return hasFunction(object[method]);
}

function addClick(element, click){
    if(Array.isArray(click)){

        for(let c of click){
            element.addEventListener("click", c, false);
        }

    }else{

        element.addEventListener("click", click, false);
    }
}

function hasEvent(element){
    return hasMethod(element, "event");
}

function addEvent(element, event){
    if(Array.isArray(event)){

        for(let e of event){
            element.addEventListener("click", e, false);
        }

    }else{

        element.addEventListener("click", event, false);
    }
}

function hasAttr(element){
    return hasMethod(element, 'attribute');
}

function addAttr(html, attr){
    if(Array.isArray(html)){

        for(let a of attr){
            html.setAttribute(a.key, a.value);
        }
    }else{

        html.setAttribute("click", attr.key,  attr.value);
    }
}

function hasClass(element){
    return hasMethod(element,'class');
}

function addClass(html, classname){
    if(Array.isArray(classname)){

        classname.forEach((name) => addAttr(html, {key:'class', value: name}));

    }else{

        addAttr(html, {key:'class', value: classname});
    }
}

function addChildren(html, children){

    let elementChildren;

    if(Array.isArray(children)){

        for(let c of children ){

            elementChildren = load(c);

            html.appendChild(elementChildren);

        }
    }else{

        elementChildren = load(children);
        
        html.appendChild(elementChildren);
    }

    return html;
}

function createElementBy(discribe){
    return document.createElement(discribe);
}

function hasTag(element){
    return hasMethod(element, 'tag')
}

function hasStyle(component){
    return hasMethod(component, 'style');
}

function addStyle(html, style){
    Object.keys(style).forEach(styleKey =>{
        html.style[styleKey] = style[styleKey];
    })
}

function hasChildren(element){
    return hasMethod(element, 'children');
}

function hasContent(element){
    return hasMethod(element, 'content');
}

function addContent(html, content){
    html.innerHTML = content;
}

export default function (element){

    element.toHtmlElement = () => load(element);

    return element;
}
