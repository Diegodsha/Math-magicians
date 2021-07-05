import Big from 'big.js';

const operate = (num1, num2, operation) => {
  const big1 = Big(num1);
  const big2 = Big(num2);
  const checkFormat = (number) => {
    if (number.length > 12) {
      return Number(number).toExponential(8);
    }
    return number;
  };
  switch (operation) {
    case '+':
      return checkFormat(big1.plus(big2).toString());
    case '-':
      return checkFormat(big1.minus(big2).toString());
    case 'X':
      return checkFormat(big1.times(big2).toString());
    case '÷':
      try {
        return checkFormat(big1.div(big2).toString());
      } catch {
        return 'Is not possible to divide by 0';
      }
    default:
      return '0';
  }
};

export default operate;
