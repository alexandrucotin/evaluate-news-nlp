function handleSubmit(e) {
  e.preventDefault();
  let scanUrl = document.getElementById("url").value;
  if (Client.checkForUrl(scanUrl)) {
    const sendUrl = async (url = "", data = {}) => {
      fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((newData) => {
          console.log("newDatam is: ", newData);
          document.getElementById("polarity").textContent = newData.polarity;
          document.getElementById("subjectivity").textContent =
            newData.subjectivity;
          document.getElementById("polarity-conf").textContent =
            newData.polarity_confidence;
          document.getElementById("subjectivity-conf").textContent =
            newData.subjectivity_confidence;
        });
    };
    sendUrl("http://localhost:8081/data", { url: scanUrl });
  }
}
export { handleSubmit };
