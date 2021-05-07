import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault(); // Prevents refresh from occuring

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Anees Imran",
      userImage:
        "https://pbs.twimg.com/profile_images/1254895625801535490/W680hT0d_400x400.jpg",
    });
    setInput("");
  };

  chatRef?.current?.scrollIntoView({
    behavior: "smooth",
  });

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
