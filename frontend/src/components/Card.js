import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Card = ({card,deleteCard,sendToResult}) => {
    const navigate = useNavigate()
    const openRes = ()=>{
        sendToResult(card.id)
        navigate(`/result/${card.id}`)
    }


    return (
        <div className="card w-100 mb-2">
            <div className="card-body">
                <h5 className="card-title">Расчет № {card.id}</h5>
                <p className="card-text"> Дата расчета: {card.createdAt.replace("T"," ").slice(0,19)}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/result/${card.id}`} className="btn btn-success" onClick={openRes}>Открыть</Link>
                    <button onClick={ () => deleteCard(card.id) } className="btn btn-danger">Удалить</button>
                </div> 
            </div>
        </div>
    )
}