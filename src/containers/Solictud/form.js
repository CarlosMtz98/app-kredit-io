import React from 'react';
import * as typeformEmbed from '@typeform/embed';
import './formStyles.css';

const RequestForm = (props) => {
    

    return (
        <div className="kredit-form">
        
            <div className="container kredit-req">
            <form class=" p-5">

                <p class="h4 mb-4 text-left kredict-title">{ props.title }</p>
                <div class="form-row">
                    <div class="col-md-5 mb-3">
                        <label for="validationServer01">Puntaje SAT</label>
                        <input type="text" class="form-control" id="validationServer01" placeholder="eg. 85" required/>
                    </div>
                    <div className="col-md-2"></div>
                    <div class="col-md-5 mb-3">
                        <label for="validationServer02">Puntaje Buró de Crédito</label>
                        <input type="text" class="form-control" id="validationServer02" placeholder="eg. 78"required/>
                    </div>
                </div>
                <div className="form-row">
                    <div class="col-md-10 mb-3">
                            <label for="validationServerUsername">Ingreso Mensual</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend3">
                                        <i class="fas fa-dollar-sign"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" id="validationServerUsername" placeholder="eg. 50,000" aria-describedby="inputGroupPrepend3" required />
                            </div>
                        </div>
                </div>
                <div class="form-row">
                    <div class="col-md-5 mb-3">
                        <label for="validationServerUsername">Propuesta de Pagos en Meses</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend3">
                                    <i class="fas fa-calendar-day"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="validationServerUsername" placeholder="eg. 12" aria-describedby="inputGroupPrepend3" required />
                        </div>
                    </div>
                    <div class="col-md-5 mb-3">
                        <label for="validationServerUsername">Monto del Crédito</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend3">
                                    <i class="fas fa-dollar-sign"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="validationServerUsername" placeholder="eg. 50,000" aria-describedby="inputGroupPrepend3" required />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="invalidCheck3" required/>
                    <label class="form-check-label" for="invalidCheck3">
                        Acepto los términos y condiciones
                    </label>
                    </div>
                </div>
                    <button class="btn btn-primary" type="submit">Solicitar</button>
                </form>
            </div>
        </div>
    );
}

export default RequestForm;