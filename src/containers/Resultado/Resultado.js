import React from 'react';
import './Resultado.css' 

const Resultado = () => {
    return (
        <div className="kredit-result">
            <div className="kredit-header-ghost-reverse"></div>
            <div className="container kredit-req"> 
                <div className="kredit-home-jumbo">
                    <h1>¡Tu crédito ha sido aprobado! 👌</h1>
                    <h2 class="kredit-congrats">¡Enhorabuena nombre genérico!</h2>
                    <div className="kredit-time">Ya falta menos, ahora solo queda esperar el depósito.</div>
                    <div class="kredit-res-info">
                        <h3>Información adicional:</h3>
                        <p>Puntaje del SAT: XX</p>
                        <p>Puntaje del Buró de Crédito: XX</p>
                        <p>Monto del crédito otorgado: XX</p>
                        <p>&nbsp;&nbsp;&nbsp;¡Increible! Has obtenido un 10% más</p>
                        <p>Plazo de préstamo en meses: XX</p>
                        <p>Tu salario: XX</p>

                    </div>
                
                </div>
            </div>
            
        </div>
        
    );
}

export default Resultado;