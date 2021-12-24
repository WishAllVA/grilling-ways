import React from "react";
import { DialogContent, DialogContentText, TextField } from "@material-ui/core";

const ReviewModal: React.FC = () => {
    return (
        <DialogContent>
            <DialogContentText>
                Review your Recipe
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

export default ReviewModal;