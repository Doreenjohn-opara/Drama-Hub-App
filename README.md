# **Drama Hub App**

## **Project Overview**  
Drama Hub is a movie listing application that displays popular movies using data fetched from an external API. Users can browse through movie cards, view detailed information about individual movies, and navigate seamlessly between pages. This project converts an existing Vanilla JavaScript app into a React and TypeScript-based application.

---

## **Core Features**

### 1. **Movie Listing Page**
- Fetches and displays a list of popular movies from an external API.
- Each movie appears as a card with the following elements:
  - **Poster** as the background.
  - **Movie Title**.
  - **Release Year**.
- Clicking on a movie card redirects to a **Movie Details Page** using React Router.

### 2. **Movie Details Page**
- Displays detailed information about the selected movie, including:
  - **Poster**.
  - **Title**.
  - **Release Year**.
  - **Overview/Description**.
  - **Rating** (optional).
- Includes a back button to navigate back to the **Movie Listing Page**.

### 3. **Loading and Error Handling**
- A **loading indicator** appears while fetching data.
- Displays **error messages** if the API request fails.

---

## **Technical Requirements**

### 1. **React and TypeScript Setup**
- Convert the Vanilla JavaScript app into a React project using TypeScript.
- Use `create-react-app` or similar tools to initialize the project with TypeScript support.

### 2. **React Components**
- Break the app into modular, reusable components:
  - **`MovieCard`**: Displays individual movie cards.
  - **`MovieList`**: Renders the full list of movies.
  - **`MovieDetails`**: Displays detailed information about a selected movie.
- Use **functional components** and **React hooks** for state management and lifecycle operations.

### 3. **API Integration**
- Use **`useEffect` hook** to fetch movie data from the external API.
- Define **TypeScript interfaces** for the API data (e.g., `Movie` interface).

### 4. **Routing**
- Implement **client-side routing** with **React Router** for:
  - **Movie Listing Page**.
  - **Movie Details Page** (dynamically routed by movie ID).

### 5. **TypeScript Type Safety**
- Use **interfaces or types** for API data and props.
- Implement **TypeScript types** like unions, enums, and optional properties where appropriate to ensure type safety.

### 6. **State Management**
- Use **`useState`** for managing local component state.
- Consider using the **React Context API** for shared state (e.g., if multiple components need access to movie data).

### 7. **Styling**
- Reuse or adapt the styles from the Vanilla JavaScript project.
- Ensure the app is **responsive and mobile-friendly**.

## **Contributing**
Feel free to fork this repository and submit pull requests with improvements or new features.
