function checkForUrl(inputText) {
  const checker = document.getElementById("checker");
  var regex = RegExp("^(http|https)://");
  if (regex.test(inputText) == false) {
    checker.textContent =
      'The url is not valid. Need to start with "http(s)://". ';
    return false;
  } else {
    checker.textContent = "The url is valid!";
    return true;
  }
}
export { checkForUrl };
