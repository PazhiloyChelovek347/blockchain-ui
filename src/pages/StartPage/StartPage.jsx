import { Card } from "@mui/material";
import React, { memo, useState } from "react";
import { FormGroup, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/actionCreators/basicActions";

const StartPage = ({ contract, web3 }) => {
  const [signinAddress, setSigninAddress] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signupAddress, setSignupAddress] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [repeatSignupPassword, setRepeatSignupPassword] = useState("");

  const dispatch = useDispatch();
  const u1 = () => {
    contract.methods
      .createUser("0x23417873B83D20232e3281800FF0c7A974dBe21A", "chen", "1pos")
      .call()
      .then((d) => console.log(d));
  };

  const u2 = () => {
    contract.methods
      .createUser("0x39d05Ef8862F68C024ad4e046D2a0eDF58ACaA12", "invoker", "5pos")
      .call()
      .then((d) => console.log(d));
  };

  const payTest = () => {
    contract.methods
      .setRole('0x39d05Ef8862F68C024ad4e046D2a0eDF58ACaA12', 1)
      .call()
      .then((d) => (console.log(d)))
    contract.methods
      .createBook('2021.21.12', '0x39d05Ef8862F68C024ad4e046D2a0eDF58ACaA12', '0x23417873B83D20232e3281800FF0c7A974dBe21A')
      .call()
      .then((d) => (console.log(d)))
    web3.eth.sendTransaction({
      from: '0x23417873B83D20232e3281800FF0c7A974dBe21A',
      to: '0x39d05Ef8862F68C024ad4e046D2a0eDF58ACaA12',
      value: web3.utils.toWei("0.5", "ether")
    })
  };

  // const handleSigninAddressChange = (event) => {
  //   setSigninAddress(event.target.value);
  // };
  // const handleSigninPasswordChange = (event) => {
  //   setSigninPassword(event.target.value);
  // };
  // const handleSignin = () => {
  //   contract.methods
  //     .authorization(signinAddress, signinPassword)
  //     .call()
  //     .then((data) => dispatch(signin({ address: signinAddress, role: 2 })));
  // };
  // const handleSignupPasswordChange = (event) => {
  //   setSignupPassword(event.target.value);
  // };
  // const handleSignupAddressChange = (event) => {
  //   setSignupAddress(event.target.value);
  // };
  // const handleRepeatSignupPasswordChange = (event) => {
  //   setRepeatSignupPassword(event.target.value);
  // };
  // const handleSignup = () => {
  //   //contract signup call
  //   console.log("front", signupAddress);
  //   contract.methods
  //     .registerUser(signupAddress, 2, repeatSignupPassword, signupPassword)
  //     .call()
  //     .then((data) => console.log(data));
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <Button
        type="submit"
        value="submit"
        onClick={payTest}
      >
        Send and book from chen to invoker
      </Button>
      <Button
        type="submit"
        value="submit"
        onClick={u1}
      >
        Create chen
      </Button>
      <Button
        type="submit"
        value="submit"
        onClick={u2}
      >
        Create invoker
      </Button>

      {/* <div style={{ width: 600 }}>
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
              <Button
              type="submit"
              value="submit"
              onClick={t}
            >
         aaaaaaaa
            </Button> */}
    </div>
  );
};

export default memo(StartPage);
