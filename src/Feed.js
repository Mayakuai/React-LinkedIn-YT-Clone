import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import "./Feed.css";
import ImageIcon from "@mui/icons-material/Image";
import InputOptions from "./InputOptions";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      <Post
        name="Joshua Stuart"
        description="this is a test"
        message="Wow this worked"
      />
    </div>
  );
}

export default Feed;
