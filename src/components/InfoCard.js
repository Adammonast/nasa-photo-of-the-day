import React, {useState, useEffect} from "react";
import axios from "axios";
import MainCard from "./MainCard";

export default function InfoCard() {
const [info, setInfo] = useState(Object);

    useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=cWl4lJg7Z6qH0sfKzzmD35YvXmzkz0kGv9dfGl3o`).then(
        response => {
            console.log(response.data);
            setInfo(response.data);
        })
        .catch(error => {
            console.log("The data was not returned", error)
          })
    }, []);

    return (
        <div className="info-container">
            <MainCard
            title={info.title}
            date={info.date}
            url={info.url}
            explanation={info.explanation}/>
        </div>
    );
}