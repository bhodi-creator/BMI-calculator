const initialState={
    questions:[],
    loading:false,
    error:null,
}


const quizReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case 'FETCH_QUIZ_QUESTIONS_SUCCESS':
            return{
                ...state,
                questions:payload,
                loading:false,
                error:null
            }
            case 'FETCH_QUIZ_QUESTIONS_FAILURE':
            return{
                ...state,
                questions:[],
                loading:false,
                error:payload
            }
            
            
    
        default:
            return state
    }
}


export default quizReducer