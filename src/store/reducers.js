const initialState = {
    titleComponent: {
        title: ''
    },
    ingredientsComponent: {
        ingredients: []
    },
    stepsComponent: {
        steps: []
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TITLE':
            const newTitle = {title: action.title};
            return {
                    ...state,
                    titleComponent: {
                        ...state.ingredientsComponent.title,
                        ...newTitle
                    }
                }
        case 'ADD_INGREDIENT':
            return {
                ...state,
                ingredientsComponent:{
                    ingredients: [
                        ...state.ingredientsComponent.ingredients,
                        action.ingredient
                    ]
                }
            }
        case 'ADD_STEP':
            return {
                ...state,
                stepsComponent: {
                    steps: [
                        ...state.stepsComponent.steps,
                        action.step
                    ]
                }
            }
        default:
            break;
    }
    return state;
}

export default reducer;