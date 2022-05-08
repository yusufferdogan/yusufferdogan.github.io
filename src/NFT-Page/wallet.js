import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import * as web3Lib from "../web3-lib/web3Lib"
import ConnectButton from '../components/connectButton'

const { ethereum } = window;

export default function WalletComponent(props) {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const [connectClicked, setConnectClicked] = useState(false);
    const [disconnectClicked, setDisconnectClicked] = useState(false);
    const [connected, setConnected] = useState(false)

    if (ethereum) {
        ethereum.on('accountsChanged', (accounts) => {
            setConnectClicked(true);
        });

        ethereum.on('chainChanged', (chainId) => {
            setConnectClicked(true);
        });
    }

    useEffect(() => {
        async function load() {
            if (!ethereum) {
                if (window.confirm('Please install Metamask')) {
                    window.location.href = 'https://metamask.io/download/';
                };
            }
            const accounts = await web3.eth.requestAccounts();
            const _balance = await web3Lib.getAccountBalance(accounts[0]);
            const _network = await web3.eth.net.getNetworkType();
            console.log(_network);
        }
        if (connectClicked) {
            load().then(function (account) {
                setConnectClicked(false)
                setConnected(true)
            })
            console.log("clicked")
        }
        else if (disconnectClicked) {
            setDisconnectClicked(false)
            setConnected(false);
        }

    }, [connected, connectClicked, disconnectClicked, web3.eth]);

    if (connected) {
        return (<ConnectButton onClick={() => setDisconnectClicked(true)}
            title="DISCONNECT TO METAMASK"></ConnectButton>)
    }
    else {
        return (
            <div className="coffee-body">
                <ConnectButton onClick={() => setConnectClicked(true)}
                    title="CONNECT TO METAMASK"></ConnectButton>
                <hr></hr>
                <div style={{ color: "white" }}> 2022 - Ahmet Yusuf Erdoğan</div>
            </div>
        );
    }



}