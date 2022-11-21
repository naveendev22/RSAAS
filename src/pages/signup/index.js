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
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
// import Axios from "axios";
import images from "../../assets/images/test.png";
import "./signup.css";
export default function Signup(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
    fullName: "",
    companyName: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    fullName: false,
    companyName: false,
    phoneNumber: false,
  });

  function handleChange(e) {
    var val = e.target.value;
    var name = e.target.name;
    let regex = /^[0-9]*$/;
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
    if (name === "companyName") {
      if (val === "") {
        setError({ ...error, companyName: true });
      } else {
        setError({ ...error, companyName: false });
      }
      setState({ ...state, companyName: val });
    }
    if (name === "fullName") {
      if (val === "") {
        setError({ ...error, fullName: true });
      } else {
        setError({ ...error, fullName: false });
      }
      setState({ ...state, fullName: val });
    }
    if (name === "phoneNumber") {
      if (val == "") {
        setError({ ...error, phoneNumber: true });
      } else {
        setError({ ...error, phoneNumber: false });
      }
      if (regex.test(val)) {
        setState({ ...state, phoneNumber: val });
      } else {
        setState({ ...state, phoneNumber: val });
        setError({ ...error, phoneNumber: true });
      }
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
    <div className="signup_body">
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container item xs={11} sm={11} md={6} lg={5} xl={4}>
          <Card className="border_box">
            <Typography variant="h5" align="left" fontWeight={800}>
              Are you a recruiter or a hiring manager
            </Typography>
            <div style={{ margin: "10px 0px", textAlign: "center" }}>
              <Typography variant="p" align="center">
                Create a account
              </Typography>
            </div>

            <Box component="form" onSubmit={onLoginSubmit} autoComplete="off">
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    size="small"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{ marginRight: "15px" }}
                    >
                      Hirisg as:
                    </Typography>

                    {/* </FormLabel> */}
                    <FormControlLabel
                      value="staffingAgency"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontWeight: 600 }}>
                          Staffing Agency
                        </Typography>
                      }
                      style={{ fontWeight: "700" }}
                    />
                    <FormControlLabel
                      value="corporateHRs"
                      control={<Radio size="small" />}
                      label={
                        <Typography sx={{ fontWeight: 600 }}>
                          Corporate HRs
                        </Typography>
                      }
                    />
                  </RadioGroup>
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
                    name="companyName"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={state.companyName}
                    error={error.companyName}
                    required
                    placeholder="Company Name*"
                    onChange={handleChange}
                    helperText={
                      error.companyName ? "Please enter Company Name" : ""
                    }
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
                    name="email"
                    type="email"
                    variant="outlined"
                    size="small"
                    value={state.email}
                    error={error.email}
                    required
                    placeholder="Work Email Address*"
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
                    placeholder="Password*"
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
                    name="fullName"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={state.fullName}
                    error={error.fullName}
                    required
                    placeholder="Full name*"
                    onChange={handleChange}
                    helperText={error.fullName ? "Please enter vaild Name" : ""}
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
                    name="phoneNumber"
                    type="text"
                    variant="outlined"
                    size="small"
                    value={state.phoneNumber}
                    error={error.phoneNumber}
                    required
                    placeholder="Phone Number*"
                    onChange={handleChange}
                    helperText={
                      error.phoneNumber ? "Please enter vaild phone number" : ""
                    }
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
                    inputProps={{ minLength: 10, maxLength: 10 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          +91
                          {/* <Select
                          style={{
                            width: "auto",
                          }}
                          value="kg"
                        >
                          <MenuItem key="kg" value="kg">
                            kg
                          </MenuItem>
                          <MenuItem key="gram" value="gram">
                            gram
                          </MenuItem>
                        </Select> */}
                        </InputAdornment>
                      ),
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
                  marginBottom: "5px",
                }}
              >
                <Typography variant="subtitle2" align="left" fontWeight={600}>
                  By signing up for our service,you agree to our
                  <Link className="link"> Terms & Condition</Link>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  width: "100%",
                  display: "flex",
                  marginBottom: "5px",
                }}
              >
                <Typography variant="subtitle2" align="left">
                  and acknowledge that you have read our
                  <Link className="link"> Privacy Policy</Link>
                </Typography>
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
                  {" "}
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
                <Typography variant="subtitle2" align="center">
                  Does your company already use Recruitee?
                  <Link className="button_fp" to="/login">
                    {" "}
                    Log in
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Card>
        </Grid>
        <Grid container item xs={11} sm={11} md={6} lg={5} xl={4}>
          <Card>
            <div>
              <div className="icon_style">
                {/* <img src={Loginicon} style={{ width: "14ch" }} alt={"ICON"}></img> */}
                <Typography variant="h4" align="center" fontWeight={700}>
                  <a style={{ color: "#b67eff" }}>skill</a>strove
                </Typography>
              </div>
              <img src={images} width="100%" alt="test" />
              <Typography variant="subtitle2" align="center">
                Skillstrove offers a configurable recruitment management system
                for small and medium enterprises. Our recruiting software helps
                you streamline youe end to end hiring process, right from
                requistion to offer.
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
