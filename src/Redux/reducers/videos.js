import {ActionType} from '../actions'

const initState = {
  videos: {},
  opened: false
}

const videos = (state=initState, action)=>{
  switch(action.type){
    case ActionType.POPULATE_VIDEOS:
    return {
        ...state,
        videos: action.videos,
      }
    case ActionType.DISPLAY_BTN:
      return {
        ...state,
        opened: action.id
      };
    case ActionType.HIDE_BTN:
      return {
        ...state,
        opened: false
      };
    default:
      return state;
  }
};

export default videos;
