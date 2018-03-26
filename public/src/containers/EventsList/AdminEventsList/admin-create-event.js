import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

import { getEvents } from '../../../actions';
import { Container, BoxContainer, FieldContainer, LabelContainer, Header, Form, Label, ErrorText, Input, Button, LoginLink, TermsOfUse, TermsOfUseButton } from './admin-create-event-styles';

class AdminCreateEvent extends Component {
    componentDidMount() {
        this.props.getEvents();
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
      axios({
        method: 'POST',
        url: `http://localhost:3000/api/event/`,
        data: values,
        headers: {
          'Authorization': this.props.loginData.token
        }
      }).then(response => {
        if (response.data.success) {
          swal({
              title: 'Stworzono wydarzenie',
              type: 'success',
              confirmButtonText: 'Ok',
              confirmButtonClass: 'ModalButton',
              buttonsStyling: false
          });
          this.props.getEvents();
        } else {
          swal('Coś poszło nie tak');
        }
      });
    }

    render() {
      const { handleSubmit } = this.props;

      return (
        <Container>
          <BoxContainer>
            <Header>Stwórz wydarzenie</Header>
            <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label="Nazwa wydarzenia"
                type="text"
                name="name"
                component={this.renderField}
              />
              <Field
                label="Mówca"
                type="text"
                name="speaker"
                component={this.renderField}
              />
              <Field
                label="Pokój"
                type="text"
                name="room"
                component={this.renderField}
              />
              <Field
                label="Budynek"
                type="text"
                name="building"
                component={this.renderField}
              />
              <Field
                label="Data"
                type="text"
                name="date"
                component={this.renderField}
              />
              <Field
                label="Godzina"
                type="text"
                name="hour"
                component={this.renderField}
              />
              <Field
                label="Opis"
                type="text"
                name="description"
                component={this.renderField}
              />
              <Field
                label="Limit osób"
                type="text"
                name="pplLimit"
                component={this.renderField}
              />
              <Button type="submit">Stwórz wydarzenie</Button>
            </Form>
          </BoxContainer>
        </Container>
      );
    }
  }

  function validate(values) {
    const errors = {};

    if (!values.name) {
      errors.name = "Wprowadź nazwę wydarzenia";
    }

    if (!values.speaker) {
      errors.speaker = "Wprowadź mówcę";
    }

    if (!values.room) {
      errors.room = "Wprowadź pokój";
    }

    if (!values.building) {
      errors.building = "Wprowadź budynek";
    }

    if (!values.date) {
      errors.date = "Wprowadź datę";
    }

    if (!values.hour) {
      errors.hour = "Wprowadź godzinę";
    }

    if (!values.description) {
      errors.description = "Wprowadź opis wydarzenia";
    }

    if (!values.pplLimit) {
      errors.pplLimit = "Wprowadź limit osób";
    }

    return errors;
  }

function mapStateToProps(state) {
    return { events: state.events, loginData: state.loginData };
}

export default reduxForm({
  validate,
  form: 'CreateEventForm'
})(
  connect(mapStateToProps, { getEvents })(AdminCreateEvent)
);