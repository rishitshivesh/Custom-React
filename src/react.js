function createElement(tagName, props, ...children) {
    return {
        tagName,
        props,
        children
    }
}
const React = {
    createElement
}
 
export default React;