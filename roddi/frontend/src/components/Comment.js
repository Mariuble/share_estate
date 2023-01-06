import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Comment = ({ itemId, currentUser }) => {
  const [comment, setComment] = useState();
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/comment").then((res) => {
      const responseComment = res.data;
      setComment(responseComment);
    });
  }, [newComment]);

  const postComment = (content, author, itemID) => {
    console.log("Input: ", content, author, itemID);
    fetch("http://localhost:8000/api/comment/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: author,
        content: content,
        itemID: itemID,
      }),
    }).then((response) => {
      // response = response.json()
      if (response.ok) {
        setNewComment(content);
        console.log("Success");
      } else {
        console.log("Fail");
      }
    });
  };

  const checkPost = () => {
    const iId = "commentContent" + itemId;
    if (document.getElementById(iId) != null) {
      postComment(document.getElementById(iId).value, currentUser.name, itemId);
    } else {
      console.log("Get ID FAILED");
    }
  };

  return (
    <div>
      <List>
        {comment &&
          comment
            .filter((comment) => comment.itemID === itemId)
            .map((comment, index) => {
              const { author, content } = comment;
              if (index === -1) {
                console.log("DONE");
              }
              return (
                <>
                  <ListItem className="comment-content">
                    <h4 className="comment-author">{author} :</h4>
                    <br></br>
                    <ListItemText primary={comment.content} />
                  </ListItem>
                </>
              );
            })}
      </List>
      <div></div>
      <form>
        <TextField
          id={"commentContent" + itemId}
          className="comment-box"
          multiline
          rows={2}
          placeholder="Skriv kommentar her..."
          variant="outlined"
        ></TextField>
        <Button className="btn" variant="contained" onClick={() => checkPost()}>
          send
        </Button>
      </form>
    </div>
  );
};

export default Comment;
