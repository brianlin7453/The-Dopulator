import React from 'react';
import FormStepOne from '../FormStepOne/FormStepOne';
import FormStepTwo from '../FormStepTwo/FormStepTwo';
import FormStepThree from '../FormStepThree/FormStepThree';



export class UserForm extends React.Component {
	state = {
		step: 1,
		numBills: 5,
		numberOfPeople: 5,
		billPeopleArray:[]
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
    	const { numBills, numberOfPeople } = this.state;
		const values = { numBills, numberOfPeople };
		
		switch (step) {
      		case 1:
        		return (
          			<FormStepOne
            			nextStep={this.nextStep}
            			handleChange={this.handleChange}
            			values={values}
          			/>
        		);
        	case 2:
        		return (
          			<FormStepTwo
            			nextStep={this.nextStep}
						prevStep={this.prevStep}
            			handleChange={this.handleChange}
            			values={values}
          			/>
				);
			case 3:
				return (
					<FormStepThree
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
		}
	}
}

export default UserForm;