const Card = require('../app/card')

const card = new Card(1, 'A', 'Hearts')

describe('Testing constructor for the Card class', () => {
  it('should return an object for card', () => {
    expect(card).toMatchObject({ value: 1, name: 'A', suit: 'Hearts' })
  })

  it('should return a card value of 1', () => {
    expect(card.value).toEqual(1)
  })

  it('should return a card name of A', () => {
    expect(card.name).toEqual('A')
  })

  it('should return a card suit of Hearts', () => {
    expect(card.suit).toEqual('Hearts')
  })
})
