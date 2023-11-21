# Surplus - Retirement Income Prediction and Help Portal Dashboard

This project is a React and Flask-based application that uses Firebase for user authentication. The dashboard is designed to predict retirement income and provide help to users. The project was developed for TIAA's T3 Hack Retirement Industry Hackathon.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Firebase Integration](#firebase-integration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, you need to have Node.js and npm installed on your machine. If you don't have them installed, you can download them from [here](https://nodejs.org/en/download/).

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using the command `npm install`.

## Usage

To run the application locally:

1. Start the Flask server by navigating to the backend directory and running the command `python app.py`.
2. In a separate terminal window, navigate to the frontend directory and start the React application using the command `npm start`.

The API is deployed [https://tiaa-surplus-api.onrender.com](https://tiaa-surplus-api.onrender.com)

## Project Structure

The project is structured into two main directories: `backend` and `frontend`.

- The `python_api` directory contains the Flask application, including the API for user authentication and data prediction.
- The `dashboard` directory contains the React application, which interacts with the Flask API to display user data and predictions.
