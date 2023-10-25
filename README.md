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
2. Install dependencies: `npm install`
3. Start the application: `npm start`
The application will be accessible at `http://localhost:3000/`.

For Backend:
1. Navigate to the project folder: `cd code-translator`
2.  Create a `.env` file in the root of the project and add your OpenAI API key as follows: OPENAI_API_KEY : `your-api-key`
3. Install dependencies: `npm install`
4. Start the application: `npm run dev`
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
<img width="947" alt="UI (1)" src="https://github.com/Mohsin013/code-converter/assets/97525190/8b553ee8-8a20-40bc-b283-7b584ca1a7b0">
<img width="938" alt="DEBUG (1)" src="https://github.com/Mohsin013/code-converter/assets/97525190/fb5d8925-cc6c-49a3-bba8-21cbc0b933fd">
<img width="943" alt="Quality_check (1)" src="https://github.com/Mohsin013/code-converter/assets/97525190/f3860d7c-2add-4242-bf8c-c5e881e74a01">

