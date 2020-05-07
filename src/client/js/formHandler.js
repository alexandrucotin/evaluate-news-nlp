function handleSubmit(e) {
  e.preventDefault();
  let scanUrl = document.getElementById("url").value;
  if (client.checkForUrl(scanUrl)) {
    const sendUrl = async (url = "", data = {}) => {
      const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      try {
        const newData = await response.json();
        console.log("newDatam is: ", newData);
        document.getElementById("polarity").textContent = newData.polarity;
        document.getElementById("subjectivity").textContent =
          newData.subjectivity;
        document.getElementById("polarity-conf").textContent =
          newData.polarity_confidence;
        document.getElementById("subjectivity-conf").textContent =
          newData.subjectivity_confidence;
        return newData;
      } catch (error) {
        console.log("error", error);
      }
    };
    sendUrl("/data", { url: scanUrl });
  }
}
export { handleSubmit };
