# Abhishek Notepad App

A simple Notepad application with clean UI developed using Express.js, Pug, and Bootstrap.

## Project Description

This is a web-based Notepad application that provides a clean, intuitive interface for creating and managing notes. The application features a responsive design with both light and dark themes.

## Features (Stage 1)

- Clean, responsive UI built with Bootstrap
- Navigation bar with application title
- Sidebar with "New Note" and "Delete Note" buttons
- Main content area with title input and content textarea
- Save button for notes
- Both light and dark theme support (theme switching to be implemented in future stages)

## Tech Stack

- **Framework**: Express.js
- **Templating Engine**: Pug
- **UI Library**: Bootstrap (included directly, no NPM)

## Setup Instructions

1. Clone this repository
2. Download Bootstrap files:
   - Get bootstrap.min.css and place it in public/bootstrap/css/
   - Get bootstrap.bundle.min.js and place it in public/bootstrap/js/
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```
5. Open your browser and navigate to http://localhost:3000

## Project Structure

```
notepad_app/
├── app.js                      # Express app configuration
├── bin/
│   └── www                     # Server startup script
├── package.json                # Project dependencies
├── public/                     # Static assets
│   ├── bootstrap/              # Bootstrap files
│   │   ├── css/
│   │   │   └── bootstrap.min.css
│   │   └── js/
│   │       └── bootstrap.bundle.min.js
│   ├── images/
│   ├── javascripts/
│   │   └── theme-toggle.js     # Theme toggle functionality (for future use)
│   └── stylesheets/
│       └── style.css           # Custom styles and theme definitions
├── routes/
│   ├── index.js                # Main routes
│   └── users.js                # User routes (not used in Stage 1)
└── views/
    ├── error.pug               # Error page template
    ├── index.pug               # Main application view
    └── layout.pug              # Layout template
```

## Future Development

This is Stage 1 of development, focusing on UI structure only. Future stages will include:

- Stage 2: Basic Backend and Data Storage with SQLite
- Stage 3: UI Interactivity with JavaScript
- Stage 4: VS Code Integration
- Stage 5: Advanced Features

## License

[MIT](LICENSE)
