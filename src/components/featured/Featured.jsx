import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span> {type === "movie" ? "Movies" : "Series"} </span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_960_720.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2a1v2dtw3q09DCuFVvNRi6yPNxfvWM18lA&usqp=CAU"
          alt=""
        />
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minus
          dignissimos tenetur ullam! Dolor, asperiores ea? Culpa numquam, eum
          sunt porro iure quibusdam illum nihil quo labore nam, vel atque!
        </span>
        <div className="buttons">
          <button className="play">
            {" "}
            <PlayArrow /> <span>Play</span>{" "}
          </button>
          <button className="more">
            {" "}
            <InfoOutlined /> <span>Info</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
