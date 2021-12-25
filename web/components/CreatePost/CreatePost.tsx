import React, { useState } from "react";
import Button from '../Button/Button';
import Ingredient from "../../types/Ingredient";
import RecipeStep from "../../types/RecipeStep";
import Recipe from "../../types/Recipe";
import CreatePostModal from "./CreatePostModal";

const CreatePost: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [recipe, setRecipe] = useState<Recipe>({
        recipeTitle: '',
        recipeDescription: '',
        ingredients: [],
        steps: []
    });
    const steps = [{
        stepId: 1,
        stepTitle: 'Title and Description'
    }, {
        stepId: 2,
        stepTitle: 'Ingredients'
    },
    {
        stepId: 3,
        stepTitle: 'Steps'
    },
    {
        stepId: 4,
        stepTitle: 'Review and Publish'
    }];
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleNext = () => {
        if (currentStep === steps.length) {
            setOpen(false);
            setCurrentStep(1);
        } else {
            setCurrentStep(currentStep + 1);
        }
    };
    const handleBack = () => {
        if (currentStep === 1) {
            setCurrentStep(1);
            setOpen(false);
        } else {
            setCurrentStep(currentStep - 1);
        }
    };
    const handleClose = () => {
        setCurrentStep(1);
        setRecipe({
            recipeTitle: '',
            recipeDescription: '',
            ingredients: [],
            steps: []
        });
        setOpen(false);
    };

    const addTitleandDescription = (title: string, description: string) => {
        setRecipe({
            ...recipe,
            recipeTitle: title,
            recipeDescription: description
        });
    };

    const addIngredient = (addIngredientParams: Ingredient) => {
        const { ingredientName, ingredientQuantity, ingredientUnit } = addIngredientParams;
        setRecipe({
            ...recipe,
            ingredients: [...recipe.ingredients, { ingredientName, ingredientQuantity, ingredientUnit }]
        });
    };

    const addStep = (addStepParams: RecipeStep) => {
        const { stepTitle, stepDescription } = addStepParams;
        setRecipe({
            ...recipe,
            steps: [...recipe.steps, { stepTitle, stepDescription }]
        });
    };

    return (
        <div>
            <Button title='Create Post' onClick={handleClickOpen} />
            <CreatePostModal
                steps={steps}
                currentStep={currentStep}
                open={open}
                onClose={handleClose}
                onNext={handleNext}
                onBack={handleBack}
                addTitleandDescription={addTitleandDescription}
                addIngredient={addIngredient}
                addStep={addStep}
                onSubmit={() => {
                    console.log(recipe);
                }}
                recipe={recipe}
            />
        </div>
    )
};

export default CreatePost;