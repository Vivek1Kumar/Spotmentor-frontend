import { CLASS_NAME } from '../actions/types'
import ClaasJson from '../classroom_data.json'

//========== Directly assign file to state ===============
export default function(state = ClaasJson, action) {
    switch(action.type) {
        case CLASS_NAME: 
            return  {   
                ...state,             
                markAverage: state
            }
        default: return state
    }
}