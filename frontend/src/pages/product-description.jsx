import BazarButton from "../components/BazarButton";
import BazarTextField from "../components/BazarTextField";
import FlexBox from "../components/FlexBox";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { Link as RouterLink} from 'react-router-dom';
import IconButton from "@mui/material/Icon";
import styled from '@mui/material/styles/styled';
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
// import { useAuth } from "contexts/auth/AuthContext";
// import CloseIcon from '@mui/icons-material/Close';

const StyledCard = styled(({
   children,
   passwordVisibility,
   ...rest
}) => <Card {...rest}>{children}</Card>)(({
    theme,
    passwordVisibility
}) => ({
    width: 500,
    [theme.breakpoints.down("sm")]: {
        width: "100%"
    },
    ".content": {
        textAlign: "center",
        padding: "3rem 3.75rem 0px",
        [theme.breakpoints.down("sm")]: {
            padding: "1.5rem 2rem 0px"
        }
    },
    ".passwordEye": {
        color: passwordVisibility ? theme.palette.grey[600] : theme.palette.grey[400]
    },
    ".agreement": {
        marginTop: 12,
        marginBottom: 24
    },
    ".alert": {
        marginBottom: 24
    }
}));

const NotifyError = ({setLoginFailed}) => {
    return (
        <Box sx={{width: '100%'}}>
            <Alert
                className="alert"
                severity="error"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setLoginFailed(false);
                        }}>
                        {/* <CloseIcon fontSize="inherit"/> */}
                    </IconButton>
                }
            >
                Incorrect name or password
            </Alert>
        </Box>
    );
}

const Login = () => {

    const [loginFailed, setLoginFailed] = useState(false);

    const [loginData, setLoginData] = useState({
        user: '',
        pass: ''
    });

    // const auth = useAuth();

    // useEffect(() => {
    //     fetch("/login").then(
    //         response => response.json()
    //     ).then(
    //         data
    //     )
    // })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let toUpdate = {
            ...loginData,
            [name]: value
        };
        setLoginData(toUpdate);
    }

    const handleSubmit = (event) => {
    }

    // useEffect(() => {
    //     auth.checkLogin()
    // }, []);

    // if (auth.state.checked && auth.state.loggedIn) {
    //     return <Navigate to="/products" />;
    // }

    return (

        <StyledCard elevation={3}>
            <form className="content" onSubmit={handleSubmit}>
                {loginFailed && <NotifyError setLoginFailed={setLoginFailed} />}
                <h3 textalign="center" mb={1}>
                    Login
                </h3>

                <TextField
                    mb={2}
                    name="user"
                    label="user"
                    placeholder="your name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={handleInputChange}
                    value={loginData.user}
                />

                <TextField
                    mb={2}
                    name="password"
                    label="Password"
                    placeholder="*********"
                    autoComplete="on"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    style={{ marginTop:"25px" }}
                    value={loginData.pass}
                    onChange={handleInputChange}
                />

                <BazarButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop:"25px" }}
                    fullWidth sx={{
                        mb: "1.65rem",
                        height: 44
                    }}
                >
                    Submit
                </BazarButton>
                <FlexBox
                    justifyContent="center"
                    alignItems="center"
                    my="1.25rem"
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                    <Box>Don’t have account?&nbsp;</Box>
                    <Link
                        component={RouterLink}
                        to="/register"
                    >
                        <h6>
                            &nbsp;Sign Up
                        </h6>
                    </Link>
                </FlexBox>
                <FlexBox
                    justifyContent="center"
                    alignItems="center"
                    my="1.25rem"
                    sx={{
                        flexDirection: 'column'
                    }}
                >
                </FlexBox>
            </form>
        </StyledCard>
    )
};

export default Login;
