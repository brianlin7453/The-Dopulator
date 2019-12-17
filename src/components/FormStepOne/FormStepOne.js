import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormStepOne extends Component {
	continue = event => {
		event.preventDefault();
		this.props.nextStep();
	}
	render() {
		
		const {values , handleChange} = this.props;
		return (	
			<React.Fragment>
			<h6>Step 1/2</h6>
				<br/>
				<label>How many bills would you like to sort?</label>
				<br/>
				<TextField 
					id="standard-number" 
					type="number"
					onChange = {handleChange('numBills')}
					defaultValue = {values.numBills}
				/> 
				<br/>
				<label>How many people are involved?</label>
				<br/>
				<TextField 
					id="standard-basic" 
					type="number"
					onChange = {handleChange('numberOfPeople')}
					defaultValue = {values.numberOfPeople}
				/> 
				<br/>
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
export default FormStepOne