function get_more_post(contents, ){
    var more_post =  contents.getElementsByClassName('ps-stream-post-more');
    for (var i = 0; i < more_post.length;i++){
        //count_get_more.push(more_post[i]);
        more_post[i].href = '#';
        more_post[i].click();
    }
}

function main() {
   
    var x = document.querySelector('[class="ps-stream-wrapper"]').querySelectorAll('[id="ps-activitystream"]');


    for (var i = 0; i < x.length; i++) {
        var item = x[i];
        var y = item.getElementsByClassName("ps-stream");
        for (var j = 0; j < y.length; j++) {
            var get_item = y.item(j);
            // function are work.
            get_more_post(get_item);

        }

    }
}