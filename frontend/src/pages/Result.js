import React from 'react';

export const Result = ({result})=>{
    return (
        <div>
            {result ? `Интенсивность отказов основания печатной платы: ${result}` : "Заполните пустые поля" }
        </div>
    )
}