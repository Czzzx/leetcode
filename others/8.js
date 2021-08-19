const localStorageMock = (function() {
    let store = {};

    return {
        getItem(key) {
            return store[key];
        },
        setItem(key, value) {
            store[key] = value.toString();
        },
        removeItem(key) {
            delete store[key];
        },
        clear() {
            store = {};
        },
    };
})();

// browsers that support
Object.defineProperty(window, 'myLocalStorage', {
    value: localStorageMock,
});

myLocalStorage.setItem('cc', 'test');
console.log(myLocalStorage.getItem('cc'));
