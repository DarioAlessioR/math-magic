import operate from '../components/logic/operate';

describe('testing operate function', () => {
  test('25 + 5 = 30', () => {
    expect(operate('25', '5', '+')).toBe('30');
  });

  test('25 - 5 = 20', () => {
    expect(operate('25', '5', '-')).toBe('20');
  });

  test('25 x 5 = 125', () => {
    expect(operate('25', '5', 'x')).toBe('125');
  });

  test('25 ÷ 5 = 5', () => {
    expect(operate('25', '5', '÷')).toBe('5');
  });
});
