PSEUDO: client-test api-test

client-test:
	mocha test/client/*_test.js

api-test:
	mocha test/api/*_test.js
