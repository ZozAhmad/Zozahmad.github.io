
const colorsandids = [['block1', 'blue'],['block2', 'lime'],['block3', 'yellow'],['block4', 'red']]
const clickedids = []
const flashedids = []
let timeoutId

const onBlockClick = (blockId) => {
  const element = document.getElementById(blockId)
  clickedids.push(blockId)
  if (clickedids.length === 1 || clickedids[clickedids.length-1] === flashedids[flashedids.length-1]) {
    colorflash(colorsandids[Math.floor(Math.random() * colorsandids.length)]);
  } else {
    gameOver();
    clearTimeout(timeoutId);
  }
}

const colorflash = (randomcolorandid) => {
  clearTimeout(timeoutId)
  colorsandids.map((item) => {
    const element = document.getElementById(item[0])
    element.style.backgroundColor = item[1]
  })
  const element = document.getElementById(randomcolorandid[0])
  element.style.backgroundColor = 'white'
  timeoutId = setTimeout(() => gameOver(), getDelay())
  flashedids.push(randomcolorandid[0])
}

const getDelay = () => {
  const numClicks = clickedids.length
  let delay = 5000
  delay = delay * 0.9**numClicks
  console.log(delay)
  if (delay < 500) {
    return 500
  }
  return delay
}

const gameOver = () => {
  colorsandids.map((item) => {
    const element = document.getElementById(item[0])
    element.style.backgroundColor = 'white'
  })
  window.alert("Game Over! You got a score of "+(clickedids.length-1))
  window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
