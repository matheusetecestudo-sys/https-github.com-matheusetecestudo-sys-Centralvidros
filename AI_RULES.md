# AI Rules for Rino Score Marcenaria Application

This document outlines the technical stack and specific guidelines for using libraries within the Rino Score Marcenaria application. Adhering to these rules ensures consistency, maintainability, and optimal performance.

## Tech Stack Overview

*   **Frontend Framework**: React for building dynamic and interactive user interfaces.
*   **Language**: TypeScript for enhanced code quality, type safety, and better developer experience.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, enabling rapid and responsive UI development.
*   **Routing**: React Router for managing navigation and defining application routes.
*   **Charting**: Recharts for creating powerful and customizable data visualizations.
*   **Backend Integration**: Supabase for authentication, database management, and real-time capabilities (when configured).
*   **UI Components**: shadcn/ui for a collection of accessible and customizable UI components built on Radix UI and styled with Tailwind CSS.
*   **Icons**: Lucide-react for a consistent and extensive set of vector icons.

## Library Usage Rules

To maintain a clean, efficient, and consistent codebase, please follow these guidelines when developing or modifying the application:

1.  **UI Components**:
    *   **Prioritize shadcn/ui**: Always use components from `shadcn/ui` first. These components are pre-styled with Tailwind CSS and provide accessibility features.
    *   **Custom Components**: If a required component is not available in `shadcn/ui` or needs significant customization, create a new, dedicated component file in `src/components/` using React and Tailwind CSS. Do **not** modify existing `shadcn/ui` component files directly.

2.  **Styling**:
    *   **Tailwind CSS Only**: All styling must be done using Tailwind CSS utility classes. Avoid writing custom CSS files or using inline styles unless absolutely necessary for dynamic, calculated styles that cannot be expressed with Tailwind.

3.  **Icons**:
    *   **Lucide-react**: Use icons exclusively from the `lucide-react` library.

4.  **Charting and Data Visualization**:
    *   **Recharts**: All charts and data visualizations should be implemented using the `recharts` library.

5.  **Routing**:
    *   **React Router**: Use `react-router-dom` for all navigation. Keep the main route definitions consolidated in `src/App.tsx`.

6.  **State Management**:
    *   **React Hooks**: For local component state, use React's `useState` and `useReducer` hooks.
    *   **Context API**: For global application state, leverage the existing `AppContext.tsx` (React Context API).

7.  **Backend Interactions**:
    *   **Supabase Client**: For any authentication, database queries, or real-time features, use the `@supabase/supabase-js` client. Ensure that Supabase environment variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) are correctly set up.

8.  **File Structure**:
    *   **Source Directory**: All application source code must reside within the `src` folder.
    *   **Pages**: Place main application views in `src/pages/`.
    *   **Components**: Place reusable UI components in `src/components/`.
    *   **Contexts**: Place React Context definitions in `src/context/`.
    *   **Utilities**: Place helper functions and non-component logic in `src/utils/`.
    *   **Naming Conventions**: Directory names must be all lower-case. File names may use mixed-case (e.g., `MyComponent.tsx`).

9.  **Code Quality**:
    *   **TypeScript**: Always use TypeScript for new files and refactor existing JavaScript files to TypeScript where appropriate.
    *   **Readability**: Write clear, concise, and well-commented code.
    *   **Responsiveness**: All new UI elements and components must be designed to be responsive across different screen sizes.
    *   **Error Handling**: Allow errors to bubble up naturally; avoid extensive `try/catch` blocks unless specifically requested or critical for user experience (e.g., form validation feedback).