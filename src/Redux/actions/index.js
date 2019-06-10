import thunk from 'redux-thunk'

export const ActionType = {
  FETCH_VIDEOS: "FETCH_VIDEOS",
  POPULATE_VIDEOS: "POPULATE_VIDEOS",
};

export const fetchVideos = () => async dispatch {
  try{
    // A mock url endpoint with data provided as response
    const url= "http://www.mocky.io/v2/5cfc97623200006f00ccd3cc";
    const response = await fetch(url)
    const responseBody = await response.json();
    dispatch(populateVideos(responseBody));
  } catch (error){
    console.error(error);
  }
}

export const populateVideos = videos => {
  type: ActionType.POPULATE_VIDEOS,
  videos
}
