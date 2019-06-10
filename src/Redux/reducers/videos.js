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
    /*
      Ideally the below actions should also send a post request to the server and update the myList property in the database model, but since the end point is a mockup, there's no control over that but only to update the client side view.
    */
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
