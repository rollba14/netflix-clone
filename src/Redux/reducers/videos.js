import {ActionType} from '../actions'

const videos = (state={}, action)=>{
  switch(action.type){
    case ActionType.POPULATE_VIDEOS:
      return action.videos
    default:
      return state;
  }
};

export default videos;
