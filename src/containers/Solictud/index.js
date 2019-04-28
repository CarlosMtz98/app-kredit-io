import React from 'react';
import RequestForm from './form';

class Solicitud extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Solicitud Web Page</h1>
                <RequestForm title="Nueva solicitud de Credito"/>
            </div> 
        );
    }
}

export default Solicitud;