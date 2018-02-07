import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as EmailValidator from 'email-validator';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  passwordEnabled: false
  }
 };
 isValidEmail() {
  const username = this.state.username;
  if (EmailValidator.validate(username)) {
    if ((RegExp('@jumo.world')).test(username)) {
      window.location.replace("https://www.office.com/");
      return false;
    }
    return true; 
  }
  return false;
 }
render() {
    const isEnabled = this.isValidEmail();
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme} >
          <div>
          <AppBar
             title="Login Example"
             style={style.AppBar}
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               disabled={!isEnabled}
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/> <br />
             <RaisedButton label="Submit" primary={true} style={style.button} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  button: {
    margin: 15,
  }
};
const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: Colors.darkBlack,
    primary2Color: Colors.indigo700,
    accent1Color: 'FFD700',
    pickerHeaderColor: Colors.darkBlack,
    alternateTextColor: '#FFD700'
  },
  appBar: {
    height: 60,
  },
});

export default Login;