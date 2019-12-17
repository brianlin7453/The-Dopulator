import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormStepFour extends Component {
	continue = event => {
		event.preventDefault();
		this.props.nextStep();
	}
	previous = event => {
		event.preventDefault();
		this.props.prevStep();
	}
	renderInputs = () => {
		let personIndex = 0;
		let items = [];
		while (personIndex < this.props.values.numberOfPeople){
			let billIndex = 0;
			while (billIndex < this.props.values.numBills){
				let labelString = "How much did  " +  (this.props.values.names[personIndex]) + " pay for bill number " + (billIndex+1);
				items.push(<br/>);
				items.push(<label>{labelString}</label>)
				items.push(<br/>);
				items.push(<TextField 
					type = "number"
				/>)
				items.push(<br/>)
				billIndex++;
			}
			personIndex++;
		}
		return items;
	}
	render() {
		return (	
			<React.Fragment>
				<br/>
				{this.renderInputs()}
				<Button 
					variant="outlined" 
					color = "primary"
					style={styles.button}
					onClick = {this.previous}
				>
				Previous
				</Button>
				<Button 
					variant="outlined" 
					color = "primary"
					style={styles.button}
					onClick = {this.continue}
				>
				Continue
				</Button>
			</React.Fragment>
		
		)
	}
}

const styles = {
	button:{
		margin: 15
	}
}
export default FormStepFour;