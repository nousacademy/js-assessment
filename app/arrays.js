exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function(arr, item) {

        for (i = 0; i < arr.length; i++) {

            if (item === arr[i]) {
                return i;

            }

        }
        return -1;
    },

    sum: function(arr) {
        var sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i]

        }
        return sum;
    },

    remove: function(arr, item) {

        for (var i = arr.length; i--;) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;

    },

    removeWithoutCopy: function(arr, item) {

        for (var i = 0; i < arr.length; i++) {
            var v = arr[i];
            for (var j = 1; j < arguments.length; j++) {
                if (v == arguments[j]) {
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
        return arr;

    },
    // no loops if i dont need it guys, this is a long test haha
    append: function(arr, item) {
        var h = arr.concat(item);
        return h;
    },

    truncate: function(arr) {
        arr.splice(-1);
        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.shift();
        return arr;
    },

    concat: function(arr1, arr2) {
        var merged = arr1.concat(arr2);
        return merged;
    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item);
        arr.join();
        return arr;
    },

    count: function(arr, item) {
        var item = 0;
        for (var o in arr) {
            if (arr[o] == i)
                item++;
        }

        return item;
    },

    duplicates: function(arr) {
        var results = [];
        for (var i = 0, len = arr.length - 1; i < len; i++) {
            if ((results.indexOf(arr[i]) == -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
                results.push(arr[i]);
            }
        }
        return results;

    },

    square: function(arr) {
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            res.push(arr[i] * arr[i])
        }
        return res;
    },

    findAllOccurrences: function(arr, target) {
        var count = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === target) {
                count.push(i);
            }
        }

        return count;
    }

};