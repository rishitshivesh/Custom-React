// react-dom
/** @jsxRuntime classic */

import { setCurrent, setCurrentIdx } from "./current";

function renderElement(container, element) {
    if(typeof element.tagName === "function") {
        setCurrent({
            ...element,
            container,
            hookIndex: 0,           
        })
        const child = element.tagName(element.props);
        setCurrent(null);
        setCurrentIdx(0);
        renderElement(container, child);
        return;
    }


    if(["string", "number"].includes(typeof element)) {
        const text = document.createTextNode(element);
        container.appendChild(text);
        return;
    }
 
    if(Array.isArray(element)) {
        element.forEach((el) => {
            renderElement(container, el)
        });
        return;
    }
    const dom = document.createElement(element.tagName);
    Object.entries(element.props).forEach(([key, value]) => {

        if(key==='style'){
            Object.entries(value).forEach(([styleKey, styleValue]) => {
                dom[key][styleKey] = styleValue;
            })
        }
        else {
            dom[key] = value;
        }
    });
    // console.log(container)
    // find the count of all instance of useState, and then create an array of that length


    element.children.forEach(child => {
        renderElement(dom, child);        
    });

    container.appendChild(dom);
    
}

export const rerender = (current) => {
    current.container.innerHTML = "";
    renderElement(current.container, current);
}

const ReactDom = {
    createRoot: (container) => {
        return {
            render: (element) => {
                renderElement(container, element);
            }
        }
    }
}
 
export default ReactDom;