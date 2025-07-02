import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookById = async (id) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const createBook = async (data) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        error,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
