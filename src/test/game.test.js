const Game = require('../app/game')

const game = new Game()
console.log = jest.fn()

describe('Testing constructor for Game', () => {
  it('should return an object for Deck', () => {
    expect(game.deck).toMatchObject(game.deck)
  })

  it('should return an object for Player 1', () => {
    expect(game.player1).toMatchObject(game.player1)
  })

  it('should return an object for Player 2', () => {
    expect(game.player2).toMatchObject(game.player2)
  })
})

describe('Deal cards when game is initialised - startGame()', () => {
  it('deals players hands when game is initialised', () => {
    expect(game.player1.hand.length).toEqual(26)
    expect(game.player2.hand.length).toEqual(26)
  })
})

describe('Running of game - gameRound()', () => {
  it('recognises cards of the same value and reinserts them', () => {
    let game1 = new Game()

    game1.player1.hand = [{value: 3, name: '3', suit: 'Diamonds'}, {value: 13, name: 'K', suit: 'Clubs'}]
    game1.player2.hand = [{value: 11, name: 'J', suit: 'Spades'}, {value: 13, name: 'K', suit: 'Hearts'}]
    game1.gameRound()

    expect(game1.player1.hand.length).toEqual(2)
    expect(game1.player2.hand.length).toEqual(2)
  })

  it('recognises cards of the same value and does not increment points', () => {
    let game1 = new Game()

    game1.player1.hand = [{value: 13, name: 'K', suit: 'Clubs'}]
    game1.player2.hand = [{value: 13, name: 'K', suit: 'Hearts'}]
    game1.gameRound()

    expect(game1.player1.points).toEqual(0)
    expect(game1.player2.points).toEqual(0)
  })

  it('recognises A as the biggest card', () => {
    let game2 = new Game()

    game2.player1.hand = [{value: 1, name: 'A', suit: 'Clubs'}]
    game2.player2.hand = [{value: 13, name: 'K', suit: 'Hearts'}]
    game2.gameRound()

    expect(game2.player1.points).toEqual(1)
    expect(game2.player2.points).toEqual(0)
  })

  it('correctly compares cards and returns the winner', () => {
    let game3 = new Game()

    game3.player1.hand = [{value: 3, name: '3', suit: 'Diamonds'}]
    game3.player2.hand = [{value: 11, name: 'J', suit: 'Spades'}]
    game3.gameRound()

    expect(game3.player1.points).toEqual(0)
    expect(game3.player2.points).toEqual(1)
  })
})