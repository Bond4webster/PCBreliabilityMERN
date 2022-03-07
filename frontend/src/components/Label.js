import React from 'react';

export const Label = (props) => {
    if(props.sub){
        return (
            <label htmlFor={props.id}>{props.label}<sub>{props.sub}</sub></label> 
        )
    }else{
        return (
            <label htmlFor={props.id}>{props.label}</label>
        )
    }
    
}