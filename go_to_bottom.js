function callbackClousre(i) {
    return function(com) {
        console.log("there is the i", i);
        console.log("get the the callback return",com)
    };

}
// get bottom on the page
function get_bottom_pages(callback) {
    var scrollingElement = (document.scrollingElement || document.body); 
    var inter =setInterval(function(){window.scrollTo(0,scrollingElement.scrollHeight); console.log("there is "); 
    if(document.getElementById("ps-no-more-posts").style.display != 'none'){
        clearInterval(inter);
        callback("Done");
    }
    },500);
    };
    get_bottom_pages(callbackClousre());