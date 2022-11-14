function exampleFunction (element) {
    console.log("Element clicked", element)
}
function exampleFunction2 (element) {
    console.log("Element text", element.innerText)
}
function exampleFunction3 (element) {
    console.log("Element text", element.innerHTML)
}

function lightSwitch(element) {
    if(element.innerText === "Off") {
        element.innerText = "On";
    }
    else {
        element.innerText = "Off"
    }
}