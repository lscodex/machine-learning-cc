function init_json_file() {
    var obj = {
        oneblog: []
    };

    return obj;
}
//callback function
function callbackClousre(i) {
    return function(com) {
        console.log("there is the i", i);
        console.log("there is the return", com);
    };

}
// create download
function createDownload(contents) {
    var hiddenElement = document.createElement('a');
    var blob = new Blob([JSON.stringify(contents, null, 4)], { type: 'application/json' });
    //hiddenElement.href = 'data:attachment/text' + encodeURI(contents);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Info.txt';
    document.body.appendChild(hiddenElement);
    var donwloadURI = URL.createObjectURL(blob);
    hiddenElement.setAttribute("href", donwloadURI);
    hiddenElement.click();
}
// person name is here 
function get_person_name(header, json_file) {

    var get_header = header.getElementsByClassName("ps-stream-header");
    for (b = 0; b < get_header.length; b++) {
        // 
        // child tagname is ps-tag__link ps-csr
        var itemsNoew = get_header[b].childNodes[b].parentElement;
        var talkinAbout = itemsNoew.querySelectorAll('[class="ps-stream-meta"]');
        for (c = 0; c < talkinAbout.length; c++) {
            get_person = talkinAbout[c].innerText;
            get_person_split = get_person.split("\n");
            // get the first, so thath is the person name
            var write_from_person = get_person_split.shift();
            //console.log("Person:", write_from_person.replace(/(\r\n|\n|\r)/gm, "").toString());
            return write_from_person;
            //json_file.oneblog.push({ question_isim: write_from_person });
        }
    }
}
// to get allquestions
function get_paragraf(item, json_file) {
    var item_pragaraf = item.getElementsByClassName("ps-stream-body");
    for (a = 0; a < item_pragaraf.length; a++) {
        var paragraf_from_person = item_pragaraf[a].childNodes[a].nextSibling.innerHTML.replace(/(\r\n|\n|\r)/gm, "").toString();
        //console.log("Write: ", paragraf_from_person);
        //json_file.oneblog.quest.push(paragraf_from_person);
        return paragraf_from_person;
    }

}

// get all comment for 
function get_comment(item, json_file) {
    var get_comment = [];
    var container = item.getElementsByClassName("ps-comment");
    //console.log("sample", container[0].innerText)
    var final_comment = container[0].innerText.replace(/(\r\n|\n|\r)/gm, "").toString();
    var whatisThat = final_comment.split('\t');
    console.log(whatisThat);
    return whatisThat;
}

// initialize all function is here
function main() {
    file = init_json_file();
    var x = document.querySelector('[class="ps-stream-wrapper"]').querySelectorAll('[id="ps-activitystream"]');
    //console.log(x);
    var count_get_more =  [] ;

    for (var i = 0; i < x.length; i++) {
        var item = x[i];
        var y = item.getElementsByClassName("ps-stream");
        for (var j = 0; j < y.length; j++) {
            var get_item = y.item(j);
            // to get person name   --- maybe, it can be deleted later because the user does not want it 
            var isim = get_person_name(get_item, file);
            var parag = get_paragraf(get_item, file);
            var comment = get_comment(get_item, file);
            file.oneblog.push({ question_isim: isim, quest: parag, comment: comment });

        }

    }
    createDownload(file);

}
main();