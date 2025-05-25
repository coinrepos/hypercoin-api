import os
import json
import time
import threading
import subprocess
from flask import Flask, request, jsonify, render_template
from web3 import Web3
from eth_account import Account

# Initialize Flask API
app = Flask(__name__)

# Blockchain & Smart Contract Setup
w3 = Web3(Web3.HTTPProvider("https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY"))  # 🔁 Replace with real key
w3.ens = None  # Disable ENS to prevent errors

# Verify Web3 Connection
if not w3.isConnected():
    print("Error: Unable to connect to blockchain node. Ensure it is running.")
    exit(1)

contract_address = "0xYourContractAddress"  # 🔁 Replace with your actual deployed contract address

# Load ABI from file
with open("contract_abi.json", "r") as abi_file:
    contract_abi = json.load(abi_file)

if not Web3.isAddress(contract_address):
    print("Error: Invalid contract address. Check your settings.")
    exit(1)

contract = w3.eth.contract(address=Web3.to_checksum_address(contract_address), abi=contract_abi)

# HyperDashboard API with Live Analytics
@app.route("/dashboard", methods=["GET"])
def dashboard():
    gas_remaining = 100 - (w3.eth.get_block('latest').gasUsed / w3.eth.get_block('latest').gasLimit * 100)
    return render_template("dashboard.html", data={
        "dce_status": "Online",
        "blockchain_connected": w3.isConnected(),
        "metamask_wallet": w3.eth.default_account,
        "gas_remaining": gas_remaining
    })

# Automated HyperBot System Tasks
def schedule_tasks():
    while True:
        print("Running scheduled HyperBot operations...")
        time.sleep(86400)  # Run once per day

# Deployment & Execution
if __name__ == "__main__":
    api_thread = threading.Thread(target=app.run, kwargs={"host": "0.0.0.0", "port": 5000})
    api_thread.daemon = True
    api_thread.start()
    schedule_tasks()
