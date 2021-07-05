import Big from 'big.js';

const operate = (num1, num2, operation) => {
  const big1 = Big(num1);
  const big2 = Big(num2);
  switch (operation) {
    case '+':
      return big1.plus(big2).toString();
    case '-':
      return big1.minus(big2).toString();
    case 'X':
      return big1.times(big2).toString();
    case '÷':
      try {
        return big1.div(big2).toString();
      } catch {
        return 'Is not possible to divide by 0';
      }
    default:
      return '0';
  }
};

export default operate;
