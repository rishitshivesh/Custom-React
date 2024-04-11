// react-dom
/** @jsxRuntime classic */
function renderElement(container, element) {

    if(typeof element.tagName === 'function') {
        const child = element.tagName(element.props);
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
    
    element.children.forEach(child => {
        renderElement(dom, child);        
        container.appendChild(dom);
    });
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