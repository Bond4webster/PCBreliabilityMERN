import React, { useState } from 'react';
import { Label } from './Label';

export const Radio = (props) => {
    const [value, setValue] = useState(props.value);

    const handleChange = (e) => {
        setValue(e.target.value);
        props.getCurrValue(e.target.value)
    }

    return (
        <div className="form-check mb-3">
            <input
                className="form-check-input"
                type="radio"
                name={props.name}
                id={props.id}
                key={props.name}
                value={value}
                onChange={handleChange}
            />
            <Label id={props.id} label={props.title} sub={props.sub}/>{" - "+props.description}            
        </div>
    );
}