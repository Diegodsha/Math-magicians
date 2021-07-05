import operate from './Operate';

const calculate = (calcDataObject, btnName) => {
  const { total, next, operation } = calcDataObject;

  switch (btnName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      if (total) {
        return {
          total: `${total * -1}`,
          next,
          operation: null,
        };
      }
      return {
        total,
        next: `${next * -1}`,
        operation: null,
      };
    case '%':
      if (total) {
        return {
          total: `${total / 100}`,
          next,
          operation: null,
        };
      }
      return {
        total,
        next: `${next / 100}`,
        operation: 'X',
      };

    case '+':
    case '-':
    case 'X':
    case '÷':
      if (total && next) {
        return {
          total: operate(total, next, operation),
          next,
          operation: btnName,
        };
      }
      return {
        total,
        next: null,
        operation: null,
      };

    case '.':
      if (total) {
        return {
          total: `${total}.`,
          next,
          operation,
        };
      }
      if (next) {
        return {
          total,
          next: `${next}.`,
          operation,
        };
      }
      return {
        total: '0.',
        next,
        operation,
      };

    case '=':
      return {
        total: operate(total, next, operation),
        next: null,
        operation: null,
      };
    default:
      return {
        total,
        next,
        operation,
      };
  }
};

export default calculate;
