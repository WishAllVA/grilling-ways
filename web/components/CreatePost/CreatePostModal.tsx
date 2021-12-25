import React from "react";
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

export default CreatePostModal;