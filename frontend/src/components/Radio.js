import React, { useState } from 'react';

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
            {props.sub
            ? <label className="form-check-label" htmlFor={props.id} key={`Label for ${props.name}`}>
                {props.title}<sub>{props.sub}</sub>{" - "+props.description}
              </label>
            : <label className="form-check-label" htmlFor={props.id} key={`Label for ${props.name}`}>
                {props.title + " - " + props.description}
              </label>
            }
            
        </div>
    );
}