module.exports = {
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:@next/next/recommended",
		"plugin:prettier/recommended",
	],
	env: {
		browser: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react"],
	root: true,
	rules: {
		"@typescript-eslint/ban-ts-comment": "off",
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/consistent-type-imports": ["error"],
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		semi: ["error", "always"],
	},
	settings: {
		react: "detect",
	},
};
