import { useState } from 'react';
import Book from '../components/Book';
import BookForm from '../components/BookForm';

const Books = () => {
  const [books] = useState([
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      id: 'ashda9ysudhasd0',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      id: 'asdahsd9qhwdoa0a9wq',
    },
  ]);

  return (
    <>
      <section>
        {books && books.map((book) => <Book title={book.title} author={book.author} key={book.id} />)}
      </section>
      <section>
        <BookForm />
      </section>
    </>

  );
};

export default Books;
