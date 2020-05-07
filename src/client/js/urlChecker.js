function checkForUrl(inputText) {
  const checker = document.getElementById("checker");
  var regex = RegExp("^(http|https)://");
  if (regex.test(inputText)) {
    //This is working normally but on jest no...
    // checker.textContent("The url is valid!");
    window.alert("the url is valid!")
    return true;
  } else {
        //This is working normally but on jest no...
    // checker.textContent =
    //   'The url is not valid. Need to start with "http(s)://". ';
    window.alert("the url must start with https or http")
    return false;
  }
}
export { checkForUrl };
