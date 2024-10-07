
import { mockData } from "../../data/MockData";
const initialState = mockData.personalInfo || { name: '' };

const userReducer = (state=initialState,action) =>{
    switch(action.type){
        default:
            return state;
    }
} 


export default userReducer;