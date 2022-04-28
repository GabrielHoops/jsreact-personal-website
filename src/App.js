import Navigation from "./components/Navigation/Navigation";
import Title from "./components/Title/Title";
import BackgroundDefault from "./components/BackgroundDefault/BackgroundDefault";
import Image from "./components/Image/Image";
import Socials from "./components/Socials/Socials";
import Archive from "./components/Archive/Archive";
import {useEffect, useState} from 'react';

function App() {
    const [experience,setExperience] = useState([]);
    async function fetchData() {
        const response = await fetch('http://localhost:4000/experience');
        const data = await response.json();
        setExperience(data);
    }
    useEffect(()=> {
        fetchData();
    },[])
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
        </div>
    );
}
export default App;