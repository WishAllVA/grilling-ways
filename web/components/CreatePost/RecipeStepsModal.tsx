import React from "react";
import { DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import RecipeStep from "../../types/RecipeStep";
import Button from "../Button/Button";

interface RecipeStepsModalProps {
    onBack: () => void;
    onCancel: () => void;
    onNext: () => void;
    addRecipeStep: (addStep: RecipeStep) => void;
}

const StepsModal: React.FC<RecipeStepsModalProps> = ({ addRecipeStep, onBack, onCancel, onNext }) => {
    return (
        <>
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
            <DialogActions>
                <Button title={'Back'} onClick={onBack} />
                <Button title={'Cancel'} onClick={onCancel} />
                <Button title={'Next'} onClick={onNext} />
            </DialogActions>
        </>
    );
}

export default StepsModal;