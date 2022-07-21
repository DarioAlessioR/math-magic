import calculate from '../components/logic/calculate';

describe('test for calculate.js', () => {
  test('tests the AC button', () => {
    expect(calculate({ total: '999', next: null, operation: null }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });

  test('tests the = button', () => {
    expect(calculate({ total: '100', next: '2', operation: 'x' }, '=')).toStrictEqual({ total: '200', next: null, operation: null });
  });

  test('tests "."', () => {
    expect(calculate({ total: '7', next: null, operation: null }, '.')).toStrictEqual({ total: '7', next: '7.', operation: null });
  });

  test('tests the +/- button', () => {
    expect(calculate({ total: '58', next: null, operation: null }, '+/-')).toStrictEqual({ total: '-58', next: null, operation: null });
  });

  test('tests the - button', () => {
    expect(calculate({ total: '85', next: '10', operation: '-' }, '=')).toStrictEqual({ total: '75', next: null, operation: null });
  });
});
