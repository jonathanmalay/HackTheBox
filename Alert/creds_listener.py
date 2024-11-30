from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Get the content length from headers
        content_length = int(self.headers['Content-Length'])

        # Read the JSON data from the request body
        post_data = self.rfile.read(content_length)
        try:
            # Parse the JSON data
            json_data = json.loads(post_data)
            print("Received JSON data:")
            print(json.dumps(json_data, indent=4))  # Pretty-print the JSON data

            # Send a 200 OK response
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status": "success"}')

        except json.JSONDecodeError:
            print("Failed to decode JSON data.")
            self.send_response(400)
            self.end_headers()

    def log_message(self, format, *args):
        # Suppress logging to avoid clutter
        return

if __name__ == '__main__':
    # Define the server address and port
    server_address = ('', 2222)  
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print("Server running on port 2222 and waiting to stolen creds...")
    httpd.serve_forever()
