import React from 'react';

export const Input = (props)=>{
    
    return (
        <div className="form-group mb-3 col-12 col-sm-6 col-md-4">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type="number" 
                className="form-control" 
                placeholder={`Введите ${props.label}`} 
                {...props}
            />
        </div>
    )
}