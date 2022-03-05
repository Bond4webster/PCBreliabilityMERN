import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Steps.css';
import { Input } from '../Input';
import { Select } from '../Select';
import { Acceptance } from '../Acceptance';
import { Exploitation } from '../Exploitation';
import { Clever } from '../Clever';

export const Steps = ({ sendToResult }) => {


    const navigate = useNavigate();
    const [param, setParam] = useState(
        {
            kExploitation: "2",
            kAcceptance: "1",
            layer: "1",
            countHoles: "338",
            length: "20",
            width: "16",
            kWidth: "1",
            cMountConnect:"110",
            cMetalConnect:"12",
            n1:"12",
            n2:"0",
            cycleCount: "2",
            cycleCount2:"4",
            sum1:[],
            sum2:[]
        });

    const resolve = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products/sum', {
            param
        }).then(response => {
            sendToResult(response.data)
            navigate("/result")
        }
        );


    }
    const getSum1 =(sum1)=>{
        setParam({...param,sum1})
     }
     const getSum2 =(sum2)=>{
        setParam({...param,sum2})
     }
    const sendCurrAcceptance = (kAcceptance) => {
        setParam({ ...param, kAcceptance })
    }
    const sendCurrExploitation = (kExploitation) => {
        setParam({ ...param, kExploitation })
    }

    return (
        <div className="steps">
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <form onSubmit={resolve}>
                            <div className="row">
                                <Input
                                    label={"Количество слоев"}
                                    id="layer"
                                    value={param.layer}
                                    onChange={(e) => setParam({ ...param, layer: e.target.value })}
                                />
                                <Input
                                    label={"Общее количество отверстий"}
                                    id="countHoles"
                                    value={param.countHoles}
                                    onChange={(e) => setParam({ ...param, countHoles: e.target.value })}
                                />
                                <Input
                                    label={"Длина платы, см"}
                                    id="length"
                                    value={param.length}
                                    onChange={(e) => setParam({ ...param, length: e.target.value })}
                                />
                                <Input
                                    label={"Ширина платы, см"}
                                    id="width"
                                    value={param.width}
                                    onChange={(e) => setParam({ ...param, width: e.target.value })}
                                />
                                <Input
                                    label={"Количество соединений поверхностного монтажа"}
                                    id="cMountConnect"
                                    value={param.cMountConnect}
                                    onChange={(e) => setParam({ ...param, cMountConnect: e.target.value })}
                                />
                                <Input
                                    label={"Количество металлизированных отверстий"}
                                    id="cMetalConnect"
                                    value={param.cMetalConnect}
                                    onChange={(e) => setParam({ ...param, cMetalConnect: e.target.value })}
                                />
                                <Input
                                    label={"Количество сквозных отверстий пропаянных способом «пайка волной»"}
                                    id="n1"
                                    value={param.n1}
                                    onChange={(e) => setParam({ ...param, n1: e.target.value })}
                                />
                                <Input
                                    label={"Количество сквозных отверстий пропаянных ручным способом"}
                                    id="n2"
                                    value={param.n2}
                                    onChange={(e) => setParam({ ...param, n2: e.target.value })}
                                />
                                <Select
                                    label={"Ширина проводящих дорожек"}
                                    id="kWidth"
                                    value={param.kWidth}
                                    onChange={(e) => setParam({ ...param, kWidth: e.target.value })}
                                />
                                <Acceptance
                                    id="kAcceptance"
                                    value={param.kAcceptance}
                                    sendCurrValue={sendCurrAcceptance}
                                />
                                <Exploitation
                                    id="kExploitation"
                                    value={param.kAcceptance}
                                    sendCurrValue={sendCurrExploitation}
                                />
                                <Clever
                                    id="cycleCount"
                                    value={param.cycleCount}
                                    onChange={(e) => setParam({ ...param, cycleCount: e.target.value })}
                                    getSum={getSum1}
                                />
                                <Clever
                                    id="cycleCount2"
                                    value={param.cycleCount2}
                                    onChange={(e) => setParam({ ...param, cycleCount2: e.target.value })}
                                    getSum={getSum2}
                                />
                                
                                <button type="submit" className="btn btn-success mt-2">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}