import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import { loadBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks);
  }, []);

  return (
    <>
      <section>
        {books && books.map(
          (book) => (
            <Book
              title={book.title}
              author={book.author}
              category={book.category}
              id={book.id}
              key={book.id}
            />
          ),
        )}
      </section>
      <section>
        <BookForm />
      </section>
    </>

  );
};

export default Books;
