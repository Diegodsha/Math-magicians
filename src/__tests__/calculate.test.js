import calculate from '../Logic/Calculate';

describe('Calculate', () => {
  const calcDataObjectNew = {
    total: '2',
    next: '2',
    operation: '+',
  };
  const calcDataObjectSubstract = {
    total: '5',
    next: '2',
    operation: '-',
  };
  const data = {
    total: 10,
    next: 10,
    operation: 'X',
  };
  it('Clears the calculator info', () => {
    const result = calculate(calcDataObjectNew, 'AC');
    expect(result).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('Can perform sum operations', () => {
    const result = calculate(calcDataObjectNew, '+');
    expect(result).toMatchObject({
      total: '4',
      next: null,
      operation: '+',
    });
  });
  it('Can perform substract operations', () => {
    const result = calculate(calcDataObjectSubstract, '-');
    expect(result).toMatchObject({
      total: '3',
      next: null,
      operation: '-',
    });
  });
  it('Can perform multiplication operations', () => {
    const result = calculate(data, '=');
    expect(result).toMatchObject({
      total: '100',
      next: null,
      operation: null,
    });
  });
  it('Can perform division operations', () => {
    data.total = 10;
    data.next = 5;
    data.operation = '÷';
    const result = calculate(data, '=');
    expect(result).toMatchObject({
      total: '2',
      next: null,
      operation: null,
    });
  });
  it('Can alternate between positive and negative', () => {
    data.total = 10;
    data.next = null;
    data.operation = null;
    const result = calculate(data, '+/-');
    expect(result).toMatchObject({
      total: '-10',
      next: null,
      operation: null,
    });
  });
  it('Can turn into percentage', () => {
    data.total = 5;
    data.next = null;
    data.operation = null;
    const result = calculate(data, '%');
    expect(result).toMatchObject({
      total: '0.05',
      next: null,
      operation: null,
    });
  });
  it('Can turn big numbers into exponential', () => {
    data.total = 666666666666;
    data.next = 666666666666;
    data.operation = '+';
    const result = calculate(data, '=');
    expect(result).toMatchObject({
      total: '1.33333333e+12',
      next: null,
      operation: null,
    });
  });
});
