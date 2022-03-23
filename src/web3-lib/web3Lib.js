// import * as abi from "./abi/abi"
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
// const web3 = new Web3(window.ethereum);
const { ethereum } = window;

export async function getAccountBalance(accountAdress, unit = 'ether') {
    let balance = await web3.eth.getBalance(accountAdress);
    return balance;
}

export function weiToEther(value) {
    return web3.utils.fromWei(String(value), 'ether');
}

export function etherToWei(value) {
    return web3.utils.toWei(String(value), 'ether');
}

export async function getAccount() {
    const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
    });
    const account = accounts[0];
    console.log(accounts)
    return account;
}

export async function sendTransaction(sender,receiver,val) {
    return await web3.eth.sendTransaction({
        from: sender,
        to: receiver,
        value: val,
    })
}

export async function estimateGas(sender,receiver) {
    return await web3.eth.estimateGas({
        from : sender,
        to : receiver
    });
}

export async function getGasPrice() {
    return await web3.eth.getGasPrice();
}

export async function disconnect(){
    return await window.ethereum.removeListener('accountsChanged', console.log("accountsChanged"));
}

export async function smartContractWithdraw(contract, amount) {
    
}

const getBalance = async (address) => {
    const response = await ethereum.request({
        method: "eth_getBalance",
        params: [
            address,
            'latest'
        ],
    });
    console.log("response", response);
}


const connectWallet = async () => {
    try {
        if (!ethereum) return alert("Please install MetaMask.");
        const accounts = await ethereum.request({ method: "eth_requestAccounts", });
        // setAddress(accounts[0])
        // setBalance(await getBalance(accounts[0]))
        return accounts[0];
    } catch (error) {
        console.log(error);
        throw new Error("No ethereum object");
    }
};
/**
 * 
 * 
 * 
 * if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    // window.web3 = new Web3(web3.currentProvider);
    web3 = new Web3(window.ethereum);

} else {
    //If you click "ok" you would be redirected . Cancel will load this website
    if (window.confirm('Install Metamask')) {
        window.location.href = 'https://metamask.io/download/';
    };
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
 */