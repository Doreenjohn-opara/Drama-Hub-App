### Project: Converting Vanilla JS Movie App to React + TypeScript

### **Project Requirements**

#### **1. Core Features**

1. **Movie Listing Page**
   - Fetch and display a list of popular movies using an external API.
   - Each movie should be rendered as a card component, displaying:
     - Poster as the background.
     - Movie title.
     - Release year.
   - Clicking on any movie card should redirect to a separate Movie Details Page using React Router.

2. **Movie Details Page**
   - Display detailed information about the selected movie, including:
     - Poster.
     - Title.
     - Release year.
     - Overview/description.
     - Rating (optional).
   - Include a back navigation to return to the Movie Listing Page.

3. **Loading and Error Handling**
   - Implement a loading state when data is being fetched.
   - Display appropriate error messages if the API request fails.

---

### **Technical Requirements**

1. **React and TypeScript Setup**
   - Convert the existing Vanilla JS app into a React project, using TypeScript for type checking.
   - Use `create-react-app` or a similar tool to bootstrap the React app with TypeScript enabled.

2. **React Components**
   - Break down the app into modular React components, such as:
     - `MovieCard` component for displaying individual movie cards.
     - `MovieList` component for rendering the list of movies.
     - `MovieDetails` component for displaying the detailed information of a selected movie.
   - Use functional components with React hooks for state and lifecycle management.

3. **API Integration**
   - Use React's `useEffect` hook to fetch data from the external movie API.
   - Ensure that type definitions are used for the API data (e.g., interface for Movie objects).

4. **Routing**
   - Use **React Router** to implement client-side routing for the Movie Listing Page and Movie Details Page.
   - Ensure that each movie card links to a dynamically routed movie details page based on the movie’s ID.

5. **TypeScript Type Safety**
   - Define TypeScript interfaces or types for movie data to ensure type safety across the app.
   - Use appropriate types for props in each component.
   - Utilize TypeScript's union types, enums, and optional properties where needed.

6. **State Management**
   - Use React’s built-in `useState` for local component state.
   - Consider using React Context API for managing shared state, such as movie data, if necessary.

7. **Styling**
   - Apply or reuse the styling from the Vanilla JS project.
   - Ensure the app is responsive and mobile-friendly.
