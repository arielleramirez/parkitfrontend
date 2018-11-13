// import React, { Component, Fragment } from "react";
// import { Menu, Button, Image, Icon } from "semantic-ui-react";
// import menu from "../img/menu7.png";
// import search from "../img/search.png";
// import MapComponent from "./MapComponent";
// import Filter from "./Filter";
// import SearchBar from "./SearchBar";
// import CurrentLocation from "./CurrentLocation";
// import Search from "./Search";
//
// export default class MenuExampleBasic extends Component {
//   state = { active: false, target: [] };
//
//   handleChange = e => {
//     console.log(e.target);
//     if (
//       e.target.innerText === "LogOut" ||
//       e.target.className === "sign out icon"
//     ) {
//       this.props.handleLogOut();
//     } else if (e.target.innerText === "Filter By State") {
//       this.props.handleMainPage();
//     } else if (e.target.innerText === "Search Address") {
//       this.props.handleMainPage();
//     } else if (e.target.innerText === "Search By Garage") {
//       this.props.handleMainPage();
//     } else if (e.target.innerText === "Search Current Location") {
//       this.props.handleMainPage();
//     } else {
//       this.props.handleProfile();
//     }
//     this.setState({
//       target: e.target
//     });
//   };
//
//   toggleSidebar = () => {
//     this.setState({
//       active: !this.state.active
//     });
//   };
//
//   render() {
//     const { activeItem } = this.state;
//
//     return (
//       <Fragment>
//         <div style={{ backgroundColor: "#a5456a", width: 1900, height: 80 }}>
//           <div className="banner">
//             <h1>ParkIt.</h1>
//           </div>
//
//           <div id="sideBar">
//             <div className="toggle-btn" onClick={this.toggleSidebar}>
//               <span />
//               <span />
//               <span />
//             </div>
//             {this.state.active && (
//               <ul
//                 style={{
//                   marginLeft: 1530,
//                   width: 200,
//                   marginTop: 100
//                 }}
//               >
//                 <li>
//                   <Image style={{ display: "absolute" }} src={search} /> Profile
//                 </li>
//                 <li onClick={this.handleChange}>Search Address</li>
//                 <li onClick={this.handleChange}>Search Current Location</li>
//                 <li
//                   onClick={this.handleChange}
//                   style={{ borderBottom: "2px solid #a5456a" }}
//                 >
//                   Search By Garage
//                 </li>
//                 <li
//                   onClick={this.handleChange}
//                   style={{ backgroundColor: "#a5456a", color: "white" }}
//                 >
//                   LogOut
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>
//
//         {this.state.target.innerText === "Search Address" ? (
//           <MapComponent />
//         ) : null}
//         {this.state.target.innerText === "Filter By State" ? <Filter /> : null}
//         {this.state.target.innerText === "Search Current Location" ? (
//           <CurrentLocation />
//         ) : null}
//         {this.state.target.innerText === "Search By Garage" ? <Search /> : null}
//       </Fragment>
//     );
//   }
// }

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import userAccountIcon from "../img/userAccount.png";
import search from "../img/search.png";
import exit from "../img/exit.png";
import menu from "../img/menu6.png";
import MapComponent from "./MapComponent";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import CurrentLocation from "./CurrentLocation";
import { Image } from "semantic-ui-react";
import Search from "./Search";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false,
    target: []
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  handleChange = e => {
    console.log(e.target);
    if (
      e.target.innerText === "LogOut" ||
      e.target.className === "sign out icon"
    ) {
      this.props.handleLogOut();
    } else if (e.target.innerText === "Filter By State") {
      this.props.handleMainPage();
    } else if (e.target.innerText === "Search Address") {
      this.props.handleMainPage();
    } else if (e.target.innerText === "Search By Garage") {
      this.props.handleMainPage();
    } else if (e.target.innerText === "Search Current Location") {
      this.props.handleMainPage();
    } else {
      this.props.handleProfile();
    }
    this.setState({
      target: e.target
    });
  };

  render() {
    console.log(this.state.target.innerText);
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list} onClick={this.handleChange}>
        <List>
          {[
            "Profile",
            "Filter By State",
            "Search Address",
            "Search Current Location",
            "Search By Garage"
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 && index % 3 === 0 ? (
                  <Image src={userAccountIcon} />
                ) : (
                  <Image src={search} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["LogOut"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Image src={exit} />
                ) : (
                  <Image src={search} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    // const options = [
    //   { key: "user", text: "Profile", icon: "user" },
    //   { key: "mainpage", text: "Main Page", icon: "home" },
    //   { key: "filter", text: "Filter By State", icon: "home" },
    //   { key: "sign-out", text: "Sign Out", icon: "sign out" }
    // ];
    return (
      <Fragment>
        <div className="mainbar">
          <div className="banner">
            <h1>ParkIt.</h1>
          </div>

          <div id="sideBar">
            <div
              className="toggle-btn"
              onClick={this.toggleDrawer("right", true)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
            pointing="top left"
            icon={null}
            onChange={this.handleChange}
          >
            {sideList}
          </div>
        </Drawer>
        {this.state.target.innerText === "Search Address" ? (
          <MapComponent />
        ) : null}
        {this.state.target.innerText === "Filter By State" ? <Filter /> : null}
        {this.state.target.innerText === "Search Current Location" ? (
          <CurrentLocation />
        ) : null}
        {this.state.target.innerText === "Search By Garage" ? <Search /> : null}
      </Fragment>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
