import React, {Component}from 'react';
import './style.styl'
import {GridList, GridListTile, GridListTileBar, Icons, Button, IconButton, Typography, Chip, Paper, Actions, CircularProgress} from '../'
import {connect } from 'react-redux';

class Main extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let content;
    if(Object.keys(this.props.videos).length !== 0){
      const {myList, recommendations} = this.props.videos
      const titleList = myList.map(item=>{
        return (<Chip label={item.title} color="primary"/>)
      })
      const myListGrids = myList.map(video=>{
        return(
          <GridListTile key={video.id}
            onMouseOver={()=>{this.props.displayBtn(video.id)}}
            onMouseLeave={()=>{this.props.hideBtn(video.id)}}
          >
            <img src={video.img} alt={video.title} />
            <GridListTileBar
              title={video.title}
              className="list-tile"
              subtitle={
                <Button className={
                  this.props.opened==video.id? "": "hidden"}
                 color="secondary" variant="contained" size="small"
                 onClick={()=>{this.props.removeFromMyList(video.id)}}
                >
                  Remove
                </Button>
              }
            >
            </GridListTileBar>
          </GridListTile>
        )
      })

      const recommendGrids = recommendations.map(video=>{
        return(
          <GridListTile key={video.id}
            onMouseOver={()=>{this.props.displayBtn(video.id)}}
            onMouseLeave={()=>{this.props.hideBtn(video.id)}}
          >
            <img src={video.img} alt={video.title} />
            <GridListTileBar
              title={video.title}
              className="list-tile"
              subtitle={
                <Button className={
                  this.props.opened==video.id? "": "hidden"}
                 color="primary" variant="contained" size="small"
                 onClick={()=>{this.props.addRecommendation(video)}}
                >
                  Add
                </Button>
              }
            >
            </GridListTileBar>
          </GridListTile>
        )
      });
      content = (
        <div>
        <div className="main-list">
          <h2>My List</h2>
          { myList.length > 0 ?
            <div>
              <GridList className="grid-list" cols={4}>
                {myListGrids}
              </GridList>
            </div> :
            <div>
              You haven't added any titles to your list yet.
            </div>
          }
        </div>
        { recommendations.length !==0 ?
          <div className="recommendation-list">
            <h2>Recommendations</h2>
            <div>
              <GridList className="grid-list" cols={4}>
                {recommendGrids}
              </GridList>
            </div>
          </div>: null }
        { myList.length !== 0 ?
          <Paper className="paper">
            {titleList}
          </Paper> : null}
        </div>
      )
    } else{
      content = (
        <div className="spinner">
          <CircularProgress
            color="primary"
            size={100}
            thickness={3.6}
          />
        </div>
      )
    }
    return (
      <main className="App-main">
        {content}
      </main>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    videos:state.videos.videos,
    opened:state.videos.opened
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    displayBtn: (id)=>{
      dispatch(Actions.displayBtn(id))
    },
    hideBtn: (id)=>{
      dispatch(Actions.hideBtn(id))
    },
    removeFromMyList: (id)=>{
      dispatch(Actions.removeFromMyList(id))
    },
    addRecommendation: (video)=>{
      dispatch(Actions.addRecommendation(video))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
