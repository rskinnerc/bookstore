import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const [randomPercentage] = useState(Math.floor(Math.random() * 100));

  return (
    <div className="book">
      <div>
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <Progress
          strokeColor={{
            '0%': '#307bbe',
            '100%': '#379cf6',
          }}
          type="circle"
          percent={randomPercentage}
          showInfo={false}
          trailColor="#f5f6fa"
        />
        <div className="progress-stats">
          <span className="percentage">
            {randomPercentage}
            %
          </span>
          <span className="percentage-completed">Completed</span>
        </div>

      </div>
      <div className="chapter-info">
        <h3 className="current-chapter">CURRENT CHAPTER</h3>
        <span className="chapter">Chapter 17</span>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
