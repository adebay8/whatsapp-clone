import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [messages, setMessages] = useState([]);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      // send data to db
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  console.log(messages[0]);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
