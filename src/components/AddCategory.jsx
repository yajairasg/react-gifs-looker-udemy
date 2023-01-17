import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    // Variable de estado para el input
    const [ inputValue, setInputValue ] = useState('');

    // se ejecuta cuando hay algun cambio en el input
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    // se ejecuta cuando el usuario da enter
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Escribe aquí y presiona enter"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
