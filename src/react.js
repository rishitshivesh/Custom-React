import { getCurrent, getCurrentIdx, setCurrentIdx } from "./current";
import { rerender } from "./react-dom";

function createElement(tagName, props, ...children) {
    return {
        tagName,
        props,
        children
    }
}
function useState(inititalValue) {
    const current = getCurrent();
    const idx=getCurrentIdx();
    let value =  current?.[idx] || (typeof inititalValue ==='function' ? inititalValue() : inititalValue);
    setCurrentIdx(idx+1);
    const setValue = (val) => {
        current[idx] = typeof val === 'function' ? val(value) : val;
        rerender(current);
    }
    return [value, setValue];
}

// function useState(inititalValue) {
//     const current = getCurrent();
//     const currentHookIndex = current.hookIndex;
//     current.hookIndex++;
//     if(!current.hooks){
//         current.hooks = []
//     }
//     let value =  current.hooks[currentHookIndex] || (typeof inititalValue ==='function' ? inititalValue() : inititalValue);
//     const setValue = (val) => {
//         current.hooks[currentHookIndex] = typeof val === 'function' ? val(value) : val;
//         rerender(current);
//     }
//     return [value, setValue];
// }

const React = {
    createElement,
    useState
}
 
export default React;