import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import Categories from "../data/Categories";



import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";

//import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(  ({
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  NavLinks: {
    display: "flex",
    justifyContent: "center",
    flexGrow: "3",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav>
      <div className="flex flex-row-reverse ">
        <AppBar>
          <Toolbar>
            
            <Typography variant="h5" className={classes.logo}>
              <Link to="/">TurisTienda</Link>
            </Typography>

            <Typography>
              <div className={classes.NavLinks}>
                
                {/* <Link to="/" className={classes.link}>
                  Inicio
                </Link> */}

                <Link to="/Excursiones" className={classes.link}>
                  Excursiones
                </Link>

                <div>
                  {Categories.map((category) => {
                    return (
                      <div key={category.id}>
                        <NavLink to={category.address} activeclassname="active">
                          {category.name}
                        </NavLink>
                      </div>
                    );
                  })}
                </div>

                <Link to="/Antartida" className={classes.link}>Antártida</Link>

                <Link to="/Contacto" className={classes.link}>Contacto</Link>

                <CartWidget />
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
};

export default NavBar;
