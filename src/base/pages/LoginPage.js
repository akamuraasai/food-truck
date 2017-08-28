import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react';

import InputField from '../helpers/InputField';

import { login, logout, register, setLogged } from './Login.actions';
import { auth } from '../database/firebase';

class LoginPage extends Component
{
    handleEvent = e => {
        e.preventDefault();

        const { login, register, formFields } = this.props;
        const data = formFields.loginForm.values;

        login(data);
        // register(data);
    };

    componentDidMount = () => {
        const { setLogged, logout } = this.props;

        // logout();
        auth
          .onAuthStateChanged(user => {
              if (user)
                  return setLogged(user);

              return setLogged(null);
          });
    };

    render = () => {

        return (
            <div className='login-form'>
              <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}</style>
              <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
              >
                <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' />
                    {' '}Forneça os dados para entrar
                  </Header>
                  <Form size='large' onSubmit={this.handleEvent}>
                    <Segment stacked>
                      <Field
                        component={InputField}
                        name='email'
                        as={Form.Field}
                        control={Input}
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='E-mail'
                      />
                      <Field
                        component={InputField}
                        name='password'
                        as={Form.Field}
                        control={Input}
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Senha'
                        type='password'
                      />

                      <Button color='teal' fluid size='large'>Entrar</Button>
                    </Segment>
                  </Form>
                  <Message>
                    A criação de novas contas está atualmente desabilitada.
                  </Message>
                </Grid.Column>
              </Grid>
            </div>
        );
    }
}

LoginPage = reduxForm({ form: 'loginForm' })(LoginPage);

const mapStateToProps = state => ({ formFields: state.form });
const mapDispatchToProps = dispatch => bindActionCreators({ login, logout, register, setLogged }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
