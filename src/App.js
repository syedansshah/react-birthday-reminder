import React from 'react';
import BirhtdayList from './Components/BirthdaysList';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {

  return (
    <>
      {/* #002e9e */}
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, paddingTop: "25px" }}>
          <AppBar position="static" sx={{ backgroundColor: "white" }} >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="#002e9e"
                aria-label="menu"
                sx={{ mr: 2, color: "#002e9e" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#002e9e" }}>
                Birthday Reminder
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <BirhtdayList />

      </Container>

    </>

  );
}

export default App;
