import store from '../../config/store'
import { SPRITE_SIZE } from '../../contants'

export default function handleMovement(player) {

  const getNewPosition = (direction) => {
    const oldPos = store.getState().player.position

    switch(direction) {
      case 'left':
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
      case 'right':
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
      case 'up':
          return [oldPos[0], oldPos[1] - SPRITE_SIZE]
      case 'down':
          return [oldPos[0], oldPos[1] + SPRITE_SIZE]
      default:
        return oldPos
    }

  }

  const dispatchMove = (direction) => {
    console.log('moves')
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: getNewPosition(direction)
      }
    })
  }

  const handleKeyDown = (e) => {
    switch(e.keyCode) {
      case 37:
        dispatchMove('left')
        break;
      case 38:
        dispatchMove('up')
        break;
      case 39:
        dispatchMove('right')
        break;
      case 40:
        dispatchMove('down')
        break;
      default:
        return
        // console.log(e.keyCode)
    }
  }


  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })

  return player
}
