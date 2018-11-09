import React from "react";
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
import menu from "../img/menu3.png";

import { Image } from "semantic-ui-react";

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
    bottom: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };
  handleChange = e => {
    console.log(e.target);
    if (
      e.target.innerText == "LogOut" ||
      e.target.className == "sign out icon"
    ) {
      this.props.handleLogOut();
    } else if (
      e.target.innerText == "Filter By State" ||
      e.target.className == "Filter By State"
    ) {
      this.props.handleMainPage();
    } else if (
      e.target.innerText == "Search Address" ||
      e.target.className == "Search Address"
    ) {
      this.props.handleMainPage();
    } else if (
      e.target.innerText == "Search Current Location" ||
      e.target.className == "Search Current Location"
    ) {
      this.props.handleMainPage();
    } else {
      this.props.handleProfile();
    }
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list} onClick={this.handleChange}>
        <List>
          {[
            "Profile",
            "Filter By State",
            "Search Address",
            "Search Current Location"
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
      <div>
        <Button
          className="burgerMenu"
          onClick={this.toggleDrawer("right", true)}
        >
          <Image src={menu} />
        </Button>

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
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
