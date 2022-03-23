import React from 'react';
import "./coffee.css"
import shortenAddress from "./utils/shortenAdress" 
export default function AddresAndAmount(props) {
    return (
        <div className="address-amount">
            <div className="my-text" >
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}>Adress: {shortenAddress(props.addres.toLowerCase())}</div>
                    </div>
                </div>
            </div>

            <div className="my-text">
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}>Balance: {props.balance.slice(0,8)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}