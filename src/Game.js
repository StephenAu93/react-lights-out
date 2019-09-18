import React, { Component } from 'react'
import Board from "./Board"

class Game extends Component {


  render(){

    return(
        <Board nrows={2} ncols={2} chanceLightStartsOn={0.5}/>
    )
  }
}

export default Game