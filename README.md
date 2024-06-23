# React Weather App

## Live Demo

This application is deployed on Netlify: https://precious-trifle-d496c3.netlify.app

## About the project

### Tech Stack

**Frontend:**
 - React.js
 - React Router Dom
 - TanStack Query

**Development Tools:**
 - TypeScript
 - Vite
 - SASS

**Testing:**
- Vitest
- React Testing Library
- Mock Service Worker (MSW)

### Pages

| Page             | Routes             | Description                                  |
|------------------|--------------------|----------------------------------------------|
| **HomePage**     | **/**              | `Current weather + forecast for next 4 days` |
| **DetailsPage**  | **/:weekDay**      | `Weather details for selected day`           |
| **PageNotFound** | **/invalid-route** | `Current page not found or does not exist`   |

## Getting Started

**Prerequisites**

1. Ensure you have Node.js and npm installed on your system. You can download them from the official websites:
    - Node.js: https://nodejs.org/
    - Npm: https://www.npmjs.com/ (comes bundled with Node.js)

**Installation**
 - Clone the repository or download the source code.
 - Install dependencies using `npm install`.
 - Start the development server using `npm run dev`. This will typically launch the application in your browser at `http:localhost:5173`.
 **Note:** If you see a different port number in your terminal output, use that port instead of `5173` in the URL.

## Licence

Distributed under the MIT License. See `LICENSE` for more information.