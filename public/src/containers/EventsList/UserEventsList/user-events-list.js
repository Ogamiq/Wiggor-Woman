import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import swal from 'sweetalert2';
import axios from 'axios';

import { getUserEvents } from '../../../actions';
import { Container, Table, TableHead, TableRow, TableData, TableRowHead, Checkbox, Wrapper, Button, Title, Text} from '../events-list-styles';

class UserEventsList extends Component {
    constructor(props) {
        super(props);

        this.usassignUserFromEvents = this.usassignUserFromEvents.bind(this);
        this.showWarning = this.showWarning.bind(this);
    }

    componentDidMount() {
        if (this.props.loginData.hasOwnProperty('token')) {
            this.props.getUserEvents(this.props.loginData.user._id, this.props.loginData.token);
        }
    }

    showWarning() {
        swal({
            title: 'Aby móc się zapisać na wydarzenie musisz być zalogowanym użytkownikem',
            type: 'warning',
            confirmButtonText: 'Logowanie',
            confirmButtonClass: 'ModalButton',
            buttonsStyling: false,
            footer: 'Lub załóż nowe konto',
            preConfirm: () => {
                this.props.history.push('/logowanie');
            }
        });
    }

    showMessage(title, type, text) {
        swal({
            title: title,
            type: type,
            footer: text,
            showConfirmButton: false,
            onClose: () => {
                this.props.getUserEvents(this.props.loginData.user._id, this.props.loginData.token);
            }
        });
    }


    usassignUserFromEvents() {
        const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
        var isStatusCodeOk = true;
        checkedBoxes.forEach((event) => {
            axios({
                method: 'DELETE',
                url: `http://localhost:3000/api/event/${event.id}/${this.props.loginData.user._id}`,
                headers: {
                  'Authorization': this.props.loginData.token
                }
            }).then((response) => {
                if(response.status != 200) {
                    isStatusCodeOk = false;
                }
            });
        });

        if(isStatusCodeOk) {
            this.showMessage('Operacja przebiegła pomyślnie!', 'success', '');
        } else {
            this.showMessage('Ups! Coś poszło nie tak', 'error', 'Spróbuj ponownie zapisać się później');
        }
    }

    renderEvents() {
        if (this.props.userEvents.length > 0) {
            const data = this.props.userEvents[0];
            if (data !== undefined) {
                return data.data.map((event, index) => {
                    return (
                        <TableRow key={event._id}>
                            <TableData>
                                {event.date}
                                <br />
                                {event.hour}
                            </TableData>
                            <TableData data-tip data-for={'tooltip' + index}>
                                {event.name}
                                <br />
                                <b>{event.speaker}</b>
                                <ReactTooltip id={'tooltip' + index} type='error' place='right' className='Tooltip'>
                                    {event.description}
                                </ReactTooltip>
                            </TableData>
                            <TableData>
                                {event.building}, {event.room}
                            </TableData>
                            <TableData><Checkbox type="checkbox" id={event._id}/></TableData>
                        </TableRow>
                    );
                });
            }
        }
    }

    render() {
        if (!this.props.loginData.hasOwnProperty('token')) {
            this.props.history.push('/');
            return( <div></div> );
        } else {
        return (
            <Container>
                <Wrapper>
                    <Title>Witaj {this.props.loginData.user.name} {this.props.loginData.user.surname}!</Title>
                    <Text>Oto lista Twoich wydarzeń</Text>
                </Wrapper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableRowHead>Data</TableRowHead>
                            <TableRowHead>Warsztat</TableRowHead>
                            <TableRowHead>Miejsce</TableRowHead>
                            <TableRowHead />
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </Table>
                <Wrapper>
                    <Button onClick={this.usassignUserFromEvents}>Wypisz</Button>
                </Wrapper>
            </Container>
        );
    }
}
}

function mapStateToProps(state) {
    return {
        userEvents : state.userEvents,
        loginData : state.loginData
    };
}

export default connect(mapStateToProps, {getUserEvents} )(UserEventsList);