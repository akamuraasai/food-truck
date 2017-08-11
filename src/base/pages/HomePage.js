import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility, Table, Form, Input, TextArea } from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Inicio</Menu.Item>
      <Menu.Item as='a'>Lista</Menu.Item>
      <Menu.Item as='a'>Cadastro/Edição</Menu.Item>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Inicio</Menu.Item>
                <Menu.Item as='a'>Lista</Menu.Item>
                <Menu.Item as='a'>Cadastro/Edição</Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='Cadastro de Food Trucks'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Uma lista com os melhores Food Trucks da cidade.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Veja Agora
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3' style={{ fontSize: '2em' }}>Lista de Food Trucks</Header>
                <Table celled inverted selectable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Notes</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell textAlign='right'>None</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Jamie</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell textAlign='right'>Requires call</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Jill</Table.Cell>
                        <Table.Cell>Denied</Table.Cell>
                        <Table.Cell textAlign='right'>None</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column>
                    <Header as='h3' style={{ fontSize: '2em' }}>Cadastro/Edição de Food Truck</Header>
                    <Form>
                        <Form.Group widths='equal'>
                          <Form.Field id='form-input-control-first-name' control={Input} label='First name' placeholder='First name' />
                          <Form.Field id='form-input-control-last-name' control={Input} label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Opinion' placeholder='Opinion' />
                        <Form.Field id='form-button-control-public' control={Button} content='Confirm' label='Label with htmlFor' />
                   </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Segment>

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
                        <List.Item as='p'>Desenvolvido por <a href='https://akamuraasai.work/' target='_blank'>Jonathan Willian</a>.</List.Item>
                    </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
