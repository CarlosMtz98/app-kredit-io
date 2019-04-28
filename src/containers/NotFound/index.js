import React from 'react'
import './styles.css'
const Notfound = () => {
    return (
        <div className="kredit-error">
            <div className="kredit-header-ghost-reverse"></div>
            <div className="container kredit-req kredit-req-error"> 
                <div className="kredit-home-jumbo">
                    <h1 className="kredit-title-error">Error 404</h1>
                    <p className="kredit-text-error">Creo que te perdiste 😅 </p>
                </div>
            </div>

        </div>
    );
    
}

export default Notfound