class Game {
  constructor() {
    this.scoreArray = [];
  }

  roll(pin) {
    this.scoreArray.push(pin);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 1; frame <= 10; frame++) {
      const firstThrow = this.scoreArray[rollIndex];
      const secondThrow = this.scoreArray[rollIndex + 1];
      const firstThrowOfNextFrame = this.scoreArray[rollIndex + 2];

      if (this.isSpareFrame(firstThrow, secondThrow)) {
        totalScore += this.spareFrameScore(firstThrow, secondThrow, firstThrowOfNextFrame);
      } else {
        totalScore += firstThrow + secondThrow;
      }

      rollIndex += 2;
    }
    return totalScore;
  }
  isSpareFrame(firstThrow, secondThrow) {
    return firstThrow + secondThrow === 10;
  }
  spareFrameScore(firstThrow, secondThrow, firstThrowOfNextFrame) {
    return firstThrow + secondThrow + firstThrowOfNextFrame;
  }
}

module.exports = Game;
