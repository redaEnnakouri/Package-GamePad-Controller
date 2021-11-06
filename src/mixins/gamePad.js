import controller from "./gamePadController.js"

const duration = 1

function traitment () {
  setInterval(() => {
    const gpl = navigator.getGamepads()
    if (gpl[0]) {
      // const isActive = document.querySelector( '.cls-active' )
      for (let i = 0; i < 15; i++) {
        const seanButton = document.getElementById(controller.button['B' +i] )
        if (gpl[0].buttons[i].touched) {
          seanButton.classList.add('cls-active')
        } else {
          seanButton.classList.remove('cls-active')
        }
      }
    }
  }, duration)
}
export default {
  mounted () {
    this.startPracticeMode()
    traitment()
  },
  methods: {
    startPracticeMode () {
      const gamepadStatus = document.querySelector( "#gamepadStatus" );
      this.gamepadConnected(gamepadStatus)
      this.gamepadDisconnected(gamepadStatus)
    },
    gamepadConnected (gamepad) {
      window.addEventListener('gamepadconnected', (event) => {
        console.log('A gamepad connected:')
        console.log(event.gamepad)
        gamepad.innerHTML = "A gamepad connected!"
        gamepad.style.background = "#009688"
        gamepad.style.opacity = "1"
      })
    },
    gamepadDisconnected (gamepad) {
      window.addEventListener('gamepaddisconnected', (event) => {
        console.log('A gamepad disconnected:')
        console.log(event.gamepad)
        gamepad.innerHTML = "A gamepad disconnected!"
        gamepad.style.background = "#bd2121"
      })
    }

  }
}
