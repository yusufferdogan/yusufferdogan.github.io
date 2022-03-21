import React from 'react';
import "./coffee.css"
export default function AddresAndAmount() {
    return (
        <div className="address-amount">
            <div className="my-text" >
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}>Adress : 0xcf...7d65</div>
                    </div>
                </div>
            </div>

            <div className="my-text">
                <div className="module-border-wrap">
                    <div className="module">
                        <div style={{ "display": "inline-block" }}>Balance: 0.061577</div>
                    </div>
                </div>
            </div>
        </div>
    );
}