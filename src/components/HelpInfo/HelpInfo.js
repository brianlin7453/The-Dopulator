import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

const DialogContent = withStyles(theme => ({
 
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Info
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent>
          <Typography gutterBottom>
            The Dopulator is a calculator that takes any number of bills, any number of people and calculates how much each person owes one another under the assumption that everyone pays the same amount.
          </Typography>
          <br/>
          <br/>
          The algorithm is provided by my dear friend Jason Papadopoulos, you can find him <a href ="https://www.linkedin.com/in/jasonpapad/">here</a>
          <Typography gutterBottom>
            
          </Typography>
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}