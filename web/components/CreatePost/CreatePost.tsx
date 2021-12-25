import React, { useState } from "react";
import Button from '../Button/Button';
import { Dialog, DialogActions, Stepper, Step, StepLabel } from "@material-ui/core";
import TitleModal from './TitleModal';
import IngredientsModal from './IngredientsModal';
import RecipeStepsModal from './RecipeStepsModal';
import ReviewModal from './ReviewModal';
import Ingredient from "../../types/Ingredient";
import RecipeStep from "../../types/RecipeStep";
import Recipe from "../../types/Recipe";

interface CreatePostModalProps {
    open: boolean;
    steps: { stepId: number, stepTitle?: string, stepDescription?: string }[];
    currentStep: number;
    recipe: Recipe;
    onClose: () => void;
    onNext: () => void;
    onBack: () => void;
    addTitleandDescription: (title: string, description: string) => void;
    addIngredient: (ingredients: Ingredient) => void;
    addStep: (steps: RecipeStep) => void;
    onSubmit: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = (props: CreatePostModalProps) => {
    const { open, steps, currentStep, recipe, onClose, onNext, onBack, onSubmit, addTitleandDescription, addIngredient, addStep } = props;
    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <Stepper activeStep={currentStep - 1} alternativeLabel>
                    {steps.map((step) => (
                        <Step key={step.stepId}>
                            <StepLabel>{step.stepTitle}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {/* <DialogTitle>Step {currentStep} of {steps.length}{currentStep && steps[currentStep - 1].stepTitle ? `: ${steps[currentStep - 1].stepTitle}` : ''}</DialogTitle> */}
                {
                    currentStep === 1 ?
                        <TitleModal
                            onCancel={onClose}
                            onNext={onNext}
                            recipe={recipe}
                            addTitleandDescription={addTitleandDescription}
                        /> : null
                }
                {
                    currentStep === 2 ?
                        <IngredientsModal
                            onBack={onBack}
                            onNext={onNext}
                            onCancel={onClose}
                            addIngredient={addIngredient}
                        /> : null
                }
                {
                    currentStep === 3 ? <RecipeStepsModal
                        onBack={onBack}
                        onNext={onNext}
                        onCancel={onClose}
                        addRecipeStep={addStep}
                    /> : null
                }
                {
                    currentStep === 4 ?
                        <ReviewModal
                            onBack={onBack}
                            onSubmit={onSubmit}
                            onCancel={onClose}
                            recipe={recipe}
                        /> : null
                }
            </Dialog>
        </div>
    );
}

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