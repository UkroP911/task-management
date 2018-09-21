import * as constants from './../constants';

const rootAction = {
    AddTask,
    CompletedTask,
    AddNote,
}
let nextTask = 0
export function AddTask(task,time) {
    return {
        type: constants.ADD_TASK,
        task,
        time,
        id: nextTask++
    }
}

export function CompletedTask(id) {
    return {
        type: constants.COMPLETED_TASK,
        id,
    }
}

export function AddNote(note,id) {
    return {
        type: constants.ADD_NOTE,
        note,
        id
    }
}

export function DeleteNote(noteId) {
    return {
        type: constants.ADD_NOTE,
        noteId
    }
}

export default rootAction