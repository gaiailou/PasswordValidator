import { describe, test, expect} from 'vitest';
import { ValidatePassword, Rules } from '../PasswordValidationService';

describe('Unit:ValidatePassword', () => {
  test('a password should be at least 8 characters long', () => {
    //assert
    const rules = [Rules.passwordLength];
    const wrongPassword = '1234567';
    const correctPassword = '12345678';

    //act
    const wrongResult = ValidatePassword(wrongPassword, rules);
    const correctResult = ValidatePassword(correctPassword, rules);
    
    //assert
    expect(wrongResult).toBe(false);
    expect(correctResult).toBe(true);
  });

  test('a password should contain at least one uppercase letter', () => {
    //assert
    const rules = [Rules.atLeastOneUppercase];
    const wrongPassword = '12345678';
    const correctPassword = '12345678A';

    //act
    const wrongResult = ValidatePassword(wrongPassword, rules);
    const correctResult = ValidatePassword(correctPassword, rules);
    
    //assert
    expect(wrongResult).toBe(false);
    expect(correctResult).toBe(true);
  });
});
