import React from "react";
import { DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import Recipe from "../../types/Recipe";
import Button from "../Button/Button";

interface TitleModalProps {
    recipe: Recipe;
    addTitleandDescription: (title: string, description: string) => void;
    onCancel: () => void;
    onNext: () => void;
}

const TitleModal: React.FC<TitleModalProps> = ({ recipe, addTitleandDescription, onCancel, onNext }) => {
    return (
        <>
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
            <DialogActions>
                <Button title={'Cancel'} onClick={onCancel} />
                <Button title={'Next'} onClick={onNext} />
            </DialogActions>
        </>
    );
}

export default TitleModal;