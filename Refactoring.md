# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
To improve the readability of the code, I decided to break the given function into 2 seperate functionalities: deterministicPartitionKey, which is exporeted by dpk class and a private function getEventCandidate that returns the candidate and accepts event as an input. This allows me to do my next refactor, which involves getting rid of the multiple if...else blocks in the main function.

For the unit test, I've created 4 tests that check for the various ways a partitionKey will be generated as described in the tests.

1. Returns event?.partitionKey when given valid event

2. Returns event?.partitionKey when given valid event with partitionKey

3. Returns new partitionKey when given valid event with partition key over MAX_PARTITION_KEY_LENGTH

4. Returns new partitionKey generated from create hash of eventObject when given valid event with partition key as json object