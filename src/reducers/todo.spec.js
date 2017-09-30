import reducer from './todo';

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'});
        expect(result).toBeDefined();
    })

    test('adds a todo', () => {
        const startState = {
            todos: [
                {id: 1, name: 'Render Static UI', isComplete: true},
                {id: 2, name: 'Create Initial State', isComplete: false},
                {id: 3, name: 'Render Based on State', isComplete: true}
            ]
        }

        const expectedState = {
            todos: [
                {id: 1, name: 'Render Static UI', isComplete: true},
                {id: 2, name: 'Create Initial State', isComplete: false},
                {id: 3, name: 'Render Based on State', isComplete: true},
                {id: 4, name: 'Added todo', isComplete: false}
            ]
        }

        const result = reducer(startState, {type:'TODO_ADD', payload: {id: 4, name: 'Added todo', isComplete: false}})

        expect(result).toEqual(expectedState)
    })

})