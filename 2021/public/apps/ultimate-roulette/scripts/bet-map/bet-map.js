/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */

/**
 * Table data map.
 */

var betMapCurrentBets = {

  /**
   * Roles
   */

  colorsRole: {
    quota: 2,
    reds: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    blacks: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
  },

  quaterRole: {
    index1: [1, 2, 4, 5], index2: [2, 5, 3, 6],
    index3: [4, 5, 7, 8], index4: [5, 6, 8, 9],
    index5: [7, 8, 10, 11], index6: [8, 9, 11, 12],
    index7: [10, 11, 13, 14], index8: [11, 12, 14, 15],
    index9: [13, 14, 16, 17], index10: [14, 15, 17, 18],
    index11: [16, 17, 19, 20], index12: [17, 18, 20, 21],
    index13: [19, 20, 22, 23], index14: [20, 21, 23, 24],
    index15: [22, 23, 25, 26], index16: [23, 24, 26, 27],
    index17: [25, 26, 28, 29], index18: [26, 27, 29, 30],
    index19: [28, 29, 31, 32], index20: [29, 30, 32, 33],
    index21: [31, 32, 34, 35], index22: [32, 33 , 35, 36]
  },

  semiRole: {

    index1: [0, 1], index2: [0, 2], index3: [0, 3],

    index4: [1, 4], index5: [2, 5], index6: [3, 6], index7: [4, 7], index8: [5, 8], index9: [6, 9],
    index10: [7, 10], index11: [8, 11], index12: [9, 12], index13: [10, 13], index14: [11, 14], index15: [12, 15],
    index16: [13, 16], index17: [14, 17], index18: [15, 18], index19: [16, 19], index20: [17, 20], index21: [18, 21],
    index22: [19, 22], index23: [20, 23], index24: [21, 24], index25: [22, 25], index26: [23, 26], index27: [24, 27],
    index28: [25, 28], index29: [26, 29], index30: [27, 30], index31: [28, 31], index32: [29, 32], index33: [30, 33],
    index34: [31, 34], index35: [32, 35], index36: [33, 36],
    index37: [1, 2], index38: [2, 3], index39: [4, 5], index40: [5, 6],
    index41: [7, 8], index42: [8, 9], index43: [10, 11], index44: [11, 12],
    index45: [13, 14], index46: [14, 15], index47: [16, 17], index48: [17, 18],
    index49: [19, 20], index50: [20, 21], index51: [22, 23], index52: [23, 24],
    index53: [25, 26], index54: [26, 27], index55: [28, 29], index56: [29, 30],
    index57: [31, 32], index58: [32, 33], index59: [34, 35], index60: [35, 36],
  },

  streetRole : {
    index1: [1, 2, 3], index2: [4, 5, 6],
    index3: [7, 8, 9], index4: [10, 11, 12],
    index5: [13, 14, 15], index6: [16, 17, 18],
    index7: [19, 20, 21], index8: [22, 23, 24],
    index9: [25, 26, 27], index10: [28, 29, 30],
    index11: [31, 32, 33], index12: [34, 35, 36],
  },

  lineRole : {
    index1: [1, 2, 3, 4, 5, 6],
    index2: [4, 5, 6, 7, 8, 9],
    index3: [7, 8, 9, 10, 11, 12],
    index4: [10, 11, 12, 13, 14, 15],
    index5: [13, 14, 15, 16, 17, 18],
    index6: [16, 17, 18, 19, 20, 21],
    index7: [19, 20, 21, 22, 23, 24],
    index8: [22, 23, 24, 25, 26, 27],
    index9: [25, 26, 27, 28, 29, 30],
    index10: [28, 29, 30, 31, 32, 33],
    index11: [31, 32, 33, 34, 35, 36]
  },

  /**
   * Data fot 2 to 1 Column game
   */
  twoToOneRole: {
    column1: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    column2: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    column3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  },

  isEven: function(n) {
    return n % 2 == 0;
  },

  isOdd: function(n) {
    return Math.abs(n % 2) == 1;
  },

  twoToOne: {
    quota: 3,
    index1: 0, index2: 0, index3: 0,
  },

  game12: {
    quota: 3,
    index1: 0, index2: 0, index3: 0,
  },

  // Map
  numbers: {
    quota: 36
  },

  quater: {
    quota: 9
  },

  split: {
    quota: 18
  },

  street: {
    quota: 12
  },

  line: {
    quota: 6
  },

  color: {
    quota: 2,
    red: 0, black: 0
  },

  oddEven: {
    quota: 2,
    odd: 0, even: 0
  },

  lowHigh: {
    quota: 2,
    low: 0, high: 0
  },

  trio: {
    quota: 12,
    index1: 0, index2: 0
  },

  basket: {
    quota: 9,
    index1: 0
  },

  constructAll() {

    // Numbers
    for (var x = 0; x < 37; x++) {
      this.numbers["num" + x] = 0;
    }

    // Semi
    for (var x = 1; x < 61; x++) {
      this.split["index" + x] = 0;
    }

    // Quater
    for (var x = 1; x < 23; x++) {
      this.quater["index" + x] = 0;
    }

    // Street
    for (var x = 1; x < 13; x++) {
      this.street["index" + x] = 0;
    }

    // Line
    for (var x = 1; x < 12; x++) {
      this.line["index" + x] = 0;
    }

    return this;

  },

  getWinningValue: function(winNumber) {

    var root = this;
    var result = 0;

    // Single number
    // console.log( "Sum from numbers: " + root.numbers["num" + winNumber] + " quota -> " + root.numbers.quota);
    result += root.numbers["num" + winNumber] * root.numbers.quota;

    // Semi
    for (var property in app.gamePlay.currentBets.semiRole) {
      for (var x = 0;x < app.gamePlay.currentBets.semiRole[property].length;x++) {
        if (app.gamePlay.currentBets.semiRole[property][x] == winNumber) {
          // console.log( "Sum from split: " + root.split[property]  + " quota -> " + root.split.quota);
          result += root.split[property] * root.split.quota;
        }
      }
    }

    // Quater
    for (var property in app.gamePlay.currentBets.quaterRole) {
      for (var x = 0;x < app.gamePlay.currentBets.quaterRole[property].length;x++) {
        if (app.gamePlay.currentBets.quaterRole[property][x] == winNumber) {
          // console.log( "Sum from quater: " + root.quater[property] );
          result += root.quater[property] * root.quater.quota;
        }
      }
    }

    // Game12
    if (winNumber > 0 && winNumber < 13) {
      result += app.gamePlay.currentBets.game12.index1 * app.gamePlay.currentBets.game12.quota;
    } else if (winNumber > 12 && winNumber < 25) {
      result += app.gamePlay.currentBets.game12.index2 * app.gamePlay.currentBets.game12.quota;
    } else if (winNumber > 24 && winNumber < 37) {
      result += app.gamePlay.currentBets.game12.index3 * app.gamePlay.currentBets.game12.quota;
    }

    // Low-High
    if (winNumber > 0 && winNumber < 19) {
      result += app.gamePlay.currentBets.lowHigh.low * app.gamePlay.currentBets.lowHigh.quota;
    } else if (winNumber > 18 && winNumber < 37) {
      result += app.gamePlay.currentBets.lowHigh.low * app.gamePlay.currentBets.lowHigh.quota;
    }

    // Odd-Even
    if (winNumber !== 0 && this.isOdd(winNumber)) {
      result += app.gamePlay.currentBets.oddEven.odd * app.gamePlay.currentBets.oddEven.quota;
    } else if (winNumber !== 0 && !this.isOdd(winNumber)) {
      result += app.gamePlay.currentBets.oddEven.even * app.gamePlay.currentBets.oddEven.quota;
    }

    // Color
    if (winNumber !== 0 && this.colorsRole.reds.indexOf(winNumber) !== -1) {
      result += app.gamePlay.currentBets.color.red * app.gamePlay.currentBets.color.quota;
    } else if (winNumber !== 0 && this.colorsRole.blacks.indexOf(winNumber) !== -1) {
      result += app.gamePlay.currentBets.color.black * app.gamePlay.currentBets.color.quota;
    }

    // 2to1
    if (winNumber !== 0 && this.twoToOneRole.column1.indexOf(winNumber) !== -1) {
      result += app.gamePlay.currentBets.twoToOne.index1 * app.gamePlay.currentBets.twoToOne.quota;
    } else if (winNumber !== 0 && this.twoToOneRole.column2.indexOf(winNumber) !== -1) {
      result += app.gamePlay.currentBets.twoToOne.index2 * app.gamePlay.currentBets.twoToOne.quota;
    } else if (winNumber !== 0) {
      result += app.gamePlay.currentBets.twoToOne.index3 * app.gamePlay.currentBets.twoToOne.quota;
    }

    // Street Basket
    if (winNumber == 0 || winNumber == 1 || winNumber == 2) {
      result += app.gamePlay.currentBets.trio.index1 * app.gamePlay.currentBets.trio.quota;
    }

    if (winNumber == 0 || winNumber == 2 || winNumber == 3) {
      result += app.gamePlay.currentBets.trio.index2 * app.gamePlay.currentBets.trio.quota;
    }

    if (winNumber == 0 || winNumber == 1 || winNumber == 2 || winNumber == 3) {
      result += app.gamePlay.currentBets.basket.index1 * app.gamePlay.currentBets.basket.quota;
    }

    console.log( "Sum FINAL -> " + result);
    return result;

  }

};
