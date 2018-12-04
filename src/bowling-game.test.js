const Game = require("./bowling-game");
test("test we can handle a gutter game session", () => {
  const game = new Game();
  rollMany(game,20,0)
  expect(game.score()).toEqual(0);
});

test("test a game with 20 rolls with a score of 1", () => {
  const game = new Game()
  rollMany(game,20,1)
  expect(game.score()).toEqual(20)
})

function rollMany(game,n,pins) {
  for (let i = 0; i<n; i++) {
    game.roll(pins)
  }
}