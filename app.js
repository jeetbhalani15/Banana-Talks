var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/vulcan.json"

function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input
}
function errorHandler(error){
    console.log("error occurred",error);
    alert("Need Not To Worry!!😐 It's server side error")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)


};

btnTranslate.addEventListener("click", clickHandler)