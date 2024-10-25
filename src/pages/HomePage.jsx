// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';

function HomePage() {
    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Le jardin aux fleurs sauvages</h1>
            </div>
            <div className="intro-div">
                <p>Imaginez son sourire. Ce sourire qui éclaire son visage alors que la surprise succède à la joie.<br></br>Nul besoin d’attendre une occasion particulière pour voir ce sourire fleurir sur le visage de la personne que vous aimez !</p>
                <p>Chacune de nos créations est unique et inspirée par la nature, pour offrir à vos proches un moment qui restera gravé à jamais.</p>
            </div>
            <div className="gallery">
                <Card />
                <Modal />
            </div>
        </div>
    )
}
export default HomePage;