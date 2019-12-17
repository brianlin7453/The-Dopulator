import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormStepThree extends Component {
	continue = event => {
		event.preventDefault();
		this.props.nextStep();
	}
	previous = event => {
		event.preventDefault();
		this.props.prevStep();
	}
	renderInputs = () => {
		let items = [];
		let counter = 1;
		while(counter < this.props.values.numberOfPeople){
			let labelString = "Total of bill " +  counter;
			items.push(<TextField 
				key={counter}
                type = "number"
				label= {labelString}
				onChange = {this.props.handleChange('eventName')}
				defaultValue={counter}	
			/>)
			items.push(<br/>);
			counter++;
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
export default FormStepThree;