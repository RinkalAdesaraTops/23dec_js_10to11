import { del, ins, upd } from "./UserAction"

const initialState = {
    data:[],
    count:0
}
const UserReducer = (state=initialState,action) => {
    switch(action.type){
        case ins:return {
            ...state,
            data:[
                ...state.data,
                action.payload
            ]
        }
        case del:return {
            ...state,
            data:state.data.filter((i,index)=>{
                    return index != action.payload
            })
        }
        case upd:return {
            ...state,
            data:state.data.map((i,index)=>{
                    if(index == action.payload.id){
                        i = action.payload.data
                        //i.name = action.payload.data.name
                    }
                    return i
            })
        }
        default: return state
    }
}

export default UserReducer
