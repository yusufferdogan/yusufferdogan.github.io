import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function AmountInput(props) {
    return (
        <div className="form-outline amount-input ">
            <input value={props.input} onChange={e => props.setInput(e.target.value)}
                type="text" id="form16" className="form-control rounded-pill"
                data-mdb-showcounter="true" required
                style={{
                    border: "3px solid", borderColor: props.color,
                    outline: "none", backgroundColor: "#1e1e1e",
                    color: "white",
                    counterColor: "white"
                }}
            />
            <div style={{ display: "inline-block", }}>
                <label className="form-label"
                    style={{ color: props.color, fontSize: "0.8rem" }} htmlFor="form16">{props.error}</label>
                <span className="input-count"
                    style={{ color: props.color, fontSize: "0.8rem", marginLeft: "0.3rem" }}>
                    {props.input.length} / 8</span>
            </div>
        </div>
    );

}
