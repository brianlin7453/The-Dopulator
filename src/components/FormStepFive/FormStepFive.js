import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



export class FormStepTwo extends Component {
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
		let billCounter = 0;
		while(billCounter < this.props.values.numBills){
            let billSum = 0;
            let labelString = "Bill number " + (billCounter + 1) + " total: $" + (this.props.values.billTotalArray[billCounter]);
            items.push(<h4>{labelString}</h4>);
            let personIndex = 0;
            while(personIndex < this.props.values.numberOfPeople){
                let labelString2 = (this.props.values.names[personIndex]) + " paid $" + (this.props.values.paymentArray[billCounter][personIndex]);
                billSum = billSum + this.props.values.paymentArray[billCounter][personIndex];
                items.push(<label>{labelString2}</label>)
                items.push(<br/>)
                personIndex++;
            }
			billCounter++;
		}
		return items;
	}
	render() {
		return (	
			<React.Fragment>
				<h1>Confirm Information</h1>
                <h3>Number of people: {this.props.values.numberOfPeople}</h3>
                <h3>Number of bills: {this.props.values.numBills}</h3>
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
				Confirm
				</Button>
			</React.Fragment>		
		);
	}
}

const styles = {
	button:{
		margin: 15
	}
}
export default FormStepTwo;