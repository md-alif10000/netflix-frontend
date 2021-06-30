import {
  AddCircle,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listitem.scss";

export default function ListItem({ index }) {
  const [hovered, setHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: hovered && `${index * 225 - 50 + index * 2.5}px` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src="https://i.gadgets360cdn.com/large/avengers_key_art_small_1597298661028.jpg?downsize=950:*&output-quality=80"
        alt=""
      />
      {hovered && (
        <>
          {" "}
          <video src={trailer} autoPlay loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <AddCircle className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt, voluptates! Delectus, nulla sint, velit ducimus sunt ad
              dignissimos soluta dolorum esse praesentium ipsum, beatae
              voluptatibus est rem aliquid obcaecati! Odit?
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
