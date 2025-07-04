type Rule = (password: string) => boolean;

export const Rules = {
	passwordLength: (password: string) => password.length >= 8,
	atLeastOneUppercase: (password: string) => /[A-Z]/.test(password),
}

export const ValidatePassword = (password: string, rules: Rule[]) => {
	return rules.every(rule => rule(password));
}