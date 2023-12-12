# IU-PORTFOLIO

# ExpertWall - Engineering Experts Connection Platform.

## Overview

ExpertWall is a dynamic platform connecting skilled engineers and users seeking expertise. This comprehensive README provides an in-depth understanding of the project's architecture, technologies used, and key features, this application is responsive and mobile first approach, means you can run the application on the phone, ipad, tablet and desktop without interuption.

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
   - [Frontend](#frontend)
   - [Backend](#backend)
3. [Key Features](#key-features)
   - [User Registration](#user-registration)
   - [Expert Registration](#expert-registration)
4. [Integration of Technologies](#integration-of-technologies)
   - [Stripe Payments](#stripe-payments)
   - [React Stack](#react-stack)
   - [Other Technologies](#other-technologies)
   - [Expert Availability](#expert-availability)
   - [User Review](#user-review)
5. [Documentation and Testing](#documentation-and-testing)
6. [Project Structure](#project-structure)
7. [How to Use](#how-to-use)
8. [Contributing](#contributing)
9. [Acknowledgements](#acknowledgements)

---

## Introduction

ExpertWall is a platform where engineering experts and users connect seamlessly. The application is designed to facilitate a smooth exchange of knowledge and assistance.

## MOBILE FIRST APROACH
![Laptop](frontend/src/assets/visualisation/mf.png)

## LAPTOP
![Laptop](frontend/src/assets/visualisation/iu2.png)

## IPAD
![iPad](/frontend/src/assets/visualisation/iu3.png)

## PHONE

![Phone](/frontend/src/assets/visualisation/iu4.png)

## Conceptual Design for Expert Wall Application**

![CLOUD ARCHITECTURE](/frontend/src/assets/visualisation/cloud.png)

![CLOUD ARCHITECTURE](/frontend/src/assets/visualisation/schema.png)

## Core Idea:

Expert Wall application is an innovative web application designed as a platform for junior software developers to connect with senior software developers effortlessly. Access to expert profiles is facilitated by reading expert profiles and choosing which domain of expertise you are looking for, this application ensures the authenticity and quality of interactions.

## Target Users: Junior software developer

- Who Are The Users?: The user audience includes students, professionals, hobbyists, and anyone seeking specialized knowledge and solutions in their software development daily debugging.
- Minimal Requirements: To use Expert Wall, users need:

- A device (phone, laptop, or tablet)
- Internet connectivity
- A valid email for registration
- A secure password  
  **Overall Architecture**
  **Key Components: **

- **User**: Represents end-users seeking expert advice.
- **Admin**: Manages user and expert accounts.
- **Login**: Allows users and admins to access their accounts.
- **Register**: Permits new users to create platform accounts.
- **Expert**: Represents experts across various domains in technology.  
  **Methodologies**
  **1. Agile Methodology: **Agile, chosen for its flexibility and user-centric focus, supports incremental development, aligning with user needs and expectations.

## Technologies

### Frontend

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Spinner](https://www.npmjs.com/package/react-spinners) - Loading spinners for React.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) - Declarative routing for React.js.
- [React Icon](https://react-icons.github.io/react-icons/) - A set of customizable SVG icons for React.
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React.
- [JSON Web Token](https://jwt.io/) - A compact URL-safe means of representing claims to be transferred between two parties.

### Backend

- [MongoDB](https://www.mongodb.com/) - A general-purpose, document-based database.
- [Express](https://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js.
- [Stripe](https://stripe.com/) - A payment processing platform.
- [dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module that loads environment variables from a .env file.
- [cosh](https://www.npmjs.com/package/cosh), [cookiepairs](https://www.npmjs.com/package/cookiepairs), [bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Security-related packages.

## How this technologies works?

# Frontend Technologies

## React

**What it is:** A JavaScript library for building user interfaces.  
**How it works:** React allows you to create reusable UI components that update efficiently in response to data changes. It uses a virtual DOM to optimize rendering performance.
## FIRST DISPLAYING (HELLO WORLD)
![Phone](/frontend/src/assets/visualisation/iu1.png)

# React + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Spinner

**What it is:** A library for adding loading spinners to React applications.  
**How it works:** React Spinner provides pre-built components for different loading animations, enhancing the user experience during data fetching or processing.

## React Router DOM

**What it is:** A library for declarative routing in React applications.  
**How it works:** React Router DOM enables navigation and rendering of components based on the URL. It helps create a Single Page Application (SPA) experience.

## React Icon

**What it is:** A library providing customizable SVG icons for React.  
**How it works:** React Icon simplifies the integration of icons into React components, allowing for a consistent and visually appealing UI.

## Framer Motion

**What it is:** A production-ready motion library for React.  
**How it works:** Framer Motion facilitates the creation of smooth animations and transitions in React components, enhancing the overall user interface.

## JSON Web Token (JWT)

**What it is:** A compact, URL-safe means of representing claims to be transferred between two parties.  
**How it works:** JWT is commonly used for authentication purposes. It allows the secure transfer of information between the frontend and backend, ensuring that users and experts are authenticated.

# Backend Technologies

## MongoDB

**What it is:** A general-purpose, document-based database.  
**How it works:** MongoDB stores data in a flexible, JSON-like format known as BSON. It is used to store user profiles, expert information, and other relevant data.

## Express

**What it is:** A fast, unopinionated, minimalist web framework for Node.js.  
**How it works:** Express simplifies the creation of robust APIs by providing a set of features for building web and mobile applications. It integrates seamlessly with MongoDB for data retrieval and manipulation.

## Stripe

**What it is:** A payment processing platform.  
**How it works:** Stripe handles secure payment transactions on the platform. Users can pay for expert services, and Stripe ensures the reliability and security of the payment process.

## dotenv

**What it is:** A zero-dependency module that loads environment variables from a .env file.  
**How it works:** dotenv allows the ExpatWall application to manage sensitive information, such as API keys or configuration settings, without hardcoding them directly into the source code.

## cosh, cookiepairs, bcrypt.js

**What they are:** Security-related packages.  
**How they work:** These packages contribute to the security of user authentication and data storage. bcrypt.js, for example, is commonly used for hashing and salting passwords.

# Integration of Technologies

## Stripe Payments

Stripe is integrated into the backend to handle payment transactions securely. It communicates with the frontend to initiate and finalize transactions, providing a seamless experience for users paying for expert services.

## React Stack

React, React Spinner, React Router DOM, and React Icon are combined to create a powerful and responsive frontend. Framer Motion enhances the user interface with smooth animations and transitions, providing an engaging user experience.

## Other Technologies

TileWinds CSS is used for styling, providing a structured and visually appealing layout for the application. Local Storage Mock is employed during development to simulate local storage behavior.

# Expert Availability

Experts can set their availability schedules, likely using MongoDB to store and retrieve this information. Users can view these schedules on the frontend, making informed decisions when seeking expert assistance.

# Documentation and Testing

## Rich Documentation

The project includes comprehensive documentation, ensuring that developers and contributors have clear instructions on setting up, running, and maintaining the application.

## Testing Suite

A robust testing suite is implemented to verify the reliability and correctness of the application. This likely involves unit tests, integration tests, and end-to-end tests.

![Expertwall](/frontend/src/assets/visualisation/iu5.png)

## Key Features

### User Registration

Users can create profiles with:

- Profile Picture
- Name
- Email
- Phone Number
- Question or Help Request Details

![Laptop](frontend/src/assets/visualisation/iu6.png)

![Laptop](frontend/src/assets/visualisation/iu14.png)

![Laptop](frontend/src/assets/visualisation/iu15.png)

![Laptop](frontend/src/assets/visualisation/iu16.png)

### Expert Registration

Experts provide detailed profiles with:

- Profile Picture
- Name
- Email
- Phone Number
- School Attended
- Work Experience
- Availability Schedule

Note: After expert registration, Admin must go approve expert in order to start a full registration and start accepting work from users.

## User Review

A user who is loged in can give a review, only after booking an expert.

![IMAGE](frontend/src/assets/visualisation/iu9.png)

## Integration of Technologies

### Stripe Payments

ExpertWall uses [Stripe](https://stripe.com/) to facilitate secure and seamless payment transactions. Users can pay for expert services with confidence.
## PAYMENT LAPTOP
![IMAGE](frontend/src/assets/visualisation/iu10.png)
## PAYMENT IPAD
![IMAGE](frontend/src/assets/visualisation/iu11.png)
## PAYMENT MOBILE
![IMAGE](frontend/src/assets/visualisation/iu12.png)

![IMAGE](frontend/src/assets/visualisation/iu13.png)

### React Stack

Utilizes React Spinner, Router, Icon, and Framer Motion for an enhanced frontend experience.

![IMAGE](frontend/src/assets/visualisation/iu17.png)

### Other Technologies

- [TileWinds CSS](https://www.npmjs.com/package/tailwindcss) for styling.
- [Local Storage Mock](https://www.npmjs.com/package/jest-localstorage-mock) for development.

![IMAGE](frontend/src/assets/visualisation/iu8.png)

### Expert Availability

Experts can set their availability schedules, allowing users to see when they are available for consultation.

![IMAGE](frontend/src/assets/visualisation/iu19.png)

![IMAGE](frontend/src/assets/visualisation/iu7.png)

## User Review

A user who is loged in can give a review, only after booking an expert.

## Documentation and Testing

Rich documentation, including a detailed README with visual aids, ensures clarity. A robust testing suite guarantees a reliable application.

To run this application locally, follow these steps:

1. Clone the repository in your preferred code editor, such as VSCode, or download the folder [Download this Folder](https://github.com/frankkode/experts-wall-app.git).

- set .env file in the root of the backend and add the appropriete keys as follows:

PORT=5005

MONGO_URI= your key here

JWT_SECRET_KEY= your key here

STRIPE_SECRET_KEY= your key here

CLIENT_SITE_URL=http://localhost:5173 ## Example: http://localhost:5173
## SET .ENV

![IMAGE](frontend/src/assets/visualisation/iu20.png)

2. Set up MongoDB:

   - Create an account on MongoDB and obtain a MongoDB URI.
   - Add the MongoDB URI to the `.env` file located in your backend folder. [Learn more about MongoDB URI](https://www.mongodb.com/atlas)[video](https://www.youtube.com/watch?v=xrc7dIO_tXk&list=PL4RCxklHWZ9vmzBP7lybE08CxbIU17PIf).

3. Set up Stripe:

   - Create a test account on Stripe and obtain a secret key.
   - Follow [this link](https://stripe.com/) for more details or by [Video] (https://www.youtube.com/watch?v=Tn5dZXr9ZIs) .

4. Generate a JWT secret key by running the following command in your terminal: `[node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"]`.

5. Ensure you have Node.js installed on your computer.

6. Add the client site URL to any free port. For example:
   ```
   CLIENT_SITE_URL=http://localhost:5173
   ```

These steps will help you set up and run the ExpertWALL application locally.

[![WATCH VIDEO](frontend/src/assets/visualisation/mov2.png)](https://photos.app.goo.gl/rgb6a2CBGuCnBsyx5)

## SAVING IMAGES
Images are saved to Cloudinary follow this link to learn how to set up a Cloudinary account and create a cloudinary_name (name of your project) and upload_preset (name of your folder)
- make sure the preset to be "unsigned"
(https://www.youtube.com/watch?v=7lhUsK-FxYI)

![IMAGE](frontend/src/assets/visualisation/cloudinary.png)

## Project Structure

The project follows a well-organized structure, ensuring maintainability and scalability.


[![WATCH VIDEO](frontend/src/assets/visualisation/vid.png)](https://photos.app.goo.gl/h7PWZaGztzpKbauG9)


## How to Use

Refer to the [documentation](#documentation-and-testing) for a step-by-step guide on setting up and using ExpertWall.

## RUN FRONTEND

1. After installing ExpertWALL locally go to your teminal and type "cd frontend" then run the frontend by typing " npm run dev".

## RUN BACKEND

2. open other terminal and type "CD backend" then run the backend by typing "npm run start-dev".

## TESTING

3.  To test this application, just go to frontend and run "npm test" from there Jest will test the application.

## TEST SUMMARY

![IMAGE](frontend/src/assets/visualisation/test.png)

## Contributing

We will welcome contributions in the future! Check the [Contributing Guidelines](CONTRIBUTING.md) for details in future.

## Acknowledgements

Special thanks to INTERNATIONAL UNIVERSITY OF APPLIED SCIENCE [IUBH GERMANY] (https://www.iu.org/lp/distance-learning-degrees/), [CODE WITH MOSH ONLINE COURSE.](https://codewithmosh.com/p/mastering-react)

![IMAGE](frontend/src/assets/visualisation/thank.png)
