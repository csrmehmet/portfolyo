
import { mockData } from "../../data/MockData";

const initialState = {
  ...mockData.personalInfo,
  socialLinks: mockData.socialLinks,
  skills:mockData.skills,
  aboutMe: mockData.aboutMe

};

const userReducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default userReducer;