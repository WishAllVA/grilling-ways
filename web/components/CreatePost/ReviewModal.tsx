import React from "react";
import { DialogContent, DialogActions, DialogContentText, Typography } from "@material-ui/core";
import Recipe from "../../types/Recipe";
import Button from "../Button/Button";

interface RecipeModalProps {
    recipe: Recipe;
    onSubmit: () => void;
    onBack: () => void;
    onCancel: () => void;
}

const ReviewModal: React.FC<RecipeModalProps> = ({ recipe, onSubmit, onBack, onCancel }) => {
    const { recipeTitle, recipeDescription, ingredients, steps } = recipe;
    return (
        <>
            <DialogContent>
                <Typography variant="h4">
                    Review your Recipe
                </Typography>
                <DialogContentText>
                    <Typography variant="h6">
                        Title: {recipeTitle}
                    </Typography>
                </DialogContentText>
                <DialogContentText>
                    <Typography variant="h6">
                        Description: {recipeDescription}
                    </Typography>
                </DialogContentText>
                <DialogContentText>
                    <Typography variant="h6">
                        Ingredients:
                    </Typography>
                    {
                        ingredients?.map((ingredient, index) => (
                            <Typography key={index} variant="body1">
                                {ingredient}
                            </Typography>
                        ))
                    }
                </DialogContentText>
                <DialogContentText>
                    <Typography variant="h6">
                        Steps:
                    </Typography>
                    {
                        steps?.map((step, index) => (
                            <Typography key={index} variant="body1">
                                {step}
                            </Typography>
                        ))
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button title={'Back'} onClick={onBack} />
                <Button title={'Cancel'} onClick={onCancel} />
                <Button title={'Finish'} onClick={onSubmit} />
            </DialogActions>
        </>
    );
}

export default ReviewModal;