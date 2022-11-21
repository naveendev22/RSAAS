import React, { useState, useEffect } from "react";
import {
  InputAdornment,
  FormControl,
  Typography,
  TextField,
  Card,
  Box,
  Button,
  IconButton,
  Grid,
  FormHelperText,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
// import Axios from "axios";

import "./login.css";
const Login = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
    captcha: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    captcha: false,
  });

  function handleChange(e) {
    var val = e.target.value;
    var name = e.target.name;
    if (name === "email") {
      if (val === "") {
        setError({ ...error, email: true });
      } else {
        setError({ ...error, email: false });
      }
      setState({ ...state, email: val });
    }
    if (name === "password") {
      if (val === "") {
        setError({ ...error, password: true });
      } else {
        setError({ ...error, password: false });
      }
      setState({ ...state, password: val });
    }
  }

  function handleClickShowPassword() {
    setState({
      ...state,
      showPassword: !state.showPassword,
    });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function onLoginSubmit(e) {
    e.preventDefault();
    let emailvalidation = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
    let test = emailvalidation.test(state.email);
    let seterrordata = {};
    if (state.email === "") {
      seterrordata = { ...seterrordata, email: true };
    }
    if (test === false) {
      seterrordata = { ...seterrordata, email: true };
    }
    if (state.password === "") {
      seterrordata = { ...seterrordata, password: true };
    }

    setError(seterrordata);
    // let data = Object.keys(seterrordata);
    // if (data.length == 0) {
    //   try {
    //     await Axios({
    //       method: "post",
    //       url: "http://1.22.214.78:8080/surviencenew/consumerapi/users/consumerLogin",
    //       data: {
    //         email: state.email,
    //         password: state.password,
    //       },
    //     })
    //       .then((response) => {
    //         console.log("response", response);
    //         localStorage.setItem("token", response.data.data.token);

    //         setAuth(response.data.data.token);
    //         setTimeout(() => {
    //           navigate("/dashboard");
    //         }, 500);
    //       })
    //       .catch((error) => {
    //         console.log("this error", error);
    //         swal({
    //           title: "Invalid Email or password",
    //           icon: "error",
    //         });
    //       });
    //   } catch (error) {
    //     alert("this");
    //     console.log(error);
    //   }
    // }
  }
  return (
    <div className="login_body">
      <Grid container item xs={11} sm={11} md={6} lg={5} xl={4}>
        <Card className="border_box">
          <div className="icon_style">
            {/* <img src={Loginicon} style={{ width: "14ch" }} alt={"ICON"}></img> */}
            <Typography variant="h4" align="center" fontWeight={700}>
              <a style={{ color: "#b67eff" }}>skill</a>strove
            </Typography>
          </div>
          <Typography variant="h4" align="left" fontWeight={700}>
            Sign in
          </Typography>
          <div style={{ margin: "10px 0px" }}>
            <Typography variant="subtitle2" align="left">
              Don't have a company account?
              <Link className="button_fp" to="/signup">
                {" "}
                Create now
              </Link>
            </Typography>
          </div>

          <Box component="form" onSubmit={onLoginSubmit} autoComplete="off">
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{ m: 2, width: "35ch" }}>
                <TextField
                  name="email"
                  type="email"
                  variant="outlined"
                  size="small"
                  value={state.email}
                  error={error.email}
                  required
                  placeholder="Email Address"
                  onChange={handleChange}
                  helperText={error.email ? "Please enter vaild email" : ""}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        background: "#c4c4c44f",
                        borderRadius: `10px`,
                        border: "2px solid #bebebe",
                      },
                      "&:hover fieldset": {
                        border: "2px solid #bebebe",
                      },
                      "&.Mui-focused fieldset": {
                        border: "2px solid blueviolet",
                      },
                    },
                  }}
                ></TextField>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{ m: 2, width: "35ch" }}>
                <TextField
                  name="password"
                  type={state.showPassword ? "text" : "password"}
                  variant="outlined"
                  size="small"
                  placeholder="Password"
                  value={state.password}
                  error={error.password}
                  onChange={handleChange}
                  helperText={error.password ? "Please enter password" : ""}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        background: "#c4c4c44f",
                        borderRadius: `10px`,
                        border: "2px solid #bebebe",
                      },
                      "&:hover fieldset": {
                        border: "2px solid #bebebe",
                      },
                      "&.Mui-focused fieldset": {
                        border: "2px solid blueviolet",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          style={{ padding: "0px" }}
                        >
                          {state.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </FormControl>
            </Grid>
          </Box>

          <div className="button-data">
            <Grid
              item
              xs={12}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                className="login_submit"
                // sx={{ width: "13ch", background: "#395caa" }}
                variant="contained"
                type="submit"
                onClick={onLoginSubmit}
              >
                Signup
              </Button>
            </Grid>
          </div>
          <Grid
            item
            xs={12}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="button-data-link">
              <Link className="button_fp" to="/forgetpassword">
                Forgot password?
              </Link>
            </div>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
};

export default Login;
