$(document).ready(function() {

    enquire.register("screen and (min-width: 960px)", {

    match : function() {
        var s = skrollr.init();
    },      

    unmatch : function() {
        var s = skrollr.destroy();
    },    

    deferSetup : true,

	});

    
     
});

