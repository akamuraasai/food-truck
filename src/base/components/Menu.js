import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export const FixedMenu = props => (
    <Menu fixed='top' size='large'>
      <Container>
        <Menu.Item as='a' active>Inicio</Menu.Item>
        <Menu.Item as='a'>Lista</Menu.Item>
        <Menu.Item as='a'>Cadastro/Edição</Menu.Item>
      </Container>
    </Menu>
);


export const TopMenu = props => (
    <Container>
      <Menu inverted pointing secondary size='large'>
        <Menu.Item as='a' active>Inicio</Menu.Item>
        <Menu.Item as='a'>Lista</Menu.Item>
        <Menu.Item as='a'>Cadastro/Edição</Menu.Item>
      </Menu>
    </Container>
);
