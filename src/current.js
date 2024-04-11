let current= null;
let currentIdx=0;
let currentHookIndex = 0;
let hookIndex=0;

export const setCurrent = (fn) => {
    current = fn;
}

export const getCurrent = () => {
    return current;
}
export const setCurrentIdx = (id) => {
    currentIdx = id;
}

export const getCurrentIdx = () => {
    return currentIdx;
}