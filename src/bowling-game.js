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
      if (this.isStrikeFrame(firstThrow)) {
        const secondThrow = this.scoreArray[rollIndex + 1];
        const thirdThrow = this.scoreArray[rollIndex + 2];
        totalScore += this.strikeFrameScore(firstThrow, secondThrow, thirdThrow);
        rollIndex += 1;
      } else {
        const secondThrow = this.scoreArray[rollIndex + 1];
        const firstThrowOfNextFrame = this.scoreArray[rollIndex + 2];
        if (this.isSpareFrame(firstThrow, secondThrow)) {
          totalScore += this.spareFrameScore(
            firstThrow,
            secondThrow,
            firstThrowOfNextFrame
          );
        } else {
          totalScore += firstThrow + secondThrow;
        }

        rollIndex += 2;
      }
    }
    return totalScore;
  }
  isSpareFrame(firstThrow, secondThrow) {
    return firstThrow + secondThrow === 10;
  }
  spareFrameScore(firstThrow, secondThrow, firstThrowOfNextFrame) {
    return firstThrow + secondThrow + firstThrowOfNextFrame;
  }
  strikeFrameScore(firstThrow, secondThrow, thirdThrow) {
    return firstThrow + secondThrow + thirdThrow
  }
  isStrikeFrame (firstThrow){
    return firstThrow === 10
  }

}

module.exports = Game;
