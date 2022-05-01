import React, { Link } from 'react';
import api from '../services/api';
import { Table, Button } from 'react-bootstrap';

class PersonList extends React.Component {
    state = { person: [] };
    headers = { 'Content-Type': 'text/plain' };

    componentDidMount() {
        api.get(`/people`, {}, [this.headers])
            .then(res => {
                const person = res.data;
                this.setState({ person });
            });
    }

    render() {
        return (
            <>
                <Link to="/addPerson">
                    <Button variant="outline-primary">Add Person</Button>
                </Link>
                <PersonTable person={this.state.person} />
            </>
        )
    }
}

class PersonTable extends React.Component {
    render() {
        const rows = [];

        this.props.person.forEach((person) => {
            rows.push(
                <PersonRow person={person} key={person.id} />
            );
        });

        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </>
        );
    }
}

class PersonRow extends React.Component {
    render() {
        const person = this.props.person;
        return (
            <tr>
                <td>{person.personId}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
            </tr>
        );
    }
}

export default PersonList;