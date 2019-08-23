import React from 'react'
import Player from '../../components/player'
import Map from '../../components/map'


function World(props) {
  return (
    <div
      style={{
        width: '800px',
        height: '400px',
        backgroundColor: 'green',
        border: '4px solid white',
        margin: '10px auto',
        position: 'relative'
      }}
    >
      <Map />
      <Player />
    </div>
  )
}

export default World
