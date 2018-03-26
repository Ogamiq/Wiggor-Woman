import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../actions';
import { Container, BoxContainer, FieldContainer, LabelContainer, Header, Form, ErrorText, Label, Input, Button, RegisterLink } from './login-styles';


class Login extends Component {
  componentDidMount() {
    if (this.props.loginData.hasOwnProperty('token')) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.loginData.hasOwnProperty('token')) {
      this.props.history.push('/');
    }
  }

  renderField(field) {
    const textError = `${field.meta.touched && field.meta.error ? field.meta.error : ''}`;

    return (
      <FieldContainer>
        <LabelContainer>
          <Label>{field.label}</Label>
          <ErrorText>{textError}</ErrorText>
        </LabelContainer>
        <Input
          type={field.type}
          {...field.input}
        />
      </FieldContainer>
    );
  }

  onSubmit(values) {
    this.props.login(values);
  }

  render() {
    const { handleSubmit } = this.props;
    let loginFailed = '';

    if (this.props.loginData) {
      loginFailed = this.props.loginData.message ? 'Niepoprawne dane logowania' : '';
    }

    return (
      <Container>
        <BoxContainer>
          <Header>Logowanie</Header>
          <ErrorText>{loginFailed}</ErrorText>
          <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="E-mail"
              type="text"
              name="email"
              component={this.renderField}
            />
            <Field
              label="Hasło"
              type="password"
              name="password"
              component={this.renderField}
            />
            <Button type="submit">Zaloguj</Button>
            <RegisterLink>
              <Link to="/rejestracja" className="callback-link">Rejestracja</Link>
            </RegisterLink>
          </Form>
        </BoxContainer>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Wprowadź email";
  }

  if (values.email) {
    let regex = /^[^\s]*[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+@{1}[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+\.[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{1}[.0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+[^\s]*$/,
        text = values.email;
    if (!text.match(regex)) {
      errors.email = "Wprowadź poprawny email";
    }
  }

  if (!values.password) {
    errors.password = "Wprowadź hasło";
  }

  return errors;
}

function mapStateToProps({ loginData }) {
  return { loginData };
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps, { login })(Login)
);
