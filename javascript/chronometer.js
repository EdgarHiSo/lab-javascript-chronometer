class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0

  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
   let minutes = Math.floor(this.currentTime / 60)
   return minutes
  }
  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime)
    if (seconds > 60) {
     seconds = Math.floor(this.currentTime / 60) * 60
    }
    return seconds
  }
  twoDigitsNumber(digits) {
    // ... your code goes here
    if (digits < 10) {
      return `0${digits}`
    } else {
      return digits
    }
  }
  stopClick() {
    // ... your code goes here
    let stop = clearInterval(this.intervalId)
    return stop
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
    return this.currentTime
    
  }
  splitClick() {
    // ... your code goes here
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}
