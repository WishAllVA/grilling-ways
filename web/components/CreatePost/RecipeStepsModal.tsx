import React from "react";
import { DialogContent, DialogContentText, DialogActions, TextField } from "@material-ui/core";
import RecipeStep from "../../types/RecipeStep";
import Button from "../Button/Button";
import Recipe from "../../types/Recipe";

interface RecipeStepsModalProps {
    recipe: Recipe;
    updateRecipe: (recipe: Recipe) => void;
    onBack: () => void;
    onCancel: () => void;
    onNext: () => void;
}

const StepsModal: React.FC<RecipeStepsModalProps> = ({ recipe, updateRecipe, onBack, onCancel, onNext }) => {
    const [steps, setSteps] = React.useState<RecipeStep[]>([{
        stepTitle: "",
        stepDescription: ""
    }]);
    const addStep = (addStepParams: RecipeStep) => {
        const { stepTitle, stepDescription } = addStepParams;
        updateRecipe({
            ...recipe,
            steps: [...recipe.steps, { stepTitle, stepDescription }]
        });
    };
    return (
        <>
            <DialogContent>
                <DialogContentText>
                    Add steps to create your recipe
                </DialogContentText>
                {
                    steps.map((step, index) => {
                        return (
                            <div className="flex" key={index}>
                                <div>
                                    <TextField
                                        margin="dense"
                                        label="Recipe Title"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={step.stepTitle}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            setSteps(steps.map((step, indexStep) => {
                                                if (index === indexStep) {
                                                    return {
                                                        ...step,
                                                        stepTitle: value
                                                    };
                                                }
                                                return step;
                                            }));
                                        }}
                                    />
                                </div>
                                <div className="">
                                    <TextField
                                        margin="dense"
                                        label="Description"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={step.stepDescription}
                                        onChange={(e) => {
                                            const { value } = e.target;
                                            setSteps(steps.map((step, indexStep) => {
                                                if (index === indexStep) {
                                                    return {
                                                        ...step,
                                                        stepDescription: value
                                                    };
                                                }
                                                return step;
                                            }));
                                        }}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                <Button title="Add Steps" onClick={() => {
                    setSteps([...steps, { stepTitle: "", stepDescription: "" }]);
                }} />
            </DialogContent>
            <DialogActions>
                <Button title={'Cancel'} onClick={onCancel} />
                <Button title={'Back'} onClick={onBack} />
                <Button title={'Next'} onClick={() => {
                    updateRecipe({
                        ...recipe,
                        steps
                    });
                    onNext();
                }} />
            </DialogActions>
        </>
    );
}

export default StepsModal;