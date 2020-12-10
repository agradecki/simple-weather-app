import React from 'react';

const Form = props => {
    return ( 
        <form>
            <input type="text" value={props.value} />
            <button>Wyszukaj miasta</button>
        </form>
    );
}

export default Form