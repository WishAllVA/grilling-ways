import React from "react";
import { Card, CardContent, CardActions, Typography, TextField } from "@material-ui/core";
import Button from "../Button/Button";
import Router, { useRouter } from "next/router";
import { routes } from '../../pages/api/routes';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter();

    const login = async () => {
        // e.preventDefault();
        try {
            const res = await fetch(routes.login, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    identifier: email,
                    password
                })
            });
            if (res.status === 200) {
                const data = await res.json();
                window.alert("Successfully logged in");
                const { jwt, user } = data;
                window.localStorage.setItem('jwt', jwt)
                window.localStorage.setItem('userData', JSON.stringify(user))
                router.push("/");

            } else {
                window.alert("Something went wrong");
            }
        } catch (err) {

        }
    };

    return (
        <Card className="w-4/12 mx-auto my-12 pt-12 px-6 flex flex-col justify-center content-center">
            <CardContent className="flex-col">
                <div className="mb-10 ml-8">
                    <Typography variant="h5" component="h2">
                        Welcome to Grilling ways!!!
                    </Typography>
                </div>
                <div className="mb-5">
                    <TextField
                        autoFocus
                        label="Email or Username"
                        variant="filled"
                        type="text"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <TextField
                        label="Password"
                        variant="filled"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </CardContent>
            <CardActions className="flex-col justify-around mt-4 mb-4">
                <div className="mb-4">
                    <Button title="Login" onClick={() => { login() }} />
                </div>
                <div className="flex">
                    <Typography style={{ lineHeight: '2.5rem' }} variant="body2" color="textSecondary" component="p">
                        Don&apos;t have an account?
                    </Typography>
                    <Button title="Sign Up" onClick={() => { router.push('/signup') }} />
                </div>
                <div>
                    <Button title="Login with Google" onClick={() => { router.push(routes.google) }} />

                </div>
            </CardActions>
        </Card >

    )
}

export default Login;