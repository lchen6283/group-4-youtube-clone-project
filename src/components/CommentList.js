import Counter from "./Counter";

/**
 * Creates list items of comments made by users
 * @params array[] - Array of strings
 * @returns List element with a Counter component
 */
const createList = (arrayOfComments) => {
  return arrayOfComments.map((comment) => {
    return (
      <p>
        <p>{comment}</p>
        <Counter />
      </p>
    );
  });
};

/**
 * Creates a list of comments based on what has been submitted via the form
 * @params arrayOfComments[] - Array of comments
 * @returns Unordered list containing comments
 */
const CommentList = ({ arrayOfComments }) => {
  return <div>{createList(arrayOfComments)}</div>;
};

export default CommentList;
