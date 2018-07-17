export function addTitle(title){
    return {
        type: 'ADD_TITLE',
        title
    }
}

export function addIngredient(ingredient){
    return {
        type: 'ADD_INGREDIENT',
        ingredient
    }
}

export function addStep(step) {
    return {
        type: 'ADD_STEP',
        step
    }
}