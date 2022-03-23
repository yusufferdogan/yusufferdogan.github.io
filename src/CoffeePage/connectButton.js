import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default function ConnectButton(props) {
    return (
        <div style={{marginBottom: '3rem'}}>
            <button type="button" className="btn btn-dark" onClick={props.onClick}
            style={{ padding: "1.5% 3%" , fontSize: "0.9rem"}}><strong style={{ display: "block", }}>{props.title}</strong></button>
        </div>
    );
}