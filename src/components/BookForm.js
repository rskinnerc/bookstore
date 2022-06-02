const BookForm = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
