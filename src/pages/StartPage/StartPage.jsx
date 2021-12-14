import { Card, Typography } from "@mui/material";
import React, { memo, useState } from "react";
import { FormGroup, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/actionCreators/basicActions";

const StartPage = ({ contract, web3 }) => {
  const [logs, setLogs] = useState([]);
  const [inv, setInv] = useState({});
  const [chen, setChen] = useState({});
  const [lastBooking, setBooking] = useState({});


  // const dispatch = useDispatch();
  const u1 = async () => {
    contract.methods
      .createUser("0xCfaA18F0616309874573dc4b5c9eDcf346E22895", "chen", "1pos")
      .send({ from: "0xCfaA18F0616309874573dc4b5c9eDcf346E22895" });
    const u = await contract.methods
      .getUser("0xCfaA18F0616309874573dc4b5c9eDcf346E22895")
      .call();
    setInv({ role: u[4], balance: web3.utils.fromWei((await web3.eth.getBalance('0xCfaA18F0616309874573dc4b5c9eDcf346E22895'))) });
  };

  const u2 = async () => {
    contract.methods
      .createUser(
        "0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd",
        "invoker",
        "5pos"
      )
      .send({ from: "0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd" });
    const u = await contract.methods
      .getUser("0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd")
      .call();
    setChen({ role: u[4], balance: web3.utils.fromWei((await web3.eth.getBalance('0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd'))) });
  };

  const gi = () => {
    contract.methods
      .getUser("0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd")
      .call()
      .then((d) => {
        console.log(d);
      });
  };

  const payTest = async () => {
    await contract.methods
      .setRole("0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd", 1)
      .send({ from: "0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd" });
      await contract.methods
      .createBook(
        "2021.21.12",
        "0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd",
        "0xCfaA18F0616309874573dc4b5c9eDcf346E22895"
        )
        .send({ from: "0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd" });
        const u1 = await contract.methods
        .getUser("0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd")
        .call();
      setInv({ role: u1[4], balance: web3.utils.fromWei((await web3.eth.getBalance('0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd'))) });
      const u2 = await contract.methods
        .getUser("0xCfaA18F0616309874573dc4b5c9eDcf346E22895")
        .call();
      setChen({ role: u2[4], balance: web3.utils.fromWei((await web3.eth.getBalance('0xCfaA18F0616309874573dc4b5c9eDcf346E22895'))) });
    setBooking((await contract.methods.getBookings().call()));
    await web3.eth.sendTransaction({
      from: "0xCfaA18F0616309874573dc4b5c9eDcf346E22895",
      to: "0xDCcfE0E4782340Cb93e21BA4e4774991377Ee6Dd",
      value: web3.utils.toWei("0.5", "ether"),
    });
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "space-around",
          width: "200px",
          gap: 15,
          margin: 10,
        }}
      >
        <Button type="submit" value="submit" onClick={u1} variant="contained">
          Create chen
        </Button>
        <Button type="submit" value="submit" onClick={u2} variant="contained">
          Create invoker
        </Button>
        <Button
          type="submit"
          value="submit"
          onClick={payTest}
          variant="contained"
        >
          Send and book from chen to invoker
        </Button>
        <Button type="submit" value="submit" onClick={gi} variant="contained">
          get invoker
        </Button>

      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "space-around",
          width: "200px",
          gap: 15,
          margin: 10,
        }}
      >
        <Typography>Logs:</Typography>
        <Typography style={{wordBreak: 'break-all'}}>{`chen role ${inv.role},money ${inv.balance}`}</Typography>
        <Typography style={{wordBreak: 'break-all'}}>{`invoker role ${chen.role},money ${chen.balance}`}</Typography>
        <Typography style={{wordBreak: 'break-all'}}>{`booking: ${lastBooking}`}</Typography>
      </div>
    </>
  );
};

export default memo(StartPage);
