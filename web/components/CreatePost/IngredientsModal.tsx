import React from "react";
import { DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import Ingredient from "../../types/Ingredient";
import Button from "../Button/Button";
import Recipe from "../../types/Recipe";

interface IngredientModalProps {
    recipe: Recipe;
    updateRecipe: (recipe: Recipe) => void;
    onBack: () => void;
    onCancel: () => void;
    onNext: () => void;
}

const IngredientsModal: React.FC<IngredientModalProps> = ({ recipe, updateRecipe, onBack, onCancel, onNext }) => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([{
        ingredientName: "",
        ingredientQuantity: "",
        ingredientUnit: ""
    }]);
    const addIngredient = (addIngredientParams: Ingredient) => {
        const { ingredientName, ingredientQuantity, ingredientUnit } = addIngredientParams;
        updateRecipe({
            ...recipe,
            ingredients: [...recipe.ingredients, { ingredientName, ingredientQuantity, ingredientUnit }]
        });
    };
    return (
        <>
            <DialogContent>
                <DialogContentText>
                    Add Ingredients to your recipe
                </DialogContentText>
                {
                    ingredients.map((ingredient, index) => {
                        return (
                            <div className="flex" key={index}>
                                <div className="flex-initial w-7/12 mr-2">
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="Ingredient Name"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={ingredient.ingredientName}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            setIngredients(ingredients.map((ingredient, index) => {
                                                if (index === index) {
                                                    return {
                                                        ...ingredient,
                                                        ingredientName: value
                                                    };
                                                }
                                                return ingredient;
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="flex-inital w-3/12 mr-2">
                                    <TextField
                                        margin="dense"
                                        label="Quantity"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={ingredient.ingredientQuantity}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            setIngredients(ingredients.map((ingredient, index) => {
                                                if (index === index) {
                                                    return { ...ingredient, ingredientQuantity: value };
                                                }
                                                return ingredient;
                                            }));
                                        }
                                        }
                                    />
                                </div>
                                <div className="flex-initial w-3/12">
                                    <TextField
                                        margin="dense"
                                        label="Unit"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={ingredient.ingredientUnit}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            setIngredients(ingredients.map((ingredient, index) => {
                                                if (index === index) {
                                                    return { ...ingredient, ingredientUnit: value };
                                                }
                                                return ingredient;
                                            }));
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                <Button title="Add Ingredient" onClick={() => {
                    setIngredients([...ingredients, {
                        ingredientName: "",
                        ingredientQuantity: "",
                        ingredientUnit: ""
                    }])
                }} />
            </DialogContent>
            <DialogActions>
                <Button title={'Cancel'} onClick={onCancel} />
                <Button title={'Back'} onClick={onBack} />
                <Button title={'Next'} onClick={() => {
                    updateRecipe({
                        ...recipe,
                        ingredients
                    });
                    onNext();
                }} />
            </DialogActions>
        </>
    );
}

export default IngredientsModal;