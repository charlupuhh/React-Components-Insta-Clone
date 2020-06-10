// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = props => {

  const [comments, setComment] = useState(props.comments)
  console.log(comments)
  return (
    <div>
      {comments.map(postObject => {
        return (
          <Comment 
            comment = {postObject} />
        )
        })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
