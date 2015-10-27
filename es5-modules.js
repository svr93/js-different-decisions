(function() {

    if (!window.__module) { // the check'll be transferred to the first script

        Object.defineProperty(window, '__module', {

            value: {},
            writable: false
        });
    }
    var DEPENDENCIES = ['Summator'];
    var MODERN_FUNCTION_LIST = ['Object.assign']; // only as example

    DEPENDENCIES.forEach(function(item) {

        var module = window.__module[item];
        if (Object.prototype.toString.apply(module) !== '[object Object]') {

            throw new ReferenceError('Dependency ' + item + ' is not defined');
        }
    });
    var Summator = window.__module.Summator;

    var Logger = Object.freeze({

        /**
         * Adds console output after function call.
         * @param {function()} func
         * @return {function()} Wrapped function.
         */
        addLog: function(func) {

            /**
             * Wrapped version of initial function.
             */
            function wrappedFunc() {

                var res = func.apply(this, arguments);
                console.log('Function result: ' + res);
                return res;
            }
            return wrappedFunc;
        }
    });
    Object.defineProperty(window.__module, 'Logger', {

        value: Logger,
        writable: false
    });
})();
