import React from "react";
import { Card, CardContent, CardActions, Icon, Typography, TextField } from "@material-ui/core";
import { Facebook } from '@material-ui/icons';
import Button from "../Button/Button";
import Router, { useRouter } from "next/router";
import { routes } from '../../pages/api/routes';
import { signIn } from 'next-auth/react';

const Login: React.FC<any> = ({ providers }) => {
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
        <Card className="md:w-4/12 mx-auto md:my-12 md:pt-8 px-6 flex flex-col justify-center">
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
                <div className="">
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
            <CardActions className="flex-col justify-around lg:mt-4 mb-4">
                <div className="mb-6">
                    <Button title="Login" onClick={() => { login() }} />
                </div>
                <div className="flex mb-5">
                    <Typography style={{ lineHeight: '2.5rem' }} variant="body2" color="textSecondary" component="p">
                        Don&apos;t have an account?
                    </Typography>
                    <Button title="Sign Up" onClick={() => { router.push('/signup') }} style={{
                        backgroundColor: '#fe5f55',
                        marginLeft: '1rem'
                    }} />
                </div>
                {/* <div className="flex">
                    <Typography style={{ lineHeight: '1.5rem' }} variant="body2" color="textSecondary" component="p">
                        Login with
                    </Typography>
                    <Facebook className="ml-2" style={{ cursor: 'pointer' }} onClick={() => { router.push(routes.google) }} />
                </div> */}
                <div className="flex-col px-12 md:px-20">
                    {
                        providers ?
                            Object.values(providers).map((provider: any) => {
                                return <Button
                                    key={provider.id}
                                    title={`Login with ${provider.name}`}
                                    onClick={() => { signIn(provider.id, { callbackUrl: `${window.location.origin}/` }) }}
                                    style={{
                                        backgroundColor: '#0077b5',
                                        // color: '#a3a3a3',
                                        margin: '5px 0 5px 0'
                                    }}
                                />
                            }) : null
                    }
                </div>
            </CardActions>
        </Card >

    )
}

export default Login;