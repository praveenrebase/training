const ADD_STUDENT = "ADD_STUDENT"
const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS"
const ADD_STUDENT_FAILED = "ADD_STUDENT_FAILED"

export const addStudent = () => {
    return {
        type: ADD_STUDENT,
    }
}

export const addStudentSuccess = response => {
    return {
        type: ADD_STUDENT_SUCCESS,
        payload: response
    }
}

export const addStudentFailed = error => {
    return {
        type: ADD_STUDENT_FAILED,
        payload: error
    }
}