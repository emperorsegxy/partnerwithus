import React from 'react';
import { TextField, makeStyles, withStyles } from '@material-ui/core';
import PageIllustration from './images/page-illustration.svg';
import BrandName from './images/brand-name.svg';

const StyledTextField = withStyles({
  root: {
  
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {

    }
  },

  firstInput: {
    [theme.breakpoints.up('sm')]: {
      marginRight: 20,
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    }
  },

  secondInput: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
    },
  },

  input: {
    marginTop: 20,
  },

  messageBox: {
    height: 300,
  },

  form: {
    width: '92%',
    margin: 'auto',
  }
}))


function App() {
  const classes = useStyles();
  return (
    <div className="h-full bg-white flex">
      <div className="w-full sm:w-1/2 flex flex-col h-full">
        <div className="flex h-full flex-col pt-8 justify-around w-8/12 mx-auto">
          <img width="187px" height="67px" src={BrandName} alt="..." />
          <form className={classes.form}>
            <div className="flex flex-col sm:flex-row justify-between">
              <TextField className={`w-full sm:w-1/2 ${classes.firstInput}`} label="First Name" variant="outlined"  />
              <TextField className="w-full sm:w-1/2" label="Last Name" variant="outlined"  />
            </div>
            <TextField className={`w-full ${classes.input}`} label="Email Address" variant="outlined"  />
            <TextField className={`w-full ${classes.input}`} label="Company Name" variant="outlined"  />
            <TextField className={`w-full ${classes.input}`} label="Designation" variant="outlined"  />
            <TextField className={`w-full ${classes.input}`} label="Message" variant="outlined"  />
          </form>
        </div>
      </div>
      <div className="w-2/3 semicolon-bg-yellow flex flex-col h-full hidden sm:block">
        <div className="flex justify-end w-full p-10">
          <a href="#" className="px-4 py-2 semicolon-border-red bg-transparent semicolon-border-radius-4 semicolon-text-red border-red font-bold">Become a native</a>
        </div>
        <div className="w-full flex justify-center items-center semicolon-h-70">
          <img src={PageIllustration} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default App;
