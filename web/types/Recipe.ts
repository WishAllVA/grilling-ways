import Ingredient from './Ingredient';
import RecipeStep from './RecipeStep';

interface Recipe {
    recipeTitle: string;
    recipeDescription: string;
    ingredients: Ingredient[];
    steps: RecipeStep[];
}

export default Recipe;