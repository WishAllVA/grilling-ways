import React from "react";
import { DialogContent, DialogContentText, TextField } from "@material-ui/core";

const IngredientsModal: React.FC = () => {
    return (
        <DialogContent>
            <DialogContentText>
                Add Ingredients to your recipe
            </DialogContentText>
            <TextField
                autoFocus
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

export default IngredientsModal;