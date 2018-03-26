import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import swal from 'sweetalert2';
import axios from 'axios';

import { getEvents } from '../../../actions';
import { Container, Table, TableHead, TableRow, TableData, TableRowHead, Checkbox, Wrapper, Button } from '../events-list-styles';

class EventsList extends Component {
    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
        this.showWarning = this.showWarning.bind(this);
    }

    componentDidMount() {
        this.props.getEvents();

    }

    onButtonClick() {
        if(!this.props.loginData.hasOwnProperty('token')) {
           this.showWarning();
        } else {
            this.assignUserOnEvents();
        }
    }

    showWarning() {
        swal({
            title: 'Aby móc się zapisać na wydarzenie musisz być zalogowanym użytkownikem',
            type: 'warning',
            confirmButtonText: 'Logowanie',
            confirmButtonClass: 'ModalButton',
            buttonsStyling: false,
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
            showConfirmButton: false
        });
    }


    assignUserOnEvents() {
        const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
        var isStatusCodeOk = true;
        checkedBoxes.forEach((event) => {
            axios({
                method: 'POST',
                url: `http://localhost:3000/api/event/${event.id}/${this.props.loginData.user._id}`,
                headers: {
                  'Authorization': this.props.loginData.token
                }
            }).then((response) => {
                if(response.status != 200) {
                    isStatusCodeOk = false;
                }
                this.props.getEvents();
            });
        });

        if(isStatusCodeOk) {
            this.showMessage('Dziękujemy za zapisanie się na warsztaty!', 'success', 'Na swoim profilu znajdziesz listę wszystkich swoich warsztatów');
        } else {
            this.showMessage('Ups! Coś poszło nie tak', 'error', 'Spróbuj ponownie zapisać się później');
        }
    }

    renderEvents() {
        if (this.props.events.length > 0) {
            const data = this.props.events[0];
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
                            <TableData>{event.leftSpots}</TableData>
                            <TableData><Checkbox type="checkbox" id={event._id}/></TableData>
                        </TableRow>
                    );
                });
            }
        }
    }

    render() {
        return (
            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableRowHead>Data</TableRowHead>
                            <TableRowHead>Warsztat</TableRowHead>
                            <TableRowHead>Miejsce </TableRowHead>
                            <TableRowHead>Ilość miejsc</TableRowHead>
                            <TableRowHead />
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </Table>
                <Wrapper>
                    <Button onClick={this.onButtonClick}>Zapisz</Button>
                </Wrapper>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        events : state.events,
        loginData : state.loginData
    };
}

export default connect(mapStateToProps, {getEvents} )(EventsList);