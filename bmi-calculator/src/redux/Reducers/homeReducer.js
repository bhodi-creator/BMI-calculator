import { UPDATE_FORM_INPUT } from "../actionTypes"

const initialState={
    userName:"",
    selectedCategory:'',
    selectedDifficulty:"",
    numberofQuestions:""
}


const homeReducer=(state=initialState,action)=>{
    switch (action.type){
        case UPDATE_FORM_INPUT:
            return {
                ...state,
                [action.payload.fieldName]:action.payload.value
            }
            default: return state
    }
}

export default homeReducer