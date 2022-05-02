import styles from './Contact.module.css';
import { useState} from 'react';
import ContactText from "./ContactText";
import ContactNameInmput from "./ContactNameInput";
import ContactEmailInput from "./ContactEmailInput";
import ContactMessageInput from "./ContactMessageInput";
import ContactCheckAGBCheckbox from "./ContactCheckAGBCheckbox";
import SendButton from "../SendButton";

export default function Contact({sendDataOnSubmit,text}) {
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
            <ContactText text={text} />
            <div className="placeholder"></div>
            <form id="ContactForm" onSubmit={onSubmit}>
                <ContactNameInmput onNameChange={onNameChange} />
                <div className="placeholder"></div>
                <ContactEmailInput onEmailChange={onEmailChange} />
                <div className="placeholder"></div>
                <ContactMessageInput onMsgChange={onMsgChange} />
                <div className="placeholder"></div>
                <ContactCheckAGBCheckbox onCheckAGBChange={onCheckAGBChange} />
                <div className="placeholder"></div>
                <SendButton />
            </form>
        </>
    )
}