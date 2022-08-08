// import BazarButton from "../components/BazarButton";
// import BazarTextField from "../components/BazarTextField";
// import FlexBox from "../components/FlexBox";
// import Alert from "@mui/material/Alert";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
// import Link from "@mui/material/Link";
// import { Link as RouterLink} from 'react-router-dom';
// import IconButton from "@mui/material/Icon";
// import styled from '@mui/material/styles/styled';
// import { Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// // import { useAuth } from "contexts/auth/AuthContext";
// // import CloseIcon from '@mui/icons-material/Close';
// // import FacebookLoginIcon from '../components/icons/FacebookLogin';
// // import GoogleLoginIcon from '../components/icons/GoogleLogin';

// const fbStyle = {
//     background: "#3B5998",
//     color: "white"
// };
// const googleStyle = {
//     background: "#4285F4",
//     color: "white"
// };
// const StyledCard = styled(({
//    children,
//    passwordVisibility,
//    ...rest
// }) => <Card {...rest}>{children}</Card>)(({
//     theme,
//     passwordVisibility
// }) => ({
//     width: 500,
//     [theme.breakpoints.down("sm")]: {
//         width: "100%"
//     },
//     ".content": {
//         textAlign: "center",
//         padding: "3rem 3.75rem 0px",
//         [theme.breakpoints.down("sm")]: {
//             padding: "1.5rem 2rem 0px"
//         }
//     },
//     ".passwordEye": {
//         color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
//     },
//     ".facebookButton": {
//         marginBottom: 10,
//         "&:hover": fbStyle,
//         ...fbStyle
//     },
//     ".googleButton": {
//         "&:hover": googleStyle,
//         ...googleStyle
//     },
//     ".agreement": {
//         marginTop: 12,
//         marginBottom: 24
//     },
//     ".alert": {
//         marginBottom: 24
//     }
// }));

// const NotifyError = ({setLoginFailed}) => {
//     return (
//         <Box sx={{width: '100%'}}>
//             <Alert
//                 className="alert"
//                 severity="error"
//                 action={
//                     <IconButton
//                         aria-label="close"
//                         color="inherit"
//                         size="small"
//                         onClick={() => {
//                             setLoginFailed(false);
//                         }}>
//                         {/* <CloseIcon fontSize="inherit"/> */}
//                     </IconButton>
//                 }
//             >
//                 Incorrect Email or Password
//             </Alert>
//         </Box>
//     );
// }

// const Login = () => {

//     const [loginFailed, setLoginFailed] = useState(false);

//     const [loginData, setLoginData] = useState({
//         email: '',
//         password: ''
//     });

//     // const auth = useAuth();

//     // const handleInputChange = (event) => {
//     //     const target = event.target;
//     //     const value = target.value;
//     //     const name = target.name;

//     //     let toUpdate = {
//     //         ...loginData,
//     //         [name]: value
//     //     };
//     //     setLoginData(toUpdate);
//     // }

//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     auth.login(
//     //         loginData
//     //     ).catch(() => {
//     //         setLoginFailed(true)
//     //     });
//     // }

//     // useEffect(() => {
//     //     auth.checkLogin()
//     // }, []);

//     // if (auth.state.checked && auth.state.loggedIn) {
//     //     return <Navigate to="/families" />;
//     // }

//     return (
//         <StyledCard elevation={3}>
//             <form className="content" onSubmit={handleSubmit}>
//                 {loginFailed && <NotifyError setLoginFailed={setLoginFailed} />}
//                 <h3 textAlign="center" mb={1}>
//                     Login
//                 </h3>

//                 <BazarTextField
//                     mb={2}
//                     name="email"
//                     label="Email"
//                     placeholder="example@mail.com"
//                     variant="outlined"
//                     size="small"
//                     type="email"
//                     fullWidth
//                     onChange={handleInputChange}
//                     value={loginData.email}
//                 />

//                 <BazarTextField
//                     mb={2}
//                     name="password"
//                     label="Password"
//                     placeholder="*********"
//                     autoComplete="on"
//                     type="password"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     value={loginData.password}
//                     onChange={handleInputChange}
//                 />

//                 <BazarButton
//                     variant="contained"
//                     color="primary"
//                     type="submit"
//                     fullWidth sx={{
//                         mb: "1.65rem",
//                         height: 44
//                     }}
//                 >
//                     Submit
//                 </BazarButton>

//                 <Box mb={2}>
//                     <Box
//                         width="200px"
//                         mx="auto"
//                     >
//                         <Divider />
//                     </Box>

//                     <FlexBox
//                         justifyContent="center"
//                         mt={-1.625}
//                     >
//                         <Box
//                             bgcolor="background.paper"
//                             px={2}
//                         >
//                             Login with your social network
//                         </Box>
//                     </FlexBox>
//                 </Box>

//                 {/* <BazarButton
//                     className="facebookButton"
//                     size="medium"
//                     type="button"
//                     href={"/api/oauth/facebook?language=en"}
//                     fullWidth
//                     sx={{
//                         mb: "10px",
//                         height: 44
//                     }}
//                 >
//                     <FacebookLoginIcon />
//                     <Box
//                         fontSize="12px"
//                         ml={1}
//                     >
//                         Continue with Facebook
//                     </Box>
//                 </BazarButton> */}
//                 {/* <BazarButton
//                     className="googleButton"
//                     size="medium"
//                     href={"/api/oauth/google?language=en"}
//                     fullWidth
//                     sx={{
//                         mb: "10px",
//                         height: 44
//                     }}
//                 >
//                     <GoogleLoginIcon />
//                     <Box
//                         fontSize="12px"
//                         ml={1}
//                     >
//                         Continue with Google
//                     </Box>
//                 </BazarButton> */}
//                 <FlexBox
//                     justifyContent="center"
//                     alignItems="center"
//                     my="1.25rem"
//                     sx={{
//                         flexDirection: 'column'
//                     }}
//                 >
//                     <Box>Don’t have account?&nbsp;</Box>
//                     <Link
//                         component={RouterLink}
//                         to="/register"
//                     >
//                         <h6>
//                             &nbsp;Sign Up
//                         </h6>
//                     </Link>
//                 </FlexBox>
//                 <FlexBox
//                     justifyContent="center"
//                     alignItems="center"
//                     my="1.25rem"
//                     sx={{
//                         flexDirection: 'column'
//                     }}
//                 >
//                     <Box>Forgot or don't know your password?&nbsp;</Box>
//                     <Link
//                         component={RouterLink}
//                         to="/reset"
//                     >
//                         <h6>
//                             Reset It
//                         </h6>
//                     </Link>
//                 </FlexBox>
//             </form>
//         </StyledCard>
//     )
// };

// export default Login;
