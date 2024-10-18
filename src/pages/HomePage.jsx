// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from '../components/Card';
import Modal from "../components/Modal";

function HomePage() {
    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Le jardin aux fleurs sauvages</h1>
            </div>
            <div className="gallery">
                <Card />
                <Modal />
            </div>
        </div>
    )
}
export default HomePage;