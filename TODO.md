# TODO List for Dark/Light Mode Implementation

- [x] Modify src/App.tsx to add theme toggle functionality:
  - Import necessary React hooks (useState, useEffect).
  - Add state for current theme ('light' or 'dark').
  - Create a toggle function that switches the theme and updates the document's data-theme attribute.
  - Add a button in the UI to toggle between light and dark modes.
  - Use DaisyUI classes for styling the button and layout.
- [x] Update src/Components/Navbar.tsx to include the toggle button:
  - Import Sun and Moon icons from lucide-react.
  - Modify the Navbar component to accept toggleTheme and theme props.
  - Add a toggle button with appropriate icons for light/dark modes.
  - Use DaisyUI classes for styling the button.
