import React, {Component}from 'react';
import data from './data.js'
import './style.styl'
import {GridList, GridListTile, GridListTileBar, Icons, Button, IconButton, Typography, Chip, Paper} from '../'

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      myList: data.myList,
      recommendations: data.recommendations,
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

  removeFromMyList=(id)=>{
    this.setState({
      myList: this.state.myList.filter(item=>{return item.id !== id})
    })
  }

  addRecommendation=(video)=>{
    this.setState({
      myList: [...this.state.myList, video],
      recommendations: this.state.recommendations.filter(rec=>{return rec.id !==video.id})
    })
  }

  render(){
    const {myList, recommendations, opened} = this.state
    const titleList = myList.map(item=>{
      return (<Chip label={item.title} color="primary"/>)
    })
    const myListGrids = myList.map(video=>{
      return(
        <GridListTile key={video.id}
          onMouseOver={()=>{this.displayBtn(video.id)}}
          onMouseLeave={()=>{this.hideBtn()}}
        >
          <img src={video.img} alt={video.title} />
          <GridListTileBar
            title={video.title}
            className="list-tile"
            subtitle={
              opened === video.id &&
              <Button color="secondary" variant="contained" size="small"
               onClick={()=>{this.removeFromMyList(video.id)}}
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
          onMouseOver={()=>{this.displayBtn(video.id)}}
          onMouseLeave={()=>{this.hideBtn()}}
        >
          <img src={video.img} alt={video.title} />
          <GridListTileBar
            title={video.title}
            className="list-tile"
            subtitle={
              opened === video.id &&
              <Button color="primary" variant="contained" size="small"
               onClick={()=>{this.addRecommendation(video)}}
              >
                Add
              </Button>
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
        { recommendations.length !== 0 && <div className="recommendation-list">
          <h2>Recommendations</h2>
          <div>
            <GridList className="grid-list" cols={4}>
              {recommendGrids}
            </GridList>
          </div>
        </div> }
        { myList.length !== 0 &&
          <Paper className="paper">
            {titleList}
          </Paper> }
      </main>
    )
  }
}

export default Main;
