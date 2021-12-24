import React from "react";
import { DialogContent, DialogContentText, TextField } from "@material-ui/core";

const StepsModal: React.FC = () => {
    return (
        <DialogContent>
            <DialogContentText>
                Add steps to create your recipe
            </DialogContentText>
            <TextField
                margin="dense"
                id="name"
                label="Recipe Title"
                type="email"
                fullWidth
                variant="standard"
            />
            <TextField
                margin="dense"
                id="name"
                label="Description"
                type="email"
                fullWidth
                variant="standard"
            />
        </DialogContent>
    );
}

export default StepsModal;