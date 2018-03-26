import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import swal from 'sweetalert2';

import { register } from '../../actions';
import { Container, BoxContainer, FieldContainer, LabelContainer, Header, Form, Label, ErrorText, Input, Button, LoginLink, TermsOfUse, TermsOfUseButton } from './register-styles';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {registerDataInitialized: false};
  }

  componentDidUpdate() {
    if (this.props.registerData == 'success' && this.state.registerDataInitialized) {
      let self = this;
      this.setState({registerDataInitialized: false});
      swal({
        title: 'Rejestracja przebiegła pomyślnie',
        type: 'success',
        confirmButtonText: 'Przejdź na stronę logowania',
        onClose: function() { self.props.history.push('/logowanie'); }
      });
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
    this.props.register(values);
    this.setState({registerDataInitialized: true});
  }

  render() {
    const { handleSubmit } = this.props;
    let registerFailed = '';

    if (this.props.registerData) {
      registerFailed = this.props.registerData == 'failure' ? 'Podany adres e-mail jest już zajęty' : '';
    }

    return (
      <Container>
        <BoxContainer>
          <Header>Rejestracja</Header>
          <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Imię"
              type="text"
              name="name"
              component={this.renderField}
            />
            <Field
              label="Nazwisko"
              type="text"
              name="surname"
              component={this.renderField}
            />
            <Field
              label="Uniwersytet"
              type="text"
              name="university"
              component={this.renderField}
            />
            <Field
              label="Rok studiów"
              type="number"
              name="year_of_study"
              component={this.renderField}
            />
            <Field
              label="Email"
              type="text"
              name="email"
              component={this.renderField}
            />
            <ErrorText>{registerFailed}</ErrorText>
            <Field
              label="Hasło"
              type="password"
              name="password"
              component={this.renderField}
            />
            <Field
              label="Powtórz hasło"
              type="password"
              name="password2"
              component={this.renderField}
            />
            <TermsOfUse>Rejestrując się zgadzasz się na <a href="assets/Regulamin_KzW.pdf" target="_blank">regulamin</a></TermsOfUse>
            <Button type="submit">Zarejestruj</Button>
            <LoginLink>
              <Link to="/logowanie" className="callback-link">Logowanie</Link>
            </LoginLink>
          </Form>
        </BoxContainer>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Wprowadź imię";
  }

  if (values.name) {
    let regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
        text = values.name;
    if (!text.match(regex)) {
      errors.name = "Imię musi posiadać wyłącznie znaki alfanumeryczne";
    }
  }

  if (!values.surname) {
    errors.surname = "Wprowadź nazwisko";
  }

  if (values.surname) {
    let regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
        text = values.surname;
    if (!text.match(regex)) {
      errors.surname = "Nazwisko musi posiadać wyłącznie znaki alfanumeryczne";
    }
  }

  if (!values.university) {
    errors.university = "Wprowadź nazwę uniwesytetu";
  }

  if (values.university) {
    let regex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
        text = values.university;
    if (!text.match(regex)) {
      errors.university = "Uniwersytet musi posiadać wyłącznie znaki alfanumeryczne";
    }
  }

  if (!values.year_of_study) {
    errors.year_of_study = "Wprowadź rok studiów";
  }

  if (values.year_of_study) {
    let regex = /^[1-9]{1}$/,
        text = values.year_of_study;
    if (!text.match(regex)) {
      errors.year_of_study = "Rok studiów musi mieścić się w przedziale 1-9";
    }
  }

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

  if (values.password) {
    let regex = /^[^\s]*[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
        text = values.password;
    if (!text.match(regex)) {
      errors.password = "Hasło nie może zawierać znaków białych";
    }
  }

  if (!values.password2) {
    errors.password2 = "Ponownie wprowadź hasło";
  }

  if (values.password2) {
    let regex = /^[^\s]*[0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/,
        text = values.password2;
    if (!text.match(regex)) {
      errors.password2 = "Hasło nie może zawierać znaków białych";
    }
  }

  if (values.password !== values.password2) {
    errors.password2 = "Hasła nie są identyczne";
  }

  return errors;
}

function mapStateToProps({ registerData }) {
  return { registerData };
}

export default reduxForm({
  validate,
  form: 'RegisterForm'
})(
  connect(mapStateToProps, { register })(Register)
);