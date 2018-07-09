/*
 * https://github.com/eliamartani/AddressBarVisibilityChange
 */
class AddressBarVisibilityChange {
  constructor (callbackFunction) {
    this.previousHeight = window.innerHeight
    this.callbackFunction = callbackFunction
    this.resizeEventHandler = this.resizeEvent.bind(this)

    window.addEventListener('resize', this.resizeEventHandler, false)
  }

  destroy () {
    // remove event listener
    window.removeEventListener('resize', this.resizeEventHandler, false)
  }

  resizeEvent () {
    // detect height change by comparing with previous height
    if (this.previousHeight !== window.innerHeight) {
      const isFunction = func => func && Object.prototype.toString.call(func).toLowerCase().indexOf('function') > -1

      // check if it's undefined and is a function
      if (isFunction(this.callbackFunction)) this.callbackFunction()

      // set current height before losing it
      this.previousHeight = window.innerHeight
    }
  }
}
