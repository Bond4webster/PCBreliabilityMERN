import React from 'react';

export const Result = ({ result }) => {
    console.log(result)
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
                        <td>{result.kExploitation}</td>
                        <td>{result.kAcceptance}</td>
                        <td>{result.kLayer}</td>
                        <td>{result.countHoles}</td>
                        <td>{result.square}</td>
                        <td>{result.E7}</td>
                        <td>{result.kWidth}</td>
                        <td>{result.E9.toExponential(2)}</td>
                        <td>{result.cycleCount}</td>
                        <td>{result.cycleCount2}</td>
                        <td>{result.E16}</td>
                        <td>{result.E17}</td>
                        <td>{result.cMountConnect}</td>
                        <td>{result.cMountConnect}</td>
                        <td>{result.E30}</td>
                        <td>{result.cMetalConnect}</td>
                        <td>{result.n1}</td>
                        <td>{result.n2}</td>
                    </tr>
                </tbody>
            </table>
            <p className='pl-3'>
                {result.lambda ? `Интенсивность отказов печатной платы: ${result.lambda.toExponential(2)}` : "Заполните пустые поля"}<br />
                Вероятность безотказной работы печатной платы: {result.Pt}<br />
                Наработка печатной платы за один календарный год: {result.tn} ч
            </p>

        </div>
    )
}