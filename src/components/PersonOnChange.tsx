import React from 'react';

interface IPersonProps {
}

interface IPersonState {
    firstName: string,
    lastName: string,
    age: number
}

export default class PersonOnChange extends React.Component<IPersonProps, IPersonState> {
    constructor ( props: string | number ) {
        super( props );
        this.state = {
            firstName: "John",
            lastName: "Smith",
            age: 45
        }
    }
    updatePersonInfo = ( event: any ): void => {
        let updatedFirstName = this.state.firstName;
        let updatedLastName = this.state.lastName;
        let updatedAge = this.state.age;
        if ( event.target.name === 'first-name' ) {
            updatedFirstName = event.target.value;
        } else if ( event.target.name === 'last-name' ) {
            updatedLastName = event.target.value;
        } else if ( event.target.name === 'age' ) {
            updatedAge = Number( event.target.value );
        }
        this.setState( {
            firstName: updatedFirstName,
            lastName: updatedLastName,
            age: updatedAge
        } );
    }
    render () {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <p>They are {this.state.age} years old.</p>
                <form>
                    <h3>Update Person</h3>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" value={this.state.firstName} onChange={this.updatePersonInfo} />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" value={this.state.lastName} onChange={this.updatePersonInfo} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" value={this.state.age} onChange={this.updatePersonInfo} />
                </form>
            </div>
        );
    }
}