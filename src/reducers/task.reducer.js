import * as constants from './../constants';

function taskReducer(state = [], action) {
    switch (action.type) {
        case constants.ADD_TASK:{
            return [
                ...state,
                {
                    id: action.id,
                    task: action.task,
                    completed: false,
                    note: ''
                }
            ]
        }
        case constants.COMPLETED_TASK:{
            return state.map(todo =>
                (todo.id === action.id)
                    ? {
                        ...todo,
                        completed: !todo.completed,
                      }
                    : todo
            )
        }
        case constants.ADD_NOTE:{
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, note: action.note}
                    : todo
            )
        }
        default: return state
    }
}
export default taskReducer;