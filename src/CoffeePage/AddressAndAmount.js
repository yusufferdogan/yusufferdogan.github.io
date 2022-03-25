import React, { useRef } from 'react';
import "./coffee.css"
import shortenAddress from "./utils/shortenAdress"
export default function AddresAndAmount(props) {
    const textAreaRef = useRef(null);
    return (
        <div className="address-amount">
            <div className="my-text" type="button"
                onClick={() => {
                    navigator.clipboard.writeText(props.addres)
                    alert("address copied to clipboard")
                }}
            >
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}><strong>Adress: {shortenAddress(props.addres.toLowerCase())}</strong></div>
                    </div>
                </div>
            </div>
            <div style={{ width: "0.1rem" }}></div>
            <div className="my-text" style={{ paddingRight: "0.15rem" }}>
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}><strong>Balance:  {props.balance.slice(0, 8)}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}