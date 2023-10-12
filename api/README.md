
# Coffee API Unit Testing Guide

## API Overview

The Coffee API is designed to provide information about various coffee drinks. It offers endpoints to retrieve a list of all available coffee drinks and fetch details about a specific coffee drink by its unique ID. This unit testing guide will help you ensure the API's functionality and correctness by running unit tests.

## Prerequisites

Before running the unit tests, ensure that you have the following software installed on your machine:

- Node.js (version 18.16.1 or higher)
- npm (version 9.7.1 or higher)

## Installation

1. Begin by cloning the project repository or downloading the project source code to your local machine.

2. Open your terminal or command prompt and navigate to the project directory where you have the project source code.

## Setup

Once you are in the project directory, you need to install the project dependencies. Run the following command to do so:

```bash
npm install
```

This command will fetch and install all the necessary dependencies required for running the unit tests.

## Running the Unit Tests

Now that you have installed the dependencies, you can run the unit tests using the following command:

```bash
npm test
```

Executing this command will trigger the test runner to execute all the unit tests present in the project. You will receive immediate feedback in the terminal, showing the number of tests that passed and any tests that failed, along with their respective error messages.

## Test Coverage

To gain insight into the code coverage achieved by the unit tests, you can generate a code coverage report. Use the following command:

```bash
npm run test:coverage
```

This command will not only run the tests but also produce a detailed coverage report. The report will highlight which parts of the code were exercised by the tests and which may require additional testing.

The coverage report will be saved in the `coverage` directory within the project.

## Troubleshooting

In case you encounter any issues while running the unit tests, here are some troubleshooting steps:

- Ensure that you followed the installation and setup steps correctly.

- Verify that you have all the required software and dependencies installed as specified in the prerequisites section.

If you encounter persistent problems or have questions, don't hesitate to reach out to the project maintainer for assistance.

Happy unit testing!