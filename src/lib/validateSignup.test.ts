import { describe, test, expect } from 'vitest';
import { validateSignup, type SignupValues } from './validateSignup';

describe('validateSignup', () => {
  const valid: SignupValues = { 
    fullName: 'Aliya Nurlanovna', 
    email: 'aliya@example.com', 
    tickets: '2' 
  };
  const seatsLeft = 10;

  // nothing changes expected no errors
  test('returns no errors for valid input', () => {
    const errors = validateSignup(valid, seatsLeft);
    expect(errors).toEqual({});
  });

  // change tickets to 0 expected: tickets: Choose 1 to 4 tickets
  test('validates minimum 1 ticket', () => {
    const errors = validateSignup({ ...valid, tickets: '0' }, seatsLeft);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  // change tickets to 5 expected: tickets: Choose 1 to 4 tickets
  test('validates maximum 4 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '5' }, seatsLeft);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  // change tickets to 1.5 expected: tickets: Choose 1 to 4 tickets
  test('validates whole numbers only', () => {
    const errors = validateSignup({ ...valid, tickets: '1.5' }, seatsLeft);
    expect(errors.tickets).toBe('Choose 1 to 4 tickets');
  });

  // change tickets to 4 expected no errors
  test('allows exactly 4 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '4' }, seatsLeft);
    expect(errors).toEqual({});
  });

  // change tickets to 3 while only 2 seats available. expected: only 2 seats left
  test('validates against remaining seats', () => {
    const errors = validateSignup({ ...valid, tickets: '3' }, 2);
    expect(errors.tickets).toBe('Only 2 seats left');
  });
});