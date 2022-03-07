import React from 'react';

export const Textarea = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>Пояснения</label>
            <textarea className="form-control" id={props.id} rows="10" disabled></textarea>
        </div>
    )
}