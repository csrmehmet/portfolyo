import { SET_PROJECTS } from '../actions/actions';
import { mockData } from '../../data/MockData';

const initialState = mockData.projects;

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.payload;
    default:
      return state;
  }
};

export default projectReducer;