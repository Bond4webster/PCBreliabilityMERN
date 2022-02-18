import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Radio } from './Radio';


export const Acceptance = (props) => {

    const [values, setValues] = useState([]);
    const val = props.value;
    const [currValue, setCurrValue] = useState(val);
    useEffect(() => {
        getValues();
    }, []);

    const getValues = async () => {
        const response = await axios.get('http://localhost:5000/acceptance');
        setValues(response.data);
    }

    const getCurrValue = (val) => {
        setCurrValue(val)
        props.sendCurrValue(val)
    }

    return (
        <div>
            <label className='mb-3'>Выберите приемку</label>
            {values.map((elem, index) => (
                <Radio
                    name="acceptance"
                    id={`Acceptance-${elem.id}`}
                    value={elem.value}
                    currValue={currValue}
                    key={`acceptance-${index}`}
                    title={elem.name}
                    description={elem.description}
                    getCurrValue={getCurrValue}
                />
            ))}
        </div>
    )
}
