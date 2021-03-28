import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Search from '../component/search/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: "0 10px",
    boxShadow: "none",
  },
  title: {
    padding: theme.spacing(0, 0, 0, 1),
    flexGrow: 1,
    display: "block",
    color: "white",
  },
  menu: {
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  Brightness4Icon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "black",
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "white",
    height: "30px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))(MenuItem);

export default function Header() {
  const classes = useStyles();
  const [activeValue, setActiveValue] = useState("홈");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChange(event) {
    setActiveValue(event.target.innerText);
  }


  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };
    const nowUrl = window.location.href.split("/");
    const nowLocation = nowUrl[nowUrl.length - 1];
    if (nowLocation === "eval") {
      setActiveValue("평가하기");
    } else if (nowLocation === "mylike") {
      setActiveValue("내가 찜한 콘텐츠");
    } else {
      setActiveValue("홈");
    }
    const header = document.getElementById("header");
    const sticky = 0;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.style.backgroundColor = "rgba(0, 0, 0, 1)";
      } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    }
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.root} id="header">
        <Toolbar>
          <Link to={"/"}>
            <img
              src={"../images/netcha.png"}
              style={{ height: "52px", marginRight: "10px" }}
              alt="netcha"
              onClick={() => setActiveValue("홈")}
            />
          </Link>
          <div>
            <Link to={"/"}>
              <Typography
                className={classes.menu}
                variant="subtitle2"
                noWrap
                style={activeValue === "홈" ? { fontWeight: "bold" } : {}}
                onClick={handleChange}
              >
                홈
              </Typography>
            </Link>
          </div>
          <div>
            <Link to={"/mylike"}>
              <Typography
                className={classes.menu}
                variant="subtitle2"
                noWrap
                style={
                  activeValue === "내가 찜한 콘텐츠"
                    ? { fontWeight: "bold" }
                    : {}
                }
                onClick={handleChange}
              >
                내가 찜한 콘텐츠
              </Typography>
            </Link>
          </div>
          <div>
            <Link to={"/eval"}>
              <Typography
                className={classes.menu}
                variant="subtitle2"
                noWrap
                style={activeValue === "평가하기" ? { fontWeight: "bold" } : {}}
                onClick={handleChange}
              >
                평가하기
              </Typography>
            </Link>
          </div>

          <Typography
            className={classes.title}
            variant="subtitle2"
            noWrap
          ></Typography>

          <Search activeValue={activeValue} setActiveValue={setActiveValue}/>

          <Link to={"/"}>
            <div className={classes.Brightness4Icon}>
              <Brightness4Icon />
            </div>
          </Link>
          <div className={classes.Brightness4Icon}>
            <Avatar
              alt="Travis Howard"
              className={classes.small}
              src="https://ww.namu.la/s/7afd3dd8186b6098081d52af9ba76b4b633331079cba253db56054f5d2a90fea37714c9f060074bbf86626a7f3016d89dc50d7f0c662ce806552ebb3f23f52d5968d07a1e25c8996f649d7364e995ae970190dd4ca6cb37dfb9bc0201e53540a1e5f2d2df2636376d26f60e96d9df172"
            />
            <Typography className={classes.title} variant="subtitle2" noWrap>
              싸피
            </Typography>
            <IconButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="inherit"
              onClick={handleClick}
              style={{ paddingLeft: "0px" }}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <Link
                  to="/account"
                  style={{
                    color: "white",
                  }}
                >
                  <ListItemText primary="계정" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText primary="로그아웃" />
              </StyledMenuItem>
            </StyledMenu>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
