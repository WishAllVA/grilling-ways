import React from "react";
import { Dialog, DialogActions, Stepper, Step, StepLabel } from "@material-ui/core";
import TitleModal from './TitleModal';
import IngredientsModal from './IngredientsModal';
import RecipeStepsModal from './RecipeStepsModal';
import ReviewModal from './ReviewModal';
import Recipe from "../../types/Recipe";

interface CreatePostModalProps {
    open: boolean;
    steps: { stepId: number, stepTitle?: string, stepDescription?: string }[];
    currentStep: number;
    recipe: Recipe;
    updateRecipe: (recipe: Recipe) => void;
    onClose: () => void;
    onNext: () => void;
    onBack: () => void;
    onSubmit: (recipe: Recipe) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = (props: CreatePostModalProps) => {
    const { open, steps, currentStep, recipe, updateRecipe, onClose, onNext, onBack, onSubmit } = props;
    return (
        <div>
            <Dialog open={open} onClose={onClose} fullWidth >
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
                            updateRecipe={updateRecipe}
                        /> : null
                }
                {
                    currentStep === 2 ?
                        <IngredientsModal
                            onBack={onBack}
                            onNext={onNext}
                            onCancel={onClose}
                            recipe={recipe}
                            updateRecipe={updateRecipe}
                        /> : null
                }
                {
                    currentStep === 3 ?
                        <RecipeStepsModal
                            onBack={onBack}
                            onNext={onNext}
                            onCancel={onClose}
                            recipe={recipe}
                            updateRecipe={updateRecipe}
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