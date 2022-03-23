import React, { useState, useEffect } from "react";
import "./coffee.css"
import Icons from "../components/icons"
import AddresAndAmount from './AddressAndAmount'
import ConnectButton from './connectButton'
import AmountInput from './AmountInput'
import web3Lib from "../web3-lib/web3Lib"
import Web3 from 'web3';

export default function CoffeeComponent(props) {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const [connectClicked, setConnectClicked] = useState(false);
    const [disconnectClicked, setDisconnectClicked] = useState(false);
    const [connected, setConnected] = useState(false)
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [color, setColor] = useState("#FFFFFF");
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function load() {
            const accounts = await web3.eth.requestAccounts();
            const _balance = await web3.eth.getBalance(accounts[0]);
            setAddress(accounts[0]);
            setBalance(_balance);
        }
        if (connectClicked) {
            load().then(function (account) {
                setConnectClicked(false)
                setConnected(true)
            })
            console.log("clicked")
        }
        if (disconnectClicked) {
            setDisconnectClicked(false)
            setConnected(false);
        }
        if (connected) {
            console.log("userAccount", address)
            var regexp = /^([0-9]+\.?[0-9]*|\.[0-9]+)$/;
            if (input.length === 0) {
                setError("The amount field is required.")
                setColor("#ec4f4f")
            }
            else if (!regexp.test(input)) {
                setError("The amount must contain only decimal values")
                setColor("#ec4f4f")
            }
            else if (parseFloat(input, 10) < 0.000001) {
                setError("The amount must be 0.000001 or more")
                setColor("#ec4f4f")
            }
            else if (input.length > 8) {
                setError("The amount must not be greater than 8 characters.")
                setColor("#ec4f4f")
            }
            else {
                setError("")
                setColor("green")
            }
        }
    }, [connected, connectClicked, disconnectClicked, input, address, web3.eth]);

    if (connected) {
        return (
            <div className="coffee-body">
                <ConnectButton onClick={() => setDisconnectClicked(true)}
                    title="DISCONNECT TO METAMASK"></ConnectButton>
                <AddresAndAmount addres={address} 
                balance={web3.utils.fromWei(balance,'ether')}></AddresAndAmount>
                <AmountInput input={input} error={error} color={color} setInput={setInput}></AmountInput>
                <hr></hr>
                <Icons></Icons>
            </div>
        );
    }
    else {
        return (
            <div className="coffee-body">
                <ConnectButton onClick={() => setConnectClicked(true)}
                    title="CONNECT TO METAMASK"></ConnectButton>
                {/* <ConnectButton onClick={async () => { await connectMetamask() }} title="CONNECT TO METAMASK"></ConnectButton> */}
                <hr></hr>
                <Icons></Icons>
            </div>
        );
    }

}
