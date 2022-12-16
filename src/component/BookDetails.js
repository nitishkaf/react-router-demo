import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id, author } = useParams();
  return (
    <div>
      Book page
      <br />
      Book Id: {id}
    </div>
  );
};

export default BookDetails;
