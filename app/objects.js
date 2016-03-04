exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers = {
    alterContext: function(fn, obj) {
        this.greeting = obj.greeting;
        this.name = obj.name;

        return fn.call(this);



    },

    alterObjects: function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate: function(obj) {
        var keys = [];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key+': '+obj[key]);
            }
        }
        // console.log(keys)
        return keys;
    }
};