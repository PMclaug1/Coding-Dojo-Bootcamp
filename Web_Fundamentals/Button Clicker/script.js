function logOut(element) {
    if (element.innerText == "Log In") {
        element.innerText = "Log Out"
    }
    else {
        element.innerText = "Log In"
    }
}

function hide(element) {
    element.remove();
}

var likes = [13, 37];
var spans = [
    document.querySelector("#likesCount"),
    document.querySelector("#likesCount1"),

];

function addLikes(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + " likes";
    alert('Ninja was liked');
}
