import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

class Lista extends Component
{
    render() {
        const trucks = [
            {nome: 'WildFlavor Burger', tipo: 'Burger'}
        ];

        return (
            <Table singleLine={true} inverted unstackable striped celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Nome</Table.HeaderCell>
                        <Table.HeaderCell singleLine>Tipo</Table.HeaderCell>
                        <Table.HeaderCell className='center aligned one wide column' singleLine>Ações</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {trucks.map((item, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{item.nome}</Table.Cell>
                            <Table.Cell>{item.tipo}</Table.Cell>
                            <Table.Cell textAlign='center'>
                                <Button compact size='small' icon='pencil' color='yellow' />
                                <Button compact size='small' icon='trash' color='red' />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    }
}

export default Lista;
