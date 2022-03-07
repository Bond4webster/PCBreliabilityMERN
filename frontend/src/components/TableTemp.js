import React from 'react';

export const TableTemp = ({ arr }) => {

    return (
        <div className="col-6 col-md-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">i</th>
                        <th scope="col">(t<sub>ПП</sub>)<sub>i</sub></th>
                        <th scope="col">&tau;<sub>i</sub></th>
                        <th scope="col">(K<sub>t </sub>)<sub>i</sub></th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(el => (
                        <tr key={`TableTemp - ${el.i + 1}`}>
                            <td>{el.i + 1}</td>
                            <td>{el.t}</td>
                            <td>{el.tau}</td>
                            <td>{el.kT.toFixed(2)}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div >
    )
}