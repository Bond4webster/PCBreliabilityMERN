import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Steps.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler, faTemperatureLow, faClock, faFileAlt} from '@fortawesome/free-solid-svg-icons'
import { Input } from '../Input';

export const Steps = ({sendToResult})=>{
    
    
    const navigate = useNavigate();
    const [param, setParam] = useState(
        {
            kExploitation:"2",
            kAcceptance:"1",
            kLayer:"1",
            countHoles:"338",
            lengthPcb:"20",
            widthPcb:"16",
            countPrintedConductor:"224",
            kWidth:"1"
        });

    const resolve = async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/products/sum',{
            param
        }).then(response => {
            sendToResult(response.data)
            navigate("/result")
        }    
        );
        
        
    }
    
    return (
         <div className="steps">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 mb-5">
                    <div className="stepsWrapper">
                        <div className="step step01 active">
                            <FontAwesomeIcon icon={faRuler} />
                            <div className="title active">Габаритные параметры</div>
                        </div>
                        <div className="step step02 ">
                            <FontAwesomeIcon icon={faTemperatureLow} />
                            <div className="title ">Температурные параметры</div>
                        </div>
                        <div className="step step03">
                            <FontAwesomeIcon icon={faClock} />
                            <div className="title">Временные параметры</div>
                        </div>
                        <div className="step step04">
                            <FontAwesomeIcon icon={faFileAlt} />
                            <div className="title">Другие параметры</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Габаритные параметры ПП</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Температурные параметры ПП</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Параметры времени работы ПП</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Другие параметры</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-9">
                    <form onSubmit={resolve}>
                        <Input 
                            label={"Коэффициент эксплуатации"} 
                            id={1}
                            value={ param.kExploitation }
                            onChange={ (e) => setParam({...param, kExploitation:e.target.value}) }                           
                        />
                        <Input 
                            label={"Коэффициент приемки"} 
                            id={2}
                            value={ param.kAcceptance }
                            onChange={ (e) => setParam({...param, kAcceptance:e.target.value}) }
                        />
                        <Input 
                            label={"Коэффициент слоев"} 
                            id={3}
                            value={ param.kLayer }
                            onChange={ (e) => setParam({...param, kLayer:e.target.value}) }
                        />
                        <Input 
                            label={"Общее количество отверстий"} 
                            id={4}
                            value={ param.countHoles }
                            onChange={ (e) => setParam({...param, countHoles:e.target.value}) }
                        />
                        <Input 
                            label={"Длина платы, см"} 
                            id={5}
                            value={ param.lengthPcb }
                            onChange={ (e) => setParam({...param, lengthPcb:e.target.value}) }
                        />
                        <Input 
                            label={"Ширина платы, см"} 
                            id={6}
                            value={ param.widthPcb }
                            onChange={ (e) => setParam({...param, widthPcb:e.target.value}) }
                        />
                        <Input 
                            label={"Количество печатных проводников"} 
                            id={7}
                            value={ param.countPrintedConductor }
                            onChange={ (e) => setParam({...param, countPrintedConductor:e.target.value}) }
                        />
                        <Input 
                            label={"Коэффициент ширины проводящих дорожек"} 
                            id={8}
                            value={ param.kWidth }
                            onChange={ (e) => setParam({...param, kWidth:e.target.value}) }
                        />
                        <button type="submit" className="btn btn-success mt-2">Отправить</button>  
                    </form> 
                </div>
            </div>
        </div>
    </div>
    )
}