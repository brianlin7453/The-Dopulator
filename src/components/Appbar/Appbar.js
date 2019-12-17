import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  helpIcon: {
  	marginLeft: 'auto',
  	cursor: 'pointer'
  }
});

export function Appbar(){
	const classes = useStyles();
	return(
		<React.Fragment >
  		<AppBar position="static">
      	<Toolbar>
      		<Typography variant="h5" >The Dopulator</Typography>
        	
          <HelpIcon className={classes.helpIcon}/>
        </Toolbar>
    	</AppBar>
    </React.Fragment>
  	);	
}

export default Appbar;
