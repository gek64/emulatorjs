// https://johnresig.com/blog/javascript-method-overloading/

function addMethod(object: object, name: string, fn: any) {
    let old: any = object[name];
    if (old) {
        object[name] = function () {
            if (fn.length === arguments.length)
                return fn.apply(this, arguments)
            else if (typeof old == 'function')
                return old.apply(this, arguments)
        }
    } else {
        object[name] = fn
    }
}

export = {
    addMethod
}
