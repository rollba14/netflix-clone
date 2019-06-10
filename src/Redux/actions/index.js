import thunk from 'redux-thunk'

export const ActionType = {
  FETCH_VIDEOS: "FETCH_VIDEOS",
  POPULATE_VIDEOS: "POPULATE_VIDEOS",
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
