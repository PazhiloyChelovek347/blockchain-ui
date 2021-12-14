import { Button, Container, TextField, Typography } from "@mui/material";
import React, { memo, useState } from "react";

const StartPage = ({ contract, web3 }) => {
  const [inv, setInv] = useState({});
  const [chen, setChen] = useState({});
  const [lastBooking, setBooking] = useState([[]]);
  const [cust1, setCust1] = useState({});
  const [cust2, setCust2] = useState({});
  const [fromIn, setFromIn] = useState("");
  const [toIn, setToIn] = useState("");
  const [valIn, setValIn] = useState(0);

  const handleChange = (val, fun, format) => {
    switch (format) {
      case "string":
        fun(String(val));
        break;
      case "number":
        fun(Number(val));
        break;
      default:
        break;
    }
  };

  const u1 = async () => {
    contract.methods
      .createUser("0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b", "chen", "1pos")
      .send({ from: "0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b" });
    const u = await contract.methods
      .getUser("0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b")
      .call();
    setChen({
      role: u[4],
      balance: web3.utils.fromWei(
        await web3.eth.getBalance("0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b")
      ),
    });
  };

  const u2 = async () => {
    contract.methods
      .createUser(
        "0x179930E69F6CA06bE9800F41e5E8c178E645044D",
        "invoker",
        "5pos"
      )
      .send({ from: "0x179930E69F6CA06bE9800F41e5E8c178E645044D" });
    const u = await contract.methods
      .getUser("0x179930E69F6CA06bE9800F41e5E8c178E645044D")
      .call();
    setInv({
      role: u[4],
      balance: web3.utils.fromWei(
        await web3.eth.getBalance("0x179930E69F6CA06bE9800F41e5E8c178E645044D")
      ),
    });
  };

  const payTest = async () => {
    await contract.methods
      .setRole("0x179930E69F6CA06bE9800F41e5E8c178E645044D", 1)
      .send({ from: "0x179930E69F6CA06bE9800F41e5E8c178E645044D" });
    await contract.methods
      .createBook(
        "2021.21.12",
        "0x179930E69F6CA06bE9800F41e5E8c178E645044D",
        "0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b"
      )
      .send({ from: "0x179930E69F6CA06bE9800F41e5E8c178E645044D" });
    const u1 = await contract.methods
      .getUser("0x179930E69F6CA06bE9800F41e5E8c178E645044D")
      .call();
    setInv({
      role: u1[4],
      balance: web3.utils.fromWei(
        await web3.eth.getBalance("0x179930E69F6CA06bE9800F41e5E8c178E645044D")
      ),
    });
    const u2 = await contract.methods
      .getUser("0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b")
      .call();
    setChen({
      role: u2[4],
      balance: web3.utils.fromWei(
        await web3.eth.getBalance("0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b")
      ),
    });
    setBooking(await contract.methods.getBookings().call());
    await web3.eth.sendTransaction({
      from: "0x0c8c79f3ECB146d2F2A40291cB2a07703D2a833b",
      to: "0x179930E69F6CA06bE9800F41e5E8c178E645044D",
      value: web3.utils.toWei("0.5", "ether"),
    });
  };

  const customPay = async () => {
    await web3.eth.sendTransaction({
      from: fromIn,
      to: toIn,
      value: web3.utils.toWei(valIn, "ether"),
    });
    setCust1({
      balance: web3.utils.fromWei(
        await web3.eth.getBalance(fromIn)
      ),
      address: fromIn
    });
    setCust2({
      balance: web3.utils.fromWei(
        await web3.eth.getBalance(toIn)
      ),
      address: fromIn
    });
  };

  return (
    <>
      <Container style={{ display: "flex" }}>
        <div>
          <div
            style={{
              display: "grid",
              justifyContent: "space-around",
              width: "200px",
              gap: 15,
              margin: 10,
            }}
          >
            <Button
              type="submit"
              value="submit"
              onClick={u1}
              variant="contained"
            >
              Create chen
            </Button>
            <Button
              type="submit"
              value="submit"
              onClick={u2}
              variant="contained"
            >
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
            <Typography
              style={{ wordBreak: "break-all" }}
            >{`invoker role ${inv.role},money ${inv.balance}`}</Typography>
            <Typography
              style={{ wordBreak: "break-all" }}
            >{`chen role ${chen.role},money ${chen.balance}`}</Typography>
            <Typography
              style={{ wordBreak: "break-all" }}
            >{`booking: ${lastBooking[0][0]}`}</Typography>
          </div>
        </div>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              margin: 10,
              width: 400,
            }}
          >
            <>
              From{" "}
              <TextField
                value={fromIn}
                onChange={(e) =>
                  handleChange(e.target.value, setFromIn, "string")
                }
              ></TextField>
            </>
            <>
              To{" "}
              <TextField
                value={toIn}
                onChange={(e) =>
                  handleChange(e.target.value, setToIn, "string")
                }
              ></TextField>
            </>
            <>
              Value{" "}
              <TextField
                value={valIn}
                onChange={(e) =>
                  handleChange(e.target.value, setValIn, "string")
                }
              ></TextField>
            </>
            <Button variant="contained" onClick={customPay}>
              Send custom
            </Button>
            <Typography>Logs:</Typography>
            <Typography
              style={{ wordBreak: "break-all" }}
            >{`${cust1.address} has ${cust1.balance}`}</Typography>
            <Typography
              style={{ wordBreak: "break-all" }}
            >{`${cust2.address} has ${cust2.balance}`}</Typography>
            <Typography
              style={{ wordBreak: "break-all" }}
            >{`booking: ${lastBooking[0][0]}`}</Typography>
          </div>
        </form>
      </Container>
    </>
  );
};

export default memo(StartPage);
