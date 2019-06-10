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
    case ActionType.REMOVE_FROM_MY_LIST:
      return{
        ...state,
        videos:{
          ...state.videos,
          myList: state.videos.myList.filter(item=>{return item.id !== action.id})
        },
      };
    case ActionType.ADD_RECOMMENDATION:
      return{
        ...state,
        videos:{
          ...state.videos,
          myList: [...state.videos.myList, action.video],
          recommendations: state.videos.recommendations.filter(rec=>{return rec.id !==action.video.id})
        },
      };
    default:
      return state;
  }
};

export default videos;
