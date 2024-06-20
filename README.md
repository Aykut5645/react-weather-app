# React Weather App

## Live Demo

This application is deployed on Netlify: https://precious-trifle-d496c3.netlify.app
 
## About the project

**Tech Stack**
 - React.js
 - TypeScript
 - Vite
 - SCSS
 - Ant Design
 - React Router Dom

 **Features**
 - Persistent note storage using local storage
 - Responsive and interactive UI with Ant Design
 - Link creation within notes
 - Create, Edit, and Delete notes for ultimate control
 - Paginated note listing for large datasets

 **Pages**

|Routes                     |Description                                 |
|---------------------------|--------------------------------------------|
|**/**                      |`Current weather + forecast for next 4 days`|
|**/:weekDay**              |`Weather details for selected day`          |

## Getting Started

**Prerequisites**

1. Ensure you have Node.js and npm installed on your system. You can download them from the official websites:
    - Node.js: https://nodejs.org/
    - npm: https://www.npmjs.com/ (comes bundled with Node.js)

**Installation**
 - Clone the repository or download the source code.
 - Install dependencies using `npm install`.
 - Start the development server using `npm run dev`. This will typically launch the application in your browser at `http:localhost:5173`.
 **Note:** If you see a different port number in your terminal output, use that port instead of `5173` in the URL.

**Usage**
 - Use the interface to create, edit, delete notes, and navigate between pages.
 - Notes are automatically saved to local storage and persist across browser refreshes.

## Licence

Distributed under the MIT License. See `LICENSE` for more information.