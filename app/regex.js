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
      var patt = new RegExp(/[aeiou]([bcdfghjklmnpqrstvwxyz]|nt)$/);
      var res = patt.test(str);
      return res;
    },

    captureThreeNumbers: function(str) {

    },

    matchesPattern: function(str) {

    },
    isUSD: function(str) {

    }
};