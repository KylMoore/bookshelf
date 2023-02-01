import { useState, useEffect } from "react";

import firebase from "./firebase";

import { getDatabase, onValue, push, ref, remove } from "firebase/database";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Inputting books on the screen

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(firebase);
    const dbRef = ref(database);

    push(dbRef, userInput);

    setUserInput("");
  };

  // Inputting books on screen end

  // Removing books start

  const handleRemoveBook = (bookId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${bookId}`);

    remove(dbRef);
  };

  // Removing books end

  // For getting data from Firebase
  useEffect(() => {
    const database = getDatabase(firebase);

    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const data = response.val();

      const newState = [];

      for (let key in data) {
        newState.push({
          key: key,
          name: data[key],
        });
      }
      setBooks(newState);
    });
  }, []);
  // End of getting data from Firebase

  return (
    <div className="App">
      <h1>My Bookshelf!</h1>

      <form action="submit">
        <label htmlFor="newBook">Add a book to your bookshelf: </label>
        <input
          onChange={handleInputChange}
          type="text"
          id="newBook"
          placeholder="Book Title"
          value={userInput}
        />
        <button onClick={handleSubmit}>Add Book</button>
      </form>

      <ul>
        {books.map((book) => {
          return (
            <li key={book.key}>
              <p>📚 {book.name}</p>
              <button
                onClick={() => {
                  handleRemoveBook(book.key);
                }}
              >
                Remove Book
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
