const Deck = require('../app/deck')

const deck = new Deck()

describe('Testing constructor for the Deck class', () => {
  it('should return an object for Deck', () => {
    expect(deck).toMatchObject(deck)
  })

  it('should return number of objects in the deck', () => {
    expect(Object.keys(deck).length).toEqual(3)
  })
})

describe('Distributing equal number of cards to each player - deal()', () => {

  const dealtHands = deck.deal()

  it('should return an Array for deck.deal()', () => {
    expect(dealtHands).toEqual(dealtHands)
  })

  it('should return a hands length of 2', () => {
    expect(dealtHands.length).toEqual(2)
  })

  it('should return a length of 26 for each hand', () => {
    expect(dealtHands[0].length).toEqual(26)
    expect(dealtHands[1].length).toEqual(26)
  })
})
