import React from 'react';

interface IPersonProps {
}

interface IPersonState {
    firstName: string,
    lastName: string,
    age: number,
    liked: boolean
}

export default class Person extends React.Component<IPersonProps, IPersonState> {
    constructor ( props: string | number ) {
        super( props );
        this.state = {
            firstName: "John",
            lastName: "Smith",
            age: 45,
            liked: false
        }
    }
    updatePerson = ( event: any ) => {
        event.preventDefault();

        let firstNameString: string,
            lastNameString: string,
            ageNum: number;

        const firstName: HTMLInputElement | null = document.querySelector( '[name="first-name"]' );
        const lastName: HTMLInputElement | null = document.querySelector( '[name="last-name"]' );
        const age: HTMLInputElement | null = document.querySelector( '[name="age"]' );

        if ( firstName === null )
            firstNameString = '';
        else
            firstNameString = firstName.value;

        if ( lastName === null )
            lastNameString = '';
        else
            lastNameString = lastName.value;

        if ( age === null )
            ageNum = 0;
        else
            ageNum = Number( age.value );

        this.setState( {
            firstName: firstNameString,
            lastName: lastNameString,
            age: ageNum,
            liked: this.state.liked
        } );
    }
    toggleLike = () => {
        this.setState( {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            liked: !this.state.liked // Switch boolean to the opposite (!)
        } );
    }
    liked = () => {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <p>They are {this.state.age} years old.</p>
                <form onSubmit={this.updatePerson}>
                    <h3>Update Person</h3>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" defaultValue={this.state.firstName} />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" defaultValue={this.state.lastName} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" defaultValue={this.state.age} />
                    <input type="submit" value="Apply Updates" />
                </form>
                <button onClick={this.toggleLike}>
                    👍 You Like Them!
                    (Click to Unlike)
                </button>
            </div>
        );
    }
    unLiked = () => {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <p>They are {this.state.age} years old.</p>
                <form onSubmit={this.updatePerson}>
                    <h3>Update Person</h3>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" defaultValue={this.state.firstName} />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" defaultValue={this.state.lastName} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" defaultValue={this.state.age} />
                    <input type="submit" value="Apply Updates" />
                </form>
                <button onClick={this.toggleLike}>
                    👎 Like this Person?
                    (Click to Like)
                </button>
            </div>
        );
    }
    render () {
        if ( this.state.liked )
            return this.liked();
        else
            return this.unLiked();
    }
}