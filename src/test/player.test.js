const Player = require('../app/player')

const player = new Player(1)

describe('Testing constructor for the Player class', () => {
  it('should return an object for player', () => {
    expect(player).toMatchObject({ id: 1, hand: [], points: 0 })
  })

  it('should return a player id of 1', () => {
    expect(player.id).toEqual(1)
  })

  it('should return 0 cards on hand', () => {
    expect(player.hand.length).toEqual(0)
  })

  it('should return an initial point of 0', () => {
    expect(player.points).toEqual(0)
  })
})

const player1 = new Player(1)

describe('Add cards to hand - addCards()', () => {

  player1.addCards({value: 1, name: 'A', suit: 'Hearts'})
  player1.addCards({value: 2, name: '2', suit: 'Hearts'})
  player1.addCards({value: 4, name: '4', suit: 'Hearts'})
  player1.addCards({value: 11, name: 'J', suit: 'Hearts'})

  it('should return a hand length of 4', () => {
    expect(player1.hand.length).toEqual(4)
  })
})

const player2 = new Player(1)

describe('Play top card on hand - playTopCard()', () => {

  player1.addCards({value: 4, name: '4', suit: 'Hearts'})
  player1.addCards({value: 11, name: 'J', suit: 'Hearts'})
  const top1Card = player1.playTopCard()
  const top2Card = player1.playTopCard()

  it('should return a card name of 4', () => {
    expect(top1Card.name).toEqual('J')
  })

  it('should return a card name of A', () => {
    expect(top2Card.name).toEqual('4')
  })

  it('should return a card suit of Hearts', () => {
    expect(top1Card.suit).toEqual('Hearts')
  })
})

const player3 = new Player(1)

describe('Reinsert card randomly to hand - reinsertCard()', () => {

  player3.reinsertCard({value: 11, name: 'J', suit: 'Hearts'})

  it('should return a hand length of 3', () => {
    expect(player3.hand.length).toEqual(1)
  })
})

describe('Add points to total - addPoints()', () => {

  player1.addPoints(4)

  it('should return a total points of 4', () => {
    expect(player1.points).toEqual(4)
  })
})
