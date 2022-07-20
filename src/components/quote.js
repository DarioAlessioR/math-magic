const Quote = () => {
  const thequote = 'Nature is written in mathematical language';
  const author = '- Galileo Galilei, Italian astronomer, physicist and engineer -';

  return (
    <div className="quote-container">
      <p className="theQuote">{thequote}</p>
      <p className="theAuthor">{author}</p>
    </div>
  );
};

export default Quote;
