import styles from './Contact.module.css';
import { useState} from 'react';

export default function Contact({sendDataOnSubmit}) {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [msg,setMsg] = useState('');
    const [checkAGB,setCheckAGB] = useState(false);

    function onNameChange(e) {
        setName(e.target.value);
    }

    function onEmailChange(e) {
        setEmail(e.target.value);
    }

    function onMsgChange(e) {
        setMsg(e.target.value);
    }

    function onCheckAGBChange(e) {
        setCheckAGB(e.target.value === 'on');
    }

    function onSubmit(e) {
        e.preventDefault();
        sendDataOnSubmit({
           name:name,
           email:email,
           msg:msg,
           checkAGB:checkAGB
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <div className={styles.title}>Kontakt</div>
                    <div className={styles.textwhite}>Du hast Fragen oder Anregungen? Oder möchtest einfach Meinungen austauschen? Dann schreib mir einfach eine Nachricht!</div>
                </div>
            </div>
            <div className="placeholder"></div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-4">Name</div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" id="name" aria-label="Name"
                               aria-describedby="basic-addon1" name="name" onChange={onNameChange}/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="placeholder"></div>
                <div className="row">
                    <div className="col-md-4">E-Mail-Adresse</div>
                    <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="E-Mail" id="mail" aria-label="Name"
                            aria-describedby="basic-addon1" name="email" onChange={onEmailChange}/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="placeholder"></div>
                <div className="row">
                    <div className="col-md-4">Nachricht</div>
                    <div className="col-md-6">
                        <textarea className="form-control" aria-label="Nachricht" id="msg" name="msg" onChange={onMsgChange}></textarea>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="placeholder"></div>
                <div className="row">
                    <div className="col-md-4">
                        <a href="./about.html">AGBs</a> gelesen
                    </div>
                    <div className="col-md-6">
                        <input type="checkbox" id="checkagb" aria-label="Checkbox for following text input" name="checkAGB" onChange={onCheckAGBChange}/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="placeholder"></div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-6">
                        <button id="btnsubmit" type="submit" className="btn btn-primary">Senden</button>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </form>
        <div id="thx"></div>
            </>
    )
}