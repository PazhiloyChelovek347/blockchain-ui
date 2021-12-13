import React, { memo } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const { address } = useSelector((store) => store.basicReducer)
    return (
        <>
          <AppBar position="static" id="header">
            <Toolbar>
              <Link to="/" id="homepage" style={{color: 'white', textDecoration: 'none'}}>Blockchain UI Ponomarev</Link>
            </Toolbar>
            {!!address
            &&
            <Toolbar>
              <Link to={`users/${address}`} id="profile" style={{color: 'white', textDecoration: 'none'}}>Profile</Link>
            </Toolbar>
            }
          </AppBar>
        </>
    );
}

export default memo(Header);