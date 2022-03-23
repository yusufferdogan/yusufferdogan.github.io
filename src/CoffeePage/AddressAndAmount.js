import React from 'react';
import "./coffee.css"
import shortenAddress from "./utils/shortenAdress" 
export default function AddresAndAmount(props) {
    return (
        <div className="address-amount">
            <div className="my-text" >
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}><strong>Adress: {shortenAddress(props.addres.toLowerCase())}</strong></div>
                    </div>
                </div>
            </div>
            <div style={{width: "0.1rem"}}></div>
            <div className="my-text" style = {{paddingRight:"0.15rem"}}>
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}><strong>Balance:  {props.balance.slice(0,8)}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}