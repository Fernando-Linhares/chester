export default function (element){
    return load(element);
}

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

function load(element){

    let tag = hasTag(element) ? element.tag() : 'div';

    let html = createElementBy(tag)

    if(hasStyle(element)) addStyle(html, element.style());

    if(hasContent(element)) addContent(html, element.content());

    if(hasEvent(element)) addEvent(html, element.event());

    if(hasClick(element)) addClick(html, element.click());

    if(hasId(element)) addId(html, element.id());

    if(hasAttr(element)) addAttr(html, element.attribute());

    if(hasChildren(element)) addChildren(html, element.children());

    if(hasClass(element)) addClass(html, element.class());

    return html;
}

function hasId(element) {
    return element.id() !== null;
}

function addId(html, id) {
    if(typeof id == 'array'){

        id.forEach((idName) => addAttr(html, {key:'id', value: idName}));

    }else{

        addAttr(html, {key:'id', value: classname});
    }
}

function hasClick(element) {
    return element.click() !== null;
}

function addClick(element, click){
    if(typeof click == 'array'){
        for(let c of click){
            element.addEventListener("click", c, false);
        }
    }else{

        element.addEventListener("click", click, false);
    }
}

function hasEvent(element){
    return element.event() !== null;
}

function addEvent(element, event){
    if(typeof event == 'array'){
        for(let e of event){
            element.addEventListener("click", e, false);
        }
    }else{

        element.addEventListener("click", event, false);
    }
}

function hasAttr(element){
    return element.attribute() !== null;
}

function addAttr(html, attr){

    if(typeof attr == 'array'){
        for(let a of attr){
            html.setAttribute(a.key, a.value);
        }
    }else{

        element.setAttribute("click", attr.key,  attr.value);
    }
}

function hasClass(element){
    return element.class() != null;
}

function addClass(html, classname){
    if(typeof classname == 'array'){

        classname.forEach((name) => addAttr(html, {key:'class', value: name}));

    }else{

        addAttr(html, {key:'class', value: classname});
    }
}


function addChildren(html, children){

    children = element.children();

    children = load(children);

    html.appendChild(children);
}

function createElementBy(discribe){
    return document.createElement(discribe);
}

function hasTag(element){
    return element.tag() !== null;
}


function hasStyle(component){
    return component.style() !== null;
}

function addStyle(html, style){
    Object.keys(style).forEach(styleKey =>{
        html.style[styleKey] = style[styleKey];
    })
}

function hasChildren(element){
    return discribe.children() !== null ;
}

