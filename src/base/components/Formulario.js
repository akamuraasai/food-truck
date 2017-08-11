import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class Formulario extends Component
{
    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-first-name' control={Input} label='Nome' placeholder='Nome do Food Truck' />
                    <Form.Field id='form-input-control-last-name' control={Input} label='E-mail' placeholder='E-mail de Contato do Food Truck' />
                </Form.Group>

                <Form.Field id='form-button-control-public' control={Button} content='Salvar' color='green' />
            </Form>
        );
    }
}

export default Formulario;
