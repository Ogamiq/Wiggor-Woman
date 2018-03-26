import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'
import axios from 'axios';

import { getEvents } from '../../../actions';
import { Container, Table, TableHead, TableRow, TableData, TableRowHead, Checkbox, AdminButton, Icon } from '../events-list-styles';

class AdminEventsList extends Component {
    componentDidMount() {
        this.props.getEvents();
    }

    editEvent(e) {
      let id = e.target.id,
          data = this.props.events[0].data,
          singleEvent;

      data.forEach((res, i) => {
        if (res._id == id) {
          singleEvent = res;
        }
      });

      swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5', '6', '7', '8']
      })

      let steps = [
        { title: 'Nazwa wydarzenia', inputValue: singleEvent.name},
        { title: 'Mówca', inputValue: singleEvent.speaker},
        { title: 'Pokój', inputValue: singleEvent.room},
        { title: 'Budynek', inputValue: singleEvent.building},
        { title: 'Data', inputValue: singleEvent.date},
        { title: 'Godzina', inputValue: singleEvent.hour},
        { title: 'Opis', inputValue: singleEvent.description},
        { title: 'Limit osób', inputValue: singleEvent.pplLimit},
      ];

      swal.queue(steps).then((result) => {
        swal.resetDefaults();

        if (result.value) {
          let jsonResult = new Object();
          jsonResult['name'] = result.value[0];
          jsonResult['speaker'] = result.value[1];
          jsonResult['room'] = result.value[2];
          jsonResult['building'] = result.value[3];
          jsonResult['date'] = result.value[4];
          jsonResult['hour'] = result.value[5];
          jsonResult['description'] = result.value[6];
          jsonResult['pplLimit'] = result.value[7];

          axios({
            method: 'PUT',
            url: `http://localhost:3000/api/event/${id}`,
            data: jsonResult,
            headers: {
              'Authorization': this.props.loginData.token
            }
          }).then(response => {
            if (response.data.success) {
              swal('Wydarzenie zedytowane');
              this.props.getEvents();
            } else {
              swal('Coś poszło nie tak');
            }
          });
        }
      });
    }

    deleteEvent(e) {
      let id = e.target.id;
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/api/event/${id}`,
        headers: {
          'Authorization': this.props.loginData.token
        }
      }).then(response => {
        if (response.data.success) {
          swal('Event deleted successfuly');
          this.props.getEvents();
        } else {
          swal('Something went south');
        }
      });
    }

    renderEvents() {
        const data = this.props.events[0];
        if (data !== undefined) {
            return data.data.map((event,index) => {
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
                        <TableData change="pointer"><Icon id={event._id} onClick={this.editEvent.bind(this)}>+</Icon></TableData>
                        <TableData change="pointer"><Icon id={event._id} onClick={this.deleteEvent.bind(this)}>+</Icon></TableData>
                    </TableRow>
                );
            });
        }
    }

    render() {
        return (
            <Container admin={this.props.admin}>
                <Table admin={this.props.admin}>
                    <TableHead>
                        <TableRow>
                            <TableRowHead>Data</TableRowHead>
                            <TableRowHead>Warsztat</TableRowHead>
                            <TableRowHead>Miejsce </TableRowHead>
                            <TableRowHead>Ilość miejsc</TableRowHead>
                            <TableRowHead>Edytuj</TableRowHead>
                            <TableRowHead>Usuń</TableRowHead>
                        </TableRow>
                    </TableHead>
                    <tbody>
                        {this.renderEvents()}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return { events: state.events, loginData: state.loginData };
}

export default connect(mapStateToProps, {getEvents} )(AdminEventsList);
