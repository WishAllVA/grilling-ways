import React from "react";
import { DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import Recipe from "../../types/Recipe";
import Button from "../Button/Button";

interface TitleModalProps {
    recipe: Recipe;
    updateRecipe: (recipe: Recipe) => void;
    onCancel: () => void;
    onNext: () => void;
}

const TitleModal: React.FC<TitleModalProps> = ({ recipe, updateRecipe, onCancel, onNext }) => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const addTitleandDescription = (title: string, description: string) => {
        updateRecipe({
            ...recipe,
            recipeTitle: title,
            recipeDescription: description
        });
    };

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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="name"
                    label="Description"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button title={'Cancel'} onClick={onCancel} />
                <Button title={'Next'} onClick={() => {
                    addTitleandDescription(title, description);
                    onNext();
                }} />
            </DialogActions>
        </>
    );
}

export default TitleModal;