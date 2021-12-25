import React from "react";
import { DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import Ingredient from "../../types/Ingredient";
import Button from "../Button/Button";

interface IngredientModalProps {
    addIngredient: (ingredient: Ingredient) => void;
    onBack: () => void;
    onCancel: () => void;
    onNext: () => void;
}

const IngredientsModal: React.FC<IngredientModalProps> = ({ addIngredient, onBack, onCancel, onNext }) => {
    return (
        <>
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
            <DialogActions>
                <Button title={'Back'} onClick={onBack} />
                <Button title={'Cancel'} onClick={onCancel} />
                <Button title={'Next'} onClick={onNext} />
            </DialogActions>
        </>
    );
}

export default IngredientsModal;