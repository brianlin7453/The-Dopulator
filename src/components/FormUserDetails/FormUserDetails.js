import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class FormUserDetails extends Component {
	continue = event => {
		event.preventDefault();
		this.props.nextStep();
	}
	render() {
		const {values , handleChange} = this.props;
		return (	
			<React.Fragment>
				<br/>
				<TextField 
					id="standard-basic" 
					label="Name of the event"
					onChange = {handleChange('firstName')}
					defaultValue = {values.firstName}
				/> 
				<br/>

				<TextField 
					id="standard-basic" 
					label="Enter Your First Name"
					onChange = {handleChange('firstName')}
					defaultValue = {values.firstName}
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
export default FormUserDetails