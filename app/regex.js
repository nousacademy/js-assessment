exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
    containsNumber: function(str) {

        var patt = new RegExp(/\d/);
        var res = patt.test(str);
        return res;
    },

    containsRepeatingLetter: function(str) {
        var patt = new RegExp(/([a-zA-Z]).*?\1/);
        var res = patt.test(str);
        return res;
    },

    endsWithVowel: function(str) {
        var patt = new RegExp(/[aeiou]$/i);
        var res = patt.test(str);
        return res;
    },

    captureThreeNumbers: function(str) {
        var patt = new RegExp(/[0-9]{3}/);
        var res = patt.match(str);
        return res;
    },

    matchesPattern: function(str) {
        var patt = new RegExp(/^\d{3}-\d{3}-\d{4}$/i);
        var res = patt.test(str);
        return res;
    },
    isUSD: function(str) {
        var patt = new RegExp(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/i);
        var res = patt.test(str);
        return res;
    }
};