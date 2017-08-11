import React, { Component } from 'react'
import { Button, Container, Header, Icon, Segment, Visibility } from 'semantic-ui-react'

import { FixedMenu, TopMenu } from '../components/Menu';
import Lista from '../components/Lista';
import Formulario from '../components/Formulario';
import Footer from '../components/Footer';
import SegmentoPadrao from '../components/SegmentoPadrao';

export default class HomepageLayout extends Component
{
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })

    render() {
        const { visible } = this.state

        return (
            <div>
                { visible ? <FixedMenu /> : null }

                <Visibility onBottomPassed={this.showFixedMenu} onBottomVisible={this.hideFixedMenu} once={false}>
                    <Segment inverted textAlign='center' style={styles.inicio} vertical>
                        <TopMenu />

                        <Container text>
                            <Header as='h1' content='Cadastro de Food Trucks' inverted style={styles.aprensentacao}/>
                            <Header as='h2' content='Uma lista com os melhores Food Trucks da cidade.' inverted style={styles.subtitulo}/>
                            <Button primary size='huge'>
                                Veja Agora
                                <Icon name='right arrow' />
                            </Button>
                        </Container>
                    </Segment>
                </Visibility>

                <SegmentoPadrao titulo='Lista de Food Trucks'>
                    <Lista />
                </SegmentoPadrao>

                <SegmentoPadrao titulo='Cadastro/Edição de Food Truck'>
                    <Formulario />
                </SegmentoPadrao>

                <Footer />
            </div>
        )
    }
}

const styles = {
    inicio: {
        minHeight: 700,
        padding: '1em 0em'
    },
    aprensentacao: {
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em'
    },
    subtitulo: {
        fontSize: '1.7em',
        fontWeight: 'normal'
    }
}
