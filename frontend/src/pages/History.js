import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Card } from '../components/Card';


export const History = ({sendToResult}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCards();
    }, []);

    const getCards = async () => {
        const response = await axios.get('http://localhost:5000/history');
        setCards(response.data);
    }

    const deleteCard = async (id) => {
        await axios.delete(`http://localhost:5000/history/${id}`);
        getCards();
    }

    return (
        <div>
            <h1>Архив расчетов</h1>
            <div className="histories-container">
            { cards.map((card, index) => (
                        <Card
                            key={`Card-${index}`}
                            card={card}
                            deleteCard={deleteCard}
                            sendToResult={sendToResult} 
                        />
                    )) }
            </div>
        </div>
    )
}

