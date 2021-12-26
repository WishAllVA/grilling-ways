import React, { useState } from "react";
import { Card, CardContent, CardActions, Typography, TextField } from "@material-ui/core";
import Button from "../Button/Button";
import Router, { useRouter } from "next/router";

const Signup: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    return (
        <Card className="w-4/12 mx-auto my-6 pt-6 px-6 flex flex-col justify-center content-center">
            <CardContent className="flex flex-col">
                <div className="mb-10 ml-8">
                    <Typography variant="h5" component="h2">
                        Let's get you started!!!
                    </Typography>
                </div>
                <div className="mb-5">
                    <TextField
                        autoFocus
                        label="Name"
                        variant="filled"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <TextField
                        label="Email"
                        variant="filled"
                        type="email"
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
                <div className="mb-5">
                    <TextField
                        label="Confirm Password"
                        variant="filled"
                        type="password"
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </CardContent>
            <CardActions className="flex-col justify-around mb-2">
                <div>
                    <Button title="Signup" onClick={() => { window.alert('Signup Works') }} />
                </div>
                <div className="flex">
                    <Typography style={{ lineHeight: '2.5rem' }} variant="body2" color="textSecondary" component="p">
                        Already have an account?
                    </Typography>
                    <Button title="Login" onClick={() => { router.push('/login') }} />
                </div>
            </CardActions>
        </Card>

    )
}

export default Signup;