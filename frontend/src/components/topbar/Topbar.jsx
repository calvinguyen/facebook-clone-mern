import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
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
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
