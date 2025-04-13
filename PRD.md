Product Requirements Document: VS Code Agent Mode - Notepad App (Stage 1: UI Development)
Product: Notepad Application - VS Code Agent Mode
Version: 0.1 (Stage 1 - UI Development)
Date: April 13, 2025
Author: [Abhishek Kapoor]
Status: Draft

1. Introduction
   This document outlines the requirements for the first stage of development for a simple Notepad application intended to be integrated or accessible within VS Code using an agent-like interface. This initial stage focuses solely on developing the user interface (UI) structure and basic interactive elements using Express.js, Pug, and Bootstrap (without NPM).
2. Goals for Stage 1
   Develop the basic static UI structure of the Notepad application.
   Implement the primary visual components: Navbar, Sidebar, Title input, Content textarea, and Save button.
   Ensure the UI is responsive and visually appealing using Bootstrap.
   Establish the project structure using Express.js and Pug for templating.
   Implement both Dark and Light color themes.
3. Target User
   Developers or anyone who needs a simple, lightweight notepad accessible within their VS Code environment for quick note-taking.
4. Scope of Stage 1
   This stage will cover the development of the front-end UI structure and basic styling, including both dark and light color themes. No backend logic, data persistence, or dynamic functionality will be implemented in this stage.
5. Technical Requirements
   Framework: Express.js (https://expressjs.com/en/starter/generator.html)
   Templating Engine: Pug (https://pugjs.org/api/getting-started.html)
   UI Library: Bootstrap (https://getbootstrap.com/docs/5.3/getting-started/download/) - Downloaded and placed in the public folder (no NPM).
   Color Themes:
   Dark Theme
   Light Theme
6. UI Requirements
   The application screen should be structured with the following components:
   6.1. Navbar (Top)
   A fixed-top navigation bar using Bootstrap's navbar component.
   Content: The navbar will display the application title (e.g., "VS Code Notepad"). No interactive elements are required in the navbar for this stage.
   Theme Switch: A theme switch will be added in a later stage. For now, the default theme will be light.
   6.2. Sidebar (Left)
   A fixed-height sidebar on the left side of the screen.
   Content:
   "New Note" Button: A prominent button at the top of the sidebar with the text "New Note". Functionality will be implemented in later stages.
   Note List Area: A designated area below the "New Note" button to eventually display a list of saved notes. For this stage, this area can contain placeholder text (e.g., "List of Notes will appear here").
   "Delete Note" Button: A button at the bottom of the sidebar with the text "Delete Note". Functionality will be implemented in later stages.
   6.3. Main Content Area (Right)
   The main area on the right side of the screen will be dedicated to creating and editing notes.
   Title Input:
   A text input field for the note title.
   Should have placeholder text "Title".
   Content Textarea:
   A multi-line text area for the note content, taking up the majority of the right-side area.
   "Save" Button:
   A button located at the bottom of the content textarea with the text "Save". Functionality will be implemented in later stages.
7. Visual Design and Styling
   Utilize Bootstrap 5.x classes for layout, styling, and responsiveness.
   Ensure the layout is fluid and adapts to different screen sizes.
   Maintain a clean and simple aesthetic, consistent with VS Code's visual style.
   Implement both Dark and Light color themes using Bootstrap's theming capabilities and/or custom CSS.
8. Development Steps (for Stage 1)
   Project Setup:
   Use the Express application generator to create the basic project structure with Pug as the view engine. Command: npx express-generator --view=pug notepad_ui (adjust project name as needed).
   Navigate into the project directory: cd notepad_ui.
   Bootstrap Integration:
   Download the Bootstrap CSS and JS files from https://getbootstrap.com/docs/5.3/getting-started/download/).
   Create a bootstrap subdirectory within the public folder.
   Place the downloaded CSS files (typically in a dist/css folder) into public/bootstrap/css/.
   Place the downloaded JS files (typically in a dist/js folder) into public/bootstrap/js/.
   Pug Template Creation:
   Create the main layout file (e.g., layout.pug in the views folder) to include the basic HTML structure, link the Bootstrap CSS, and define the overall page structure (navbar, sidebar, main content).
   Create the main application view file (e.g., index.pug in the views folder) that extends the layout and implements the specific UI elements (navbar, sidebar with buttons and placeholder, title input, content textarea, save button) using Bootstrap classes for styling and layout.
   Express Route Definition:
   Define a basic route in routes/index.js to render the main Pug view.
   Server Configuration:
   Ensure the Express application in app.js is set up to serve static files from the public directory so that Bootstrap CSS can be accessed.
   UI Implementation in Pug:
   Use Pug syntax and Bootstrap components (e.g., navbar, container-fluid, row, col-md-\*, form-control, btn) to structure and style the UI elements as described in Section 6.
   Implement both Dark and Light color themes. This can be done by:
   Using Bootstrap's built-in classes for theming (if available and suitable).
   Creating custom CSS classes for each theme and applying them conditionally. A theme switch will be implemented in a later stage, but for now, you can decide on a default theme.
   Basic Styling:
   Utilize Bootstrap's built-in classes for basic styling and layout. Use custom CSS only when necessary to achieve the desired look and feel for each theme.
9. Success Metrics for Stage 1
   The application displays a top navbar with the specified title.
   A fixed-height sidebar is present on the left with "New Note" and "Delete Note" buttons (visually distinct) and a placeholder area for the note list.
   The main content area on the right displays a title input field with the "Title" placeholder.
   A multi-line textarea for content is present below the title input.
   A "Save" button is located at the bottom of the textarea.
   The UI is responsive and adapts reasonably well to different browser window sizes due to Bootstrap's grid system.
   The application implements both a Dark and a Light color theme, and the theme is applied consistently across all UI elements.
   The project structure adheres to the basic Express.js conventions with Pug templates in the views folder and static assets in the public folder.
10. Out of Scope for Stage 1
    Any backend logic or server-side processing.
    Database integration.
    Saving, loading, or deleting notes.
    Dynamic updates to the UI.
    Any interactivity beyond basic HTML form elements.
    VS Code integration specifics (this stage focuses on the web UI).
    Theme switching functionality. The default theme will be applied.
11. Future Stages (Brief Overview)
    Stage 2: Basic Backend and Data Storage: Implement backend routes and logic using Express.js and Knex.js to interact with a SQLite database for creating, reading, updating, and deleting notes.
    Stage 3: UI Interactivity: Implement JavaScript to handle button clicks, form submissions, and dynamically update the UI based on backend responses.
    Stage 4: VS Code Integration: Explore and implement ways to integrate this web-based notepad into the VS Code environment (e.g., using Webviews).
    Stage 5: Advanced Features: Implement features like note searching, tagging, or more sophisticated UI elements.
    This PRD serves as a guide for the first stage of development. Any changes or deviations from these requirements should be documented and approved.
