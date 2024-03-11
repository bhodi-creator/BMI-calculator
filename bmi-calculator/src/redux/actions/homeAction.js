import { UPDATE_FORM_INPUT } from "../actionTypes"

export const updateFormInput=(fieldName,value)=>({
    type:UPDATE_FORM_INPUT,
    payload:{fieldName,value},
})