import React from "react";
import { DialogContent, DialogContentText, TextField } from "@material-ui/core";

const TitleModal: React.FC = () => {
    return (
        <DialogContent>
            <DialogContentText>
                To create a recipe, first please give it a meaningful title. (e.g. Pizza)
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

export default TitleModal;