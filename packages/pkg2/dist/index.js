(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.power = factory());
})(this, (function () { 'use strict';

    function pk2() {
        console.log('I am pk2');
    }

    return pk2;

}));
//# sourceMappingURL=index.js.map
