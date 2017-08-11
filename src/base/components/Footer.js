import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

export default props => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={9}>
              <Header as='h4' inverted>Cadastro de Food Trucks</Header>
              <p>2017 &copy; Cadastros de Food Trucks. Alguns direitos reservados.</p>
            </Grid.Column>
            <Grid.Column width={6}>
                <Header inverted as='h4' content='Sobre' />
                <List link inverted>
                    <List.Item as='p'>Desenvolvido por <a href='https://akamuraasai.work/' rel="noopener noreferrer" target='_blank'>Jonathan Willian</a>.</List.Item>
                </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
);
