import Particles from 'react-particles-js';
import '../assets/css/index.css'
import { Card } from 'react-bootstrap';
import React, { useState } from 'react';
import ReactImg from '../assets/img/card-img/react.png'
import KubernetesImg from '../assets/img/card-img/kubernetes.png'

const Index = () => {
    const [card, setCard] = useState("");
    const cards = [
        {name: "Kubernetes", image: KubernetesImg, text: "Some quick example text to build on the card title and make up the bulk of the card's content.", id:"kubernetes"},
        {name: "React", image: ReactImg, text: "Some quick example text to build on the card title and make up the bulk of the card's content.", id:"react"},
    ]
    const handleCardHover = (e: any) => {
        e.preventDefault();
        const id: string = e.target.id;
        setCard(id);
    }
    const handleCardLeave = (e: any) => {
        e.preventDefault();
        setCard("");
    }
    const getCards = cards.map(pCard => {
            return (
                <Card style={{ width: '18rem' }} bg="dark" className="arthur-gg-card col-sm-6" id={pCard.id} key={pCard.id} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
                    <Card.Img variant="top" src={pCard.image} id={pCard.id} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave} />
                    {card === pCard.id && (
                        <Card.Body className="arthur-gg-cardbody">
                            <Card.Title className="text-white">{pCard.name}</Card.Title>
                            <Card.Text className="text-white">{pCard.text}</Card.Text>
                        </Card.Body>
                    )}
                </Card>
            )
    });
    
    return (
        <div id="index">
            <div className="container-fluid top-section bg-dark">
                <div className="text-center">
                    <h1 className="arthurgg-title">Arthur.</h1>
                </div>
                <div id="arthur-gg-cards" style={{justifyContent: "center",alignItems: "center"}}>
                        {/* {getCards} */}
                </div>
                <Particles />
            </div>
        </div>
    )
}

export default Index;