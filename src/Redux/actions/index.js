import thunk from 'redux-thunk'

export const ActionType = {
  FETCH_VIDEOS: "FETCH_VIDEOS",
  POPULATE_VIDEOS: "POPULATE_VIDEOS",
  DISPLAY_BTN: "DISPLAY_BTN",
  HIDE_BTN: "HIDE_BTN",
  REMOVE_FROM_MY_LIST: "REMOVE_FROM_MY_LIST",
  ADD_RECOMMENDATION: "ADD_RECOMMENDATION",
};

export const fetchVideos= ()=>{
  return function (dispatch,getState){
    try{
      // A mock url endpoint with data provided as response
      const url= "http://www.mocky.io/v2/5cfdea7b320000520045eced";
      fetch(url)
      .then(response=>{
        return response.json()
      }).then(responseBody=>{
        dispatch(populateVideos(responseBody));
      })
    } catch (error){
      console.error(error);
    }
  };
};

export const populateVideos = (videos) => {
  return {
    type: ActionType.POPULATE_VIDEOS,
    videos
  }
};
