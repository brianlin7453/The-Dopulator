import React from 'react';
import FormUserDetails from '../FormUserDetails/FormUserDetails';
import FormPersonalDetails from '../FormPersonalDetails/FormPersonalDetails';


export class UserForm extends React.Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: ''
	};

	//Proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	//Proceed to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	//Handle fields change
	handleChange = input => event => {
		this.setState({
			[input]: event.target.value
		});
	};

	render() {
		const { step } = this.state;
    	const { firstName, lastName, email, occupation, city, bio } = this.state;
		const values = { firstName, lastName, email, occupation, city, bio };
		
		switch (step) {
      		case 1:
        		return (
          			<FormUserDetails
            			nextStep={this.nextStep}
            			handleChange={this.handleChange}
            			values={values}
          			/>
        		);
        	case 2:
        		return (
          			<FormPersonalDetails
            			nextStep={this.nextStep}
            			handleChange={this.handleChange}
            			values={values}
          			/>
        		);
		}
	}
}

export default UserForm;