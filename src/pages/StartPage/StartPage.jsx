import { Card } from '@mui/material';
import React, { memo, useState } from 'react';
import { FormGroup, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/actionCreators/basicActions';

const StartPage = ({ contract }) => {
    const [ signinAddress, setSigninAddress ] = useState('');
    const [ signinPassword, setSigninPassword ] = useState('');
    const [ signupAddress, setSignupAddress ] = useState('');
    const [ signupPassword, setSignupPassword ] = useState('');
    const [ repeatSignupPassword, setRepeatSignupPassword ]= useState('');

    const dispatch = useDispatch();

    const handleSigninAddressChange = (event) => {
        setSigninAddress(event.target.value);
    };
    const handleSigninPasswordChange = (event) => {
        setSigninPassword(event.target.value);
    }
    const handleSignin = () => {

        contract.methods.authorization(signinAddress, signinPassword).call().then((data) => dispatch(signin({ address: signinAddress, role: 2})));
    }
    const handleSignupPasswordChange = (event) => {
        setSignupPassword(event.target.value);
    }
    const handleSignupAddressChange = (event) => {
        setSignupAddress(event.target.value);
    }
    const handleRepeatSignupPasswordChange = (event) => {
        setRepeatSignupPassword(event.target.value);
    }
    const handleSignup = () => {
        //contract signup call
        console.log('front', signupAddress);
        contract.methods.registerUser(signupAddress, 2, repeatSignupPassword, signupPassword).call().then((data) => console.log(data));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center'}}>
            <div style={{ width: 600 }}>
            <FormGroup>
        <TextField
          label="Address"
          variant="standard"
          type="text"
          onChange={handleSigninAddressChange}
          value={signinAddress}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Password"
          variant="standard"
          type="password"
          onChange={handleSigninPasswordChange}
          value={signinPassword}
          required
        />
      </FormGroup>
      <FormGroup>
        <Button
          type="submit"
          value="submit"
          onClick={handleSignin}
        >
          SIGN IN
        </Button>
      </FormGroup>
            </div>
            <div style={{ width: 600 }}>
            <FormGroup>
        <TextField
          label="Address"
          variant="standard"
          type="text"
          onChange={handleSignupAddressChange}
          value={signupAddress}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Password"
          variant="standard"
          type="password"
          onChange={handleSignupPasswordChange}
          value={signupPassword}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Repeat Password"
          variant="standard"
          type="password"
          onChange={handleRepeatSignupPasswordChange}
          value={repeatSignupPassword}
          required
        />
      </FormGroup>
      <FormGroup>
        <Button
          type="submit"
          value="submit"
          onClick={handleSignup}
        >
          SIGN UP
        </Button>
      </FormGroup>
            </div>
        </div>
    )
}

export default memo(StartPage);