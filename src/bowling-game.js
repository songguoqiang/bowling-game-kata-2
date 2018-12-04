class Game {
  constructor() {
    this.scoreArray = [];
  }

  roll(pin) {
    this.scoreArray.push(pin)
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frame = 1; frame <= 10; frame++) {
      score += this.scoreArray[rollIndex] + this.scoreArray[rollIndex + 1];
      rollIndex += 2;
    }
    return score;
  }
}

module.exports = Game;
