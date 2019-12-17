import React from 'react';
import FormStepOne from '../FormStepOne/FormStepOne';
import FormStepTwo from '../FormStepTwo/FormStepTwo';
import FormStepThree from '../FormStepThree/FormStepThree';
import FormStepFour from '../FormStepFour/FormStepFour';



export class UserForm extends React.Component {
	state = {
		step: 1,
		numBills: 0,
		numberOfPeople: 0,
		names: [],
		billTotalArray: [],
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
	//handleChange = input => event => {
		//this.setState({
			//[input]: event.target.value
		//});
	//};

	//Handle FormStepOne "How many people are involved?" question
	handleNumPeopleInput = event => {
		this.setState({
			numberOfPeople: event.target.value
		},function(){
			this.populateNamesArray();
		}
		)
	}

	//Helper to handleNumPeopleInput
	populateNamesArray = () => {
		let tempArray = new Array(this.state.numberOfPeople);
		for(let i = 0; i < this.state.numberOfPeople; i++){
			tempArray[i] = '';
		}
		this.setState({
			names: tempArray
		})
	}

	//Handle FormStepOne "How many bills would you like to sort?" question
	handleBillChange = event => {
		this.setState({
			numBills: event.target.value
		},function(){
			this.setBillTotalArray();
		});
	}

	//Helper to handleBillChange
	setBillTotalArray = () => {
		let tempArray = new Array(this.state.numBills);
		for(let i = 0; i < this.state.numBills; i++){
			tempArray[i] = 0;
		}
		this.setState({
			billTotalArray: tempArray
		})
	}

	editNamesArray = index => event => {
		let toBeChanged = this.state.names;
		toBeChanged[index] = event.target.value;
		this.setState({
			names: toBeChanged
		})
	}

	//Function uses setState to update billTotalArray
	editBillsArray = counter => event =>{
		let toBeChanged = this.state.billTotalArray;
		toBeChanged[counter] = event.target.value;
		this.setState({
			billTotalArray: toBeChanged
		});
	}

	render() {
		const { step } = this.state;
    	const { numBills, numberOfPeople ,billTotalArray ,names } = this.state;
		const values = { numBills, numberOfPeople, billTotalArray, names  };
		
		switch (step) {
      		case 1:
        		return (
          			<FormStepOne
            			nextStep={this.nextStep}
            			handleChange={this.handleChange}
						handleNumPeopleInput = {this.handleNumPeopleInput}
						handleBillChange = {this.handleBillChange}
            			values={values}
          			/>
        		);
        	case 2:
        		return (
          			<FormStepTwo
            			nextStep={this.nextStep}
						prevStep={this.prevStep}
						editNamesArray = {this.editNamesArray}
            			values={values}
          			/>
				);
			case 3:
				return (
					<FormStepThree
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						editBillsArray = {this.editBillsArray}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 4:
				return (
					<FormStepFour
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			default:
				return (
					<FormStepOne
					  nextStep={this.nextStep}
					  handleChange={this.handleChange}
					  values={values}
					/>
			  );

		}
	}
}

export default UserForm;