// https://johnresig.com/blog/javascript-method-overloading/

// addMethod - By John Resig (MIT Licensed)
function addMethod(object, name, fn) {
    let old = object[name];
    if (old)
        object[name] = function () {
            if (fn.length === arguments.length)
                return fn.apply(this, arguments);
            else if (typeof old == 'function')
                return old.apply(this, arguments);
        };
    else
        object[name] = fn;
}

module.exports = {
    addMethod
}