import React, { useState } from "react";
import { Card, CardContent, CardActions, Typography, TextField } from "@material-ui/core";
import Button from "../Button/Button";
import Router, { useRouter } from "next/router";
import { routes } from "../../pages/api/routes";

interface SignupProps {
    name: string;
    email: string;
    password: string;
}

const Signup: React.FC = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const signup = async () => {
        // e.preventDefault();
        if (password !== confirmPassword) {
            window.alert("Passwords do not match");
            return;
        }
        const res = await fetch(routes.signup, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                username,
                email,
                password
            })
        });
        if (res.status === 200) {
            const data = await res.json();
            if (data.success) {
                window.alert("Successfully signed up");
                router.push("/login");
            } else {
                window.alert(data.message);
            }
        } else {
            window.alert("Something went wrong");
        }
    };


    return (
        <Card className="md:w-4/12 mx-auto md:my-6 pt-6 px-6 flex flex-col justify-center content-center">
            <CardContent className="flex flex-col">
                <div className="mb-8 ml-14">
                    <Typography variant="h5" component="h2">
                        Let&apos;s get you started!!!
                    </Typography>
                </div>
                {/* <div className="mb-5">
                    <TextField
                        autoFocus
                        label="Name"
                        variant="filled"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div> */}
                <div className="mb-5">
                    <TextField
                        autoFocus
                        label="Usrname"
                        variant="filled"
                        type="text"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <div className="mb-3">
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
                    <Button title="Signup" onClick={() => {
                        signup().then(() => {
                            router.push("/login");
                        });
                    }} />
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