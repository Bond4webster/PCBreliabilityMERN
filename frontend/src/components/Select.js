import React, { useState, useEffect } from 'react';
import { Label } from './Label';
import axios from "axios";

export const Select = (props) => {

    const [values, setValues] = useState([]);

    useEffect(() => {
        getValues();
    }, []);

    const getValues = async () => {
        const response = await axios.get('http://localhost:5000/products/kwidth');
        setValues(response.data);
    }

    return (
        <div className="form-group mb-3 col-12 col-sm-6 col-md-auto">
            <Label id={props.id} label={props.label} sub={props.sub}/>
            <select id={props.id} className="form-select" aria-label="select" {...props}>
                {values.map((elem, index) => (
                    <option key={index} value={elem.value}>{elem.width}</option>

                ))}
            </select>
        </div>
    )
}

