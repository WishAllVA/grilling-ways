import React, { useState } from "react";
import Button from '../Button/Button';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Stepper, Step, StepLabel } from "@material-ui/core";
import TitleModal from './TitleModal';
import IngredientsModal from './IngredientsModal';
import RecipeStepsModal from './RecipeStepsModal';
import ReviewModal from './ReviewModal';

interface CreatePostModalProps {
    open: boolean;
    steps: { stepId: number, stepTitle?: string, stepDescription?: string }[];
    currentStep: number;
    onClose: () => void;
    onNext: () => void;
    onBack: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ open, steps, currentStep, onClose, onNext, onBack }) => {
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
                    currentStep === 1 ? <TitleModal /> : null
                }
                {
                    currentStep === 2 ? <IngredientsModal /> : null
                }
                {
                    currentStep === 3 ? <RecipeStepsModal /> : null
                }
                {
                    currentStep === 4 ? <ReviewModal /> : null
                }
                <DialogActions>
                    <Button title={currentStep === 1 ? 'Cancel' : 'Back'} onClick={onBack} />
                    <Button title={currentStep === steps.length ? 'Finish' : 'Next'} onClick={onNext} />
                </DialogActions>
            </Dialog>
        </div>
    );
}

const CreatePost: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [currentStep, setCurrentStep] = useState(1);
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
            />
        </div>
    )
};

export default CreatePost;