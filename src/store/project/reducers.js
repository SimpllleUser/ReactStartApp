import { CREATE_PROJECT, GET_PROJECTS, DELETE_PROJECT, EDIT_PROJECT } from "./types";


const initialState = {
    projects: []
}

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            console.log('CREATE_PROJECT', state, action.project)
            return {
                ...state,
                projects: state.projects.concat([action.project])
            }
        case GET_PROJECTS:
            console.log('GET_PROJECT', state, action.projects)
            return {
                ...state,
                projects: state.projects = action.projects
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(e => e.id !== project.id)
            };
        case EDIT_PROJECT:
            let project = action.project
            return {
                ...state,
                projects: state.projects.map(e => e.id === project.id ? project : e)
            };
        default:
            return state
    }
}