const Game = require("./bowling-game");

let game;
beforeEach(() => {
  game = new Game();
});

test("test we can handle a gutter game session", () => {
  rollMany(game, 20, 0);
  expect(game.score()).toEqual(0);
});

test("test a game with 20 rolls with a score of 1", () => {
  rollMany(game, 20, 1);
  expect(game.score()).toEqual(20);
});

test("should return score of 16 with first frame as a spare", () => {
  rollSpare(game);
  game.roll(3);
  rollMany(game, 17, 0);
  expect(game.score()).toEqual(16);
});

test("should return score of 14 with strike on first roll", () => {
  game.roll(10);
  game.roll(1);
  game.roll(1);
  rollMany(game, 16, 0);
  expect(game.score()).toEqual(14);
});
test('should return score of 12 with a strike on the last frame', () => {
  rollMany(game,18,0);
  game.roll(10);
  game.roll(1);
  game.roll(1);
  expect(game.score()).toEqual(12);
})

function rollSpare(game) {
  game.roll(5);
  game.roll(5);
}

function rollMany(game, n, pins) {
  for (let i = 0; i < n; i++) {
    game.roll(pins);
  }
}
