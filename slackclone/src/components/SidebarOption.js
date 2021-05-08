import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

{
  /* for the onclick, if i have addchanneloption as a prop, then trigger addchannel function else trigger the select channel */
}

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* if icon passed then render the icon, Mui requires font size and easier to do inline css then styled for this */}
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {/* if you dont pass an icon then you can just output the title */}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: var(--headertext-color);
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
