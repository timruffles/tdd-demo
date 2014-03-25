# Tellit

[![Build Status](https://travis-ci.org/timruffles/tdd-demo.svg?branch=master)](https://travis-ci.org/timruffles/tdd-demo)

Tellit is a demo TDD app. It's a tiny reddit clone - just allowing you to submit stories and upvote them.

The code is split into client and server, as are the tests. The frontend tests are run via karma, the backend via mocha. Use the `bin/run-tests` executable to run tests - it passes through any options provided to mocha or karma.
