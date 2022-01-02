import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { Dialog, DialogContent, DialogActions, DialogContentText, Typography } from "@material-ui/core";
import Button from "../Button/Button";

interface LogoutModalProps {
    open: boolean;
    onCancel: () => void;
    onLogout: () => void;
}

const LogoutModal = ({ open, onCancel, onLogout }: LogoutModalProps) => {
    return (
        <div>
            <Dialog open={open || false} onClose={onCancel} fullWidth >
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to logout?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button title={'Cancel'} onClick={onCancel} />
                    <Button title={'Logout'} onClick={onLogout} />
                </DialogActions>
            </Dialog>
        </div>
    );
}

const Logout: React.FC = () => {
    const { data: session, status } = useSession();
    const [open, setOpen] = useState(true);
    const onCancel = () => {
        setOpen(false);
    }

    const onLogout = () => {
        signOut({ callbackUrl: '/' })
    }
    return (
        <div>
            {
                session ?
                    <LogoutModal open={open} onCancel={onCancel} onLogout={onLogout} />
                    : <h1>You are not logged in</h1>
            }
        </div>
    );
}

export default Logout;