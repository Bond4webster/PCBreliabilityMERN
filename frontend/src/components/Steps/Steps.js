import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Steps.css';
import { Input } from '../Input';
import { Select } from '../Select';
import { Acceptance } from '../Acceptance';
import { Exploitation } from '../Exploitation';
import { Clever } from '../Clever';
import { Textarea } from '../Textarea';
import { TextareaProvider } from '../../context/TextareaContext';


export const Steps = ({ sendToResult }) => {
    const navigate = useNavigate();

    const [param, setParam] = useState(
        {
            kExploitation: "2",
            kAcceptance: "1",
            layer: "2",
            countHoles: "338",
            a: "20",
            b: "16",
            kWidth: "1",
            cMountConnect: "110",
            cMetalConnect: "12",
            n1: "0",
            n2: "12",
            cycleCount: "2",
            cycleCount2: "4",
            sum1: [],
            sum2: []
        });
    //---------------------------------------------------------------
    const [description, setDescription] = useState([]);

    useEffect(() => {
        getDescription();
    }, []);

    const getDescription = async () => {
        const response = await axios.get('http://localhost:5000/description');
        const arrPair = response.data.map((el) => [el.coefficient, el.description])
        const obj = Object.fromEntries(arrPair);
        setDescription(obj);
    }
    //--------------------------------------------------------------
    const resolve = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/history', {
            param
        }).then(response => {
            sendToResult(response.data)
            navigate(`/result/${response.data}`)
        }
        );


    }
    const getSum1 = (sum1) => {
        setParam({ ...param, sum1 })
    }
    const getSum2 = (sum2) => {
        setParam({ ...param, sum2 })
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
                    <TextareaProvider>
                        <div className="col-12 col-md-9">
                            <form onSubmit={resolve}>
                                <div className="row">
                                    <Input
                                        description={description.layer}
                                        label={"L"}
                                        id="layer"
                                        value={param.layer}
                                        onChange={(e) => setParam({ ...param, layer: e.target.value })}
                                    />
                                    <Input
                                        description={description.countHoles}
                                        label={"N"}
                                        sub={'∑'}
                                        id="countHoles"
                                        value={param.countHoles}
                                        onChange={(e) => setParam({ ...param, countHoles: e.target.value })}
                                    />
                                    <Input
                                        description={description.a}
                                        label={"A"}
                                        id="a"
                                        value={param.a}
                                        onChange={(e) => setParam({ ...param, a: e.target.value })}
                                    />
                                    <Input
                                        description={description.b}
                                        label={"B"}
                                        id="b"
                                        value={param.b}
                                        onChange={(e) => setParam({ ...param, b: e.target.value })}
                                    />
                                    <Input
                                        description={description.cMountConnect}
                                        label={"N"}
                                        sub={"пов"}
                                        id="cMountConnect"
                                        value={param.cMountConnect}
                                        onChange={(e) => setParam({ ...param, cMountConnect: e.target.value })}
                                    />
                                    <Input
                                        description={description.cMetalConnect}
                                        label={"N"}
                                        sub={"мет"}
                                        id="cMetalConnect"
                                        value={param.cMetalConnect}
                                        onChange={(e) => setParam({ ...param, cMetalConnect: e.target.value })}
                                    />
                                    <Input
                                        description={description.n1}
                                        label={"N"}
                                        sub={"1"}
                                        id="n1"
                                        value={param.n1}
                                        onChange={(e) => setParam({ ...param, n1: e.target.value })}
                                    />
                                    <Input
                                        description={description.n2}
                                        label={"N"}
                                        sub={"2"}
                                        id="n2"
                                        value={param.n2}
                                        onChange={(e) => setParam({ ...param, n2: e.target.value })}
                                    />
                                    <Select
                                        description={description.W}
                                        label={"W"}
                                        id="kWidth"
                                        value={param.kWidth}
                                        onChange={(e) => setParam({ ...param, kWidth: e.target.value })}
                                    />
                                </div>
                                <div className="row">
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
                                        label="Число циклов наработки, m"
                                        var1={"t"}
                                        var2={"tau"}
                                        legend={"Циклы наработки"}
                                        value={param.cycleCount}
                                        description={description.cycleCount}
                                        descriptionVar1={description.tPP}
                                        descriptionVar2={description.tau}
                                        onChange={(e) => setParam({ ...param, cycleCount: e.target.value })}
                                        getSum={getSum1}
                                    />
                                    <Clever
                                        id="cycleCount2"
                                        label="m+l"
                                        var1={"n"}
                                        var2={"t"}
                                        legend={"Циклы эксплуатации"}
                                        value={param.cycleCount2}
                                        description={description.cycleCount2}
                                        descriptionVar1={description.nj}
                                        descriptionVar2={description.dtj}
                                        onChange={(e) => setParam({ ...param, cycleCount2: e.target.value })}
                                        getSum={getSum2}
                                    />

                                    <button type="submit" className="btn btn-success mt-3 mx-auto w-auto">Отправить</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-md-3">
                            <Textarea id="textarea" />
                        </div>
                    </TextareaProvider>
                </div>
            </div>
        </div>
    )
}