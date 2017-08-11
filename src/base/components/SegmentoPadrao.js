import React from 'react';
import { Segment, Grid, Header } from 'semantic-ui-react';

export default props => (
    <Segment style={styles.espacamento} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column>
                <Header as='h3' style={styles.titulo}>{props.titulo}</Header>
                {props.children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment>
);

const styles = {
    espacamento: {
        padding: '8em 0em'
    },
    titulo: {
        fontSize: '2em'
    }
}
