import React, {Component}from 'react';
import data from './data.js'
import './style.styl'
import {GridList, GridListTile, GridListTileBar, Icons, IconButton} from '../'

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      videos: data,
      opened: null,
    }
  }

  displayBtn=(id)=>{
    this.setState({
      opened: id
    })
  }

  hideBtn=()=>{
    this.setState({
      opened: null
    })
  }

  render(){
    const {videos, opened} = this.state
    const myListGrids = videos.myList.map(video=>{
      return(
        <GridListTile key={video.id}>
          <img src={video.img} alt={video.title} />
          <GridListTileBar
            onMouseEnter={()=>{this.displayBtn(video.id)}}
            onMouseLeave={()=>{this.hideBtn()}}
            title={video.title}
            subtitle={
              opened === video.id && <IconButton aria-label={`${video.title}`}>
                <Icons.StarBorder/>
              </IconButton>
            }
          >
          </GridListTileBar>
        </GridListTile>
      )
    })

    const recommendGrids = videos.recommendations.map(video=>{
      return(
        <GridListTile key={video.id}>
          <img src={video.img} alt={video.title} />
          <GridListTileBar
            onMouseEnter={()=>{this.displayBtn(video.id)}}
            onMouseLeave={()=>{this.hideBtn()}}
            title={video.title}
            subtitle={
              opened === video.id && <IconButton aria-label={`${video.title}`}>
                <Icons.StarBorder/>
              </IconButton>
            }
          >
          </GridListTileBar>
        </GridListTile>
      )
    });
    return (
      <main className="App-main">
        <div className="main-list">
          <h2>My List</h2>
          <div>
            <GridList className="grid-list" cols={4}>
              {myListGrids}
            </GridList>
          </div>
        </div>
        <div className="recommendation-list">
          <h2>Recommendations</h2>
          <div>
            <GridList className="grid-list" cols={4}>
              {recommendGrids}
            </GridList>
          </div>
        </div>
      </main>
    )
  }
}

export default Main;
