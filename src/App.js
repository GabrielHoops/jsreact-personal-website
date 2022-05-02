import Navigation from "./components/Navigation/Navigation";
import Title from "./components/Title/Title";
import BackgroundDefault from "./components/BackgroundDefault/BackgroundDefault";
import Image from "./components/Image/Image";
import Socials from "./components/Socials/Socials";
import Archive from "./components/Archive/Archive";
import {useEffect, useState} from 'react';
import {addContactToApi, getAllContacts} from "./ContactApiServices";
import Contact from "./components/Contact/Contact";
import ContactText from "./components/Contact/ContactText";

function App() {
    const [experience,setExperience] = useState([]);
    const [contacts,setContacts] = useState([]);
    const [contactText,setContactText] = useState("");
    let triggerSubmit = false;

    async function fetchData() {
        const response = await fetch('http://localhost:4000/experience');
        const data = await response.json();
        setExperience(data);
    }

    async function loadContactText() {
        const response = await fetch('http://localhost:4000/texts');
        const data = await response.json();
        let text = data.contacttext.text;
        setContactText(text);
    }

    function addContact(contact) {
        if (triggerSubmit === false) {
            let id = contacts.length + 1;
            contact.id = id;
            addContactToApi(contact);
            triggerSubmit = true;
            alert('Danke für deine Nachricht');
        } else {

        }
    }

    async function loadContacts() {
        const apiContacts = await getAllContacts();
        setContacts(apiContacts);
    }

    useEffect(()=> {
        fetchData();
        loadContacts();
        loadContactText();
    },[]);

    return (
        <div className="App">
            <Navigation/>
            <div className="container content">
                <div className="row">
                    <div className="col-md-5">
                        <Title />
                    </div>
                    <div className="col-md-5 backgroundrelative">
                        <BackgroundDefault />
                        <Image />
                    </div>
                    <div className="col-md-2">
                        <Socials/>
                    </div>
                </div>
                <div className="row archive">
                    <div className="col-md-2"></div>
                    {experience.map((exp,i)=>(
                        <div className="col-md-2" key={i}>
                            <Archive key={i} data={exp}/>
                        </div>
                    ))}
                    <div className="col-md-2"></div>
                </div>
            </div>
            <Contact sendDataOnSubmit={addContact} text={contactText} />
        </div>
    );
}
export default App;