import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { TableCycle } from '../components/TableCycle';
import { TableTemp } from '../components/TableTemp';

export const Result = ({ resUrl,result }) => {
    const [values, setValues] = useState();
    console.log('result', result)
    useEffect(() => {
        getValues();
    }, []);

    const getValues = async () => {
        const response = await axios.get(`http://localhost:5000/history/${resUrl}`);
        setValues(response.data);
    }
    if(typeof values === "object"){
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">К<sub>Э</sub></th>
                            <th scope="col">К<sub>П</sub></th>
                            <th scope="col">К<sub>сл</sub></th>
                            <th scope="col">N<sub>&sum;</sub></th>
                            <th scope="col">S</th>
                            <th scope="col">N<sub>пр</sub></th>
                            <th scope="col">К<sub>Ш</sub></th>
                            <th scope="col">&sum;&lambda;<sub>соед</sub></th>
                            <th scope="col">m</th>
                            <th scope="col">l</th>
                            <th scope="col">&tau;<sub>вкл</sub></th>
                            <th scope="col">&tau;<sub>выкл</sub></th>
                            <th scope="col">N<sub>пов</sub></th>
                            <th scope="col">N<sub>р</sub></th>
                            <th scope="col">N<sub>в</sub></th>
                            <th scope="col">N<sub>мет</sub></th>
                            <th scope="col">N<sub>1</sub></th>
                            <th scope="col">N<sub>2</sub></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{values.kExploitation}</td>
                            <td>{values.kAcceptance}</td>
                            <td>{values.kLayer}</td>
                            <td>{values.countHoles}</td>
                            <td>{values.square}</td>
                            <td>{values.countPrintedConductor}</td>
                            <td>{values.kWidth}</td>
                            <td>{Number(values.sumConnF).toExponential(2)}</td>
                            <td>{values.cycleCount}</td>
                            <td>{values.cycleCount2}</td>
                            <td>{values.tauOn}</td>
                            <td>{values.tauOff}</td>
                            <td>{values.cMountConnect}</td>
                            <td>{values.cMountConnect}</td>
                            <td>{values.сWaveSoldering}</td>
                            <td>{values.cMetalConnect}</td>
                            <td>{values.n1}</td>
                            <td>{values.n2}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <TableTemp arr={JSON.parse(values.sum1)}/>
                    <TableCycle arr={JSON.parse(values.sum2)}/>
                </div>
                <p className='pl-3'>
                    {values.lambda ? `Интенсивность отказов печатной платы: ${values.lambda.toExponential(2)}` : "Заполните пустые поля"}<br />
                    Вероятность безотказной работы печатной платы: {values.Pt}<br />
                    Наработка печатной платы за один календарный год: {values.tn} ч
                </p>
    
            </div>
        )
    }else{
        return null
    }
    
}