import React, { useState, useEffect } from 'react';
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
        <div className="form-group mb-3">
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} className="form-select" aria-label="select" {...props}>
                {values.map((elem, index) => (
                    <option key={index} value={elem.value}>{elem.width}</option>

                ))}
            </select>
        </div>
    )
}

