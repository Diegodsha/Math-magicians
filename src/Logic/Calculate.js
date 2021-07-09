import operate from './Operate';

const calculate = (calcDataObject, btnName) => {
  const { total, next, operation } = calcDataObject;

  const checkDot = (num, nextNum) => {
    if (num.includes('.') && !num.includes('e')) return `${num}${nextNum}`;
    const currentNum = Number(num).toPrecision();
    const output = currentNum + nextNum;
    return (output.length > 12)
      ? Number(output).toExponential(8)
      : output;
  };

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
      return next && operation
        ? {
          total: operate(total, next, operation),
          next: null,
          operation: btnName,
        }
        : {
          total,
          next: null,
          operation: btnName,
        };

    case '.':
      if (next) {
        return {
          total,
          next: next.includes('.') ? next : `${next}.`,
          operation,
        };
      }
      if (total) {
        return {
          total: total.includes('.') ? total : `${total}.`,
          next,
          operation,
        };
      }
      return {
        total: '0.',
        next,
        operation,
      };

    case '=':
      return operation && next
        ? {
          total: operate(total, next, operation),
          next: null,
          operation: null,
        }
        : {
          total,
          next: null,
          operation: null,
        };

    default:
      if (operation) {
        return {
          total,
          next: next ? checkDot(next, btnName) : btnName,
          operation,
        };
      }

      return {
        total: total ? checkDot(total, btnName) : btnName,
        next,
        operation,
      };
  }
};

export default calculate;
