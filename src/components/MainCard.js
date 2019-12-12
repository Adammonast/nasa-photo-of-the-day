import React from "react";

const MainCard = props => {
    return (
        <div className = "main-card">
            <img className="image" src={props.url} alt="NASA Pic of the Day"/>
            <h2>Title: {props.title}</h2>
            <h3>Date: {props.date}</h3>
            <p>Description: {props.explanation}</p>
        </div>
    );
}
export default MainCard