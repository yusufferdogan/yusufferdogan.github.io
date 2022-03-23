import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../CoffeePage/coffee.css"

export default function icons() {
    return (
        <div className="outer-icons">
            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-gitlab fa-2x" style={{ color: "#ffac44" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-twitter fa-2x" style={{ color: "#55acee" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-instagram fa-2x" style={{ color: "#ac2bac" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-linkedin-in fa-2x" style={{ color: "#0082ca" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-stack-overflow fa-2x" style={{ color: "#ffac44" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-slack fa-2x" style={{ color: "white" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-github fa-2x" style={{ color: "white" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-telegram fa-2x" style={{ color: "#26a5e4" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-whatsapp fa-2x" style={{ color: "#24cf62" }}></i>
            </a>

            {/* <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-phone-hangup fa-2x" style={{ color: "white" }}></i>
            </a>

            <a href="https://twitter.com/" role="button" className={"inner-icons"}>
                <i className="fab fa-envelope fa-2x" style={{ color: "white" }}></i>
            </a> */}
        </div>
    );
}