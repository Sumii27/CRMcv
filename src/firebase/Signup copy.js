import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

const Signup = () => {
  const rootStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.12)',
  };

  const inputStyle = {
    marginBottom: '16px',
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };

  const iconStyle = {
    marginRight: '8px',
  };

  const footerStyle = {
    marginTop: '16px',
  };

  return (
    <div style={rootStyle}>
      <form style={formStyle}>
        <TextField
          label="Country/Region"
          variant="outlined"
          style={inputStyle}
          fullWidth
        />
        <TextField
          label="Phone number"
          variant="outlined"
          style={inputStyle}
          fullWidth
          InputProps={{
            startAdornment: <span>+1</span>,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={buttonStyle}
          fullWidth
        >
          Continue with phone
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={buttonStyle}
          fullWidth
          startIcon={<FacebookIcon style={iconStyle} />}
        >
          Continue with Facebook
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={buttonStyle}
          fullWidth
          startIcon={<GoogleIcon style={iconStyle} />}
        >
          Continue with Google
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={buttonStyle}
          fullWidth
          startIcon={<AppleIcon style={iconStyle} />}
        >
          Continue with Apple
        </Button>
        <Button
          variant="text"
          color="primary"
          style={buttonStyle}
          fullWidth
        >
          Continue with email
        </Button>
      </form>
      <div style={footerStyle}>
        <a href="#">Privacy Policy</a>
      </div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hospital Name
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    {/* <Box sx={{ p: 2 }}>
        <Container maxWidth="md">
        <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-around',
              my: 4,
            }}
          >
            
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              my: { xs: 2, md: 0 },
            }}
          >
            <img src={Hospital} alt="Hospital" style={{ width: "100%" }} />
          </Box>

          </Box>
        </Container>
      </Box> */}
  
    </div>

  );
};


export default Signup;


