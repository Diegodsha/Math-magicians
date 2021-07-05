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
      //   console.log(btnName);
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
      console.log(btnName);
      console.log('next:', next);
      if (operation) {
        console.log('next:', next);
        return {
          total,
          next: next || btnName,
          operation,
        };
      }

      return {
        total: total || btnName,
        next,
        operation,
      };
  }
};

export default calculate;
