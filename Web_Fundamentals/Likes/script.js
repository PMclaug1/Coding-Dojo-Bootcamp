

var requestSpan = document.querySelector("#likesCount");
var requestSpan2 = document.querySelector("#likesCount2");
var requestSpan3 = document.querySelector("#likesCount3");

function addLikes(id) {
    var element = document.querySelector(id);
    requestSpan.innerText++;
}

function addLikes2(id) {
    var element = document.querySelector(id);
    requestSpan2.innerText++;
}

function addLikes3(id) {
    var element = document.querySelector(id);
    requestSpan3.innerText++;
}
