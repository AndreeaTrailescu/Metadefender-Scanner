# METADEFENDER SCANNER

This is a program developed to scan a file against the metadefender.opswat.com API.

## Prerequisites

Before you can compile and run this project, ensure that you have the following prerequisites installed on your system:

- Node.js
- TypeScript

Also, before starting the program you will need to set in .env file:

- API_KEY obtained after register an account to metadefender.opswat.com
- FILE_PATH of file that you want to scan

Note: If FILE_PATH is not set, the program will use by default /src/utils/ceva.txt . Also, if API_KEY is not set or the key is invalid then the program will not run and an error will be displayed.

## Installation

To install the necessary dependencies, follow these steps:

1. Clone this repository to your local machine.

```
git clone https://github.com/AndreeaTrailescu/Metadefender-Scanner.git
```

2. Navigate to the project's root directory.
3. Open a terminal and run the following command to install the dependencies:
```
npm install
```

## Compilation

To compile the TypeScript code into JavaScript, use the following command:
```
npm run build
```

## Start program

To start the API server, execute the following command:
```
npm start
```

Th