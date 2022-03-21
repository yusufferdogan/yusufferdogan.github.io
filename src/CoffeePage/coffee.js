import React,{useState, useEffect} from "react";
import "./coffee.css"
import Icons from "../components/icons"
import AddresAndAmount from './AddressAndAmount'
import ConnectButton from './connectButton'

export default function CoffeeComponent() {
    const [connected,toggleConnected] = useState(true)

    useEffect(() => {
        // alert(connected)
    });

    if(connected) {
        return (
            <div className="coffee-body">
                <ConnectButton onClick = {() => toggleConnected(false)} title = "DISCONNECT TO METAMASK"></ConnectButton>
                <AddresAndAmount></AddresAndAmount>
                <hr></hr>
                <Icons></Icons>
            </div>
        );  
    }
    else {
        return (
            <div className="coffee-body">
                <ConnectButton onClick = {() => toggleConnected(true)} title="CONNECT TO METAMASK"></ConnectButton>
                {/* <AddresAndAmount></AddresAndAmount> */}
                <hr></hr>
                <Icons></Icons>
            </div>
        );
    }

}
