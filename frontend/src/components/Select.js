import React, { useState, useEffect } from 'react';
import { Label } from './Label';
import { HelpBtn } from './HelpBtn';
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
            <div className="d-flex justify-content-between">
                <Label id={props.id} label={props.label} sub={props.sub} />
                <HelpBtn description={props.description} />
            </div>
            <select id={props.id} className="form-select" aria-label="select" {...props}>
                {values.map((elem, index) => (
                    <option key={index} value={elem.value}>{elem.width}</option>

                ))}
            </select>
        </div>
    )
}

