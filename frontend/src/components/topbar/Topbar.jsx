import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={ {textDecoration:"none"} }>
            <span className="logo">Social Site</span>
          </Link>
        </div>

        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input placeholder="Search for friends, posts, or videos" className="searchInput" />
          </div>
        </div>

        <div className="topbarRight">
          {/* Link Elements */}
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          {/* Icon Elements - Person, Chat, Notifications*/}
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">3</span>
            </div>
          </div>
          <img 
            src={ user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} 
            alt="" 
            className="topbarImg"
          />
        </div>
    </div>
  )
}
