function callbackClousre(i) {
    return function(com) {
        console.log("there is the i", i);
        console.log("get the the callback return",com);
    };

}
// to get hidden comment
function get_hidden(contents, callback) {
    var bi = contents.getElementsByClassName('ps-comment-more');
    console.log("what is the bi length", bi.length);
    if (bi.length != 0 ){
        for (i = 0; i < bi.length; i++) {
            if( typeof (bi[i].childNodes[i].nextSibling.click) !== 'undefined'){
                console.log("here for comment undefined");
                bi[i].childNodes[i].nextSibling.click();
            }
        }
    }
}

// initialize all function is here
function main() {
   
    var x = document.querySelector('[class="ps-stream-wrapper"]').querySelectorAll('[id="ps-activitystream"]');
    var count_get_more =  [] ;

    for (var i = 0; i < x.length; i++) {
        var item = x[i];
        var y = item.getElementsByClassName("ps-stream");
        for (var j = 0; j < y.length; j++) {
            var get_item = y.item(j);
            // to get person name   --- maybe, it can be deleted later because the user does not want it 
            get_hidden(get_item,callbackClousre());

        }

    }

}
main();