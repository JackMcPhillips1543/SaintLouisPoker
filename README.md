# Saint Louis Poker Website Template

## Overview
This project is a template for a Poker website that I created for my friends and me. The live version of this template can be found here. It is a CRUD (Create, Read, Update, Delete) React app hosted on Google Firebase, with Google Firestore serving as the backend. The web app consists of 4 separate pages that are interconnected using `react-router-dom`.

## Features
**CRUD Functionality:** Create, read, update, and delete poker players and data easily.

**Responsive Design:** The template is designed to be fully responsive, ensuring a great user experience across different devices.

**Customizable:** Easily customize the CSS and modify the players' data in PlayerData.js to match your own preferences and friends. You can also easily alter what is being tracked in your firestore database

## Requirements

If you want to replicate this project with your friends you will need to have the following downloaded or an account:

  - React [download React here](https://legacy.reactjs.org/docs/getting-started.html)
  - Node JS [download Node JS here](https://nodejs.org/en/download)
  - Google Firebase [create an account here](https://firebase.google.com/)
  - Google Firestore Database: Once you have a Firebase account, set up a Firestore Database through the Firebase console.

## Getting Started

To set up the project locally on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/JackMcPhillips1543/SaintLouisPoker`
2. Install dependencies: `npm install`
3. Configure Firebase: Replace the Firebase config in src/firebase.js with your own Firebase project credentials.
4. Replace the environment variables: Go through the code and replace the database name with your own.
5. Personalize the website: Customize the CSS to your liking and update the player information in `PlayerData.js` to match your friends.
6. Run the app locally: `npm start`

Your local version of the project should now be up and running! Feel free to explore, make changes, and adapt the template to suit your specific needs.

## Inspiration and Credit

A special thank you to the people and sites that helped me make this project:

Player Profiles: [Bootdey.com](https://www.bootdey.com/snippets/view/People-directory#css)

Sidebar: [Braincodex](https://github.com/briancodex/react-sidebar-router-v6.4)

Firebase: [machadop](https://github.com/machadop1407/firebase-react-crud)

Please make sure to check out their work and give credit if you use their resources.

## Contact and Feedback
If you have any questions, feedback, or suggestions for improvement, I would love to hear from you! Don't hesitate to reach out, as I'm constantly looking to enhance and refine this template.
