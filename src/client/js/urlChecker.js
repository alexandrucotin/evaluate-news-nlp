function checkForUrl(inputText) {
  const checker = document.getElementById("checker");
  var regex = RegExp("^(http|https)://");
  if (regex.test(inputText)) {
    checker.textContent = "The url is valid!";
    return true;
  } else {
    checker.textContent =
      'The url is not valid. Need to start with "http(s)://". ';
    return false;
  }
}
export { checkForUrl };
