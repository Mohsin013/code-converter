# Code Conversion, Debugging, and Quality Check Application

## Introduction

The Code Conversion, Debugging, and Quality Check Application is a web-based project that leverages the capabilities of OpenAI's GPT to perform code conversion, code debugging, and code quality checks. It is designed to provide users with the ability to convert code from one programming language to another, debug code, and evaluate the quality of code using the power of AI.

## Deployed App

[Code Conversion, Debugging, and Quality Check Application - Deployed App](https://code-converter-mohsin013.netlify.app/)

## Design Decisions and Assumptions

- Assumed that users have prior knowledge of frontend technologies (React.js), backend development (Node.js), and API concepts.
- The application is designed with a responsive and user-friendly UI/UX to enhance user experience.
- Have chosen to integrate GPT using OpenAI's API to leverage its capabilities for code conversion, debugging, and quality checks.

## Installation & Getting Started

To install and run the Code Conversion, Debugging, and Quality Check Application, follow these steps:

 Clone this repository: `git clone https://github.com/Mohsin013/code-converter.git`
 
 For frontend:
1. Navigate to the project folder: `cd code-converter-app`
4. Install dependencies: `npm install`
5. Start the application: `npm start`
The application will be accessible at `http://localhost:3000/`.

For Backend:
1. Navigate to the project folder: `cd code-translator`
4. Install dependencies: `npm install`
5. Start the application: `npm run dev`
The application will be accessible at `http://localhost:5000/`.

## Usage

To use the Code Conversion, Debugging, and Quality Check Application:

1. Access the application at `http://localhost:3000/` or the deployed app link.
2. Choose the service you require: code conversion, debugging, or quality check.
3. Use the provided editor to input your code.
4. Request the service, and the application will display the results.

## API Endpoints

- **POST `/api/code-conversion`**: Submit code for conversion and Retrieve code conversion results.
- **POST `/api/debugging`**: Submit code for debugging and Retrieve debugging results.
- **POST `/api/quality-check`**: Submit code for quality checking and Retrieve code quality check results.

## Technology Stack

- Front-end: React.js
- Back-end: Node.js with Express.js
- GPT Integration: OpenAI's API
- User Interface Design: Responsive and user-friendly UI/UX design for optimal user experience.

## Some Snippets 

![UI.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d32b4a6-9f35-4996-873f-210a48b1783a/UI.png)
![DEBUG.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/687a8b82-cf63-42bc-b1d9-1ee12413bf09/DEBUG.png)
![Quality_check.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/35bfb6d5-78bf-4068-a101-085bc78fabed/Quality_check.png)
