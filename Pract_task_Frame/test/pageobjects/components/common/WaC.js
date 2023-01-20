const wAC = async (el, timeout) => {
    await el.waitForDisplayed({timeout})
    await el.click()
 }
 
 module.exports = {wAC}