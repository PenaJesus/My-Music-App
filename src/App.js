import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dashboard from "./Dashboard";
// import './App.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: theme.spacing(1),
  },
  root: {
    marginTop: theme.spacing(10),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formContainer: {
    // marginTop: theme.spacing(10),
    width: 300,
    margin: "auto",
  },
}));

function App() {
  const classes = useStyles();
  const [loggedIn, setLogin] = useState(false);

  return (
    <>
    {/* nav bar component */}
      <AppBar className={classes.appBar}>My Music App</AppBar>
      <div className={classes.root}>
        {loggedIn ? (
          <Dashboard />
        ) : (
          
          // login component
          <div className={classes.formContainer}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Username" />
              <TextField id="standard-basic" label="Password" />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setLogin(true);
                }}
              >
                Login
              </Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
