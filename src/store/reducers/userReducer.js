
import { mockData } from "../../data/MockData";
const initialState = mockData.personalInfo;

const userReducer = (state=initialState,action) =>{
    switch(action.type){
        default:
            return state;
    }
} 


export default userReducer;