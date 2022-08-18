
describe('Can Visit A You Tube site and do cursory checks', () => {
  before(() =>{
    cy.visit('https://youtube.com/watch?v=iKe6dElg_F4')
  })
  //YouTube hides how they present videos with random guids there was no way for me to tell easily which video was playing 
  //if it was the intended video or an add.   The button that pops up to skip an add is fundamentally "slow to wait for"
  //If I actually worked for YouTube I would know the secret sauce as to what is an add video and not to trigger off of. 
  it('Ensures that an add is not present')
  it('Ensures you can see the video player', () => {
   cy.get('.video-stream').should('have.attr', 'src').should('include', "blob:https://www.youtube.com/")
  })
  it('Ensures you can see the play button', () => {
    cy.get('.ytp-play-button')
  })
  it('Ensures you can see the skip button', () => {
    cy.get('.ytp-next-button')
  })
  it('Ensures you can see the volume control', () => {
    cy.get('.ytp-volume-area')
  })
  it('Ensures you can see the duration of the video', () => {
    cy.get('.ytp-time-display').contains('2:24')
  })
  it('Ensures you can see the auto play setting', () => {
    cy.get('.ytp-autonav-toggle-button')
  })
  it('Ensures you can see the Closed Captioning setting', () => {
    cy.get('.ytp-subtitles-button')
  })
  it('Ensures you can see the Playback settings', () => {
    cy.get('.ytp-settings-button')
  })
  it('Ensures you can see the miniplayer button', () => {
    cy.get('.ytp-miniplayer-button')
  })
  it('Ensures you can see the size button', () => {
    cy.get('.ytp-size-button')
  })  
  it('Ensures you can see the remote button', () => {
    cy.get('.ytp-remote-button')
  })
  it('Ensures you can see the fullscreen button', () => {
    cy.get('.ytp-fullscreen-button')
  })
})