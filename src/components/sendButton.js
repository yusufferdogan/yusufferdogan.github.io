import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function SendButton(props) {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <button type="button" className="btn btn-dark"
                onClick={props.onClick} disabled={props.disabled}
                style={{ padding: "1.5% 3%", fontSize: "0.9rem" }}><strong>SEND</strong></button>
        </div>
    );
}