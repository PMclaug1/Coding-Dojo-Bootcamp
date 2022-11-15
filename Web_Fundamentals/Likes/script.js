

var likes = [9, 12, 9];
var spans = [
    document.querySelector("#likesCount"),
    document.querySelector("#likesCount2"),
    document.querySelector("#likesCount3")
];

function addLikes(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " like(s)";
}
