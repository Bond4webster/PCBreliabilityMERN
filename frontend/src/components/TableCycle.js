import React from 'react';

export const TableCycle = ({ arr }) => {
    if(arr){return ( 
        <div className="col-6 col-md-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">j</th>
                        <th scope="col">n<sub>j</sub></th>
                        <th scope="col">&Delta;t<sub>j</sub></th>
                        <th scope="col">(K<sub>ц</sub>)<sub>j</sub></th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(el => (
                        <tr key={`TableCycle - ${el.i + 1}`}>
                            <td>{el.i + 1}</td>
                            <td>{el.n}</td>
                            <td>{el.t}</td>
                            <td>{el.kC.toFixed(2)}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div >
    )}else{
        return null
    }
}