import React from 'react'
import styled from "styled-components";
import Button from "@material-ui/core";

function ChatInput({channelName, channelId}) {
    return <ChatInputContainer>
        <form>
            <input placeholder = {`Message #room`} />
            <Button hidden type = 'submit' onClick = {sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>;
}

export default ChatInput;

const ChatInputContainer = styled.div``;
