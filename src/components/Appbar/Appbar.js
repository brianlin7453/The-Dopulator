import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HelpInfo from '../HelpInfo/HelpInfo';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
  	helpIcon: {
		marginLeft: 'auto'
	},
	Dop:{
		cursor: 'context-menu'
	}
});

export function Appbar(){
	const classes = useStyles();
	return(
		<div className ={classes.root}>
  		<AppBar position="static">
      	<Toolbar>
      		<Typography className = {classes.Dop}variant="h5" >The Dopulator</Typography>
			<div className ={classes.helpIcon}>
			<HelpInfo/>
			</div>
        </Toolbar>
    	</AppBar>
    </div>
  	);	
}

export default Appbar;
