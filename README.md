# Example React Redux Counter

### How to run it

Install dependencies with `npm install`, then run it with `npm start`. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### How to build a version of it yourself

1. Start by creating the Redux store in `src/app/store.js`.
2. Provide the Redux store to React in `index.js`.
3. Create a Redux state slice in `src/features/counter/counterSlice.js`.
  - It'll take an object as its argument, which will have the following properties: `name`, `initialState`, and `reducers`.
  - Don't forget to export the action creators and reducer from the file.
4. Add the counter slice reducer to the store in `src/app/store.js`.
5. Use Redux state and actions in React components to create the view in `features/counter/Counter.js`.
  - Select specific parts of state using the `useSelector` hook from `react-redux`.
  - Dispatch actions to the Redux store using the `useDispatch` hook from `react-redux`.
  - Don't forget to add your `Counter` component to the view somewhere, such as in your `App.js` file.