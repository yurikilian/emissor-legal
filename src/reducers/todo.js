const initState = {
    todos: [
        { id: 1, name: 'Render Static UI', isComplete: true },
        { id: 2, name: 'Create Initial State', isComplete: false },
        { id: 3, name: 'Render Based on State', isComplete: true },
    ],
    currentTodo: ''
}

const TODO_ADD = 'TODO_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

export const updateCurrent = (val) => ({type: CURRENT_UPDATE, payload:val});

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return { ...state, todos: state.todos.concat(action.payload) }
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        default:
            return state;
    }
}