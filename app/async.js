exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    async: function(value) {

    	// http://api.jquery.com/deferred.promise/ - ive only done async calls with ajax or chrome storage requests never like this
        var dfd = jQuery.Deferred();

        // Resolve after a random interval
        setTimeout(function() {
            dfd.resolve(value);
        }, 1);

        

        // Return the Promise so caller can't change the Deferred
        return dfd.promise();

    },

    manipulateRemoteData: function(url) {
    	$.get(url, function(d){
    		var data = d.people;
    		// console.log(data.name)
    		var result = [];
    		for (i = 0; i < data.length; i++) { 
    			// debugger;
    				result.push(data[i].name);
    			
    		}
    		result.sort()
    		
    		return result;
    	})
    }
};