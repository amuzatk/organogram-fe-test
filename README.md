
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## QuestionTime Frontend Application

This project is a frontend application built using Next.js to interact with QuestionTime (QT) APIs for managing questions. It allows users to set up and manage multiple-choice questions with options. Users can view existing questions, create new questions, add or remove options to questions, and edit or delete existing questions.

## Table of Contents
- Getting Started
- Features
- API Integration
- Usage
- Screenshots
- Terminologies Used
- Contribution

## Getting Started

To get started with the project, follow these steps:

- Clone the repository:

https://github.com/amuzatk/organogram-fe-test.git

- Install dependencies:

cd questiontime-frontend
yarn install

- Install dependencies:

Run the development server:

- Open http://localhost:3000 to view the app in your browser.

## Features

The frontend application provides the following features:

- Display existing questions and their options
- Create new questions with options
- Add or remove options to existing questions
- Edit existing questions
- Delete existing questions

## API Integration

The application interacts with the QuestionTime API hosted at https://qt.organogram.app/. The API uses Token authentication, where a personal token is required in the header for making requests.

OpenAPI documentation for the API is available at https://qt.organogram.app/openapi.yaml, which provides detailed information about the endpoints and request payloads.

## Usage

Upon running the application locally, users can perform the following actions:

- View existing questions and options
- Create a new question by providing the question and multiple options
- Add or remove options to existing questions
- Edit the question text
- Delete existing questions
- First, run the development server:

Ensure to have a valid token for authentication before interacting with the API.

## Video Clip

[https://drive.google.com/file/d/124tXLz4g8m3poh930hRogyZzaBw7Im-Y/view?usp=drive_link]

## Technologies Used

- Next.js
- Redux (for state management)
- Styled-Components (for styling)
- TypeScript
- React-Bootstrap / Reactstrap (for UI components)
- Vercel (for deployment)
- Git / GitHub (for version control)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

Thank you.
