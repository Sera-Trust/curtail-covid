import { Box, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { dashboardRoutes } from "../routes/curtail-covid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Dashboard() {
  const history = useHistory();
  const classes = useStyles();
  const navigate = () => {
    history.push("/patientList");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            onClick={navigate}
            style={{ cursor: "pointer" }}
          >
            Curtail Covid
          </Typography>
          <Box ml={2}>
            <Button>
              <Typography style={{ color: "white" }}>Home</Typography>
            </Button>
          </Box>
          <Box ml={2}>
            <Button>
              <Typography style={{ color: "white" }}>Cluster</Typography>
            </Button>
          </Box>
          <Box ml={2}>
            <Button onClick={navigate}>
              <Typography style={{ color: "white" }}>Curtail Covid</Typography>
            </Button>
          </Box>
          <Box ml={2}>
            <Button>
              <Typography style={{ color: "white" }}>Partner</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <Grid container style={{ marginTop: "80px" }}>
            <Switch>
              {dashboardRoutes.map((route: any) => {
                return (
                  <Route path={route.path} key={route.path} exact>
                    {route.component}
                  </Route>
                );
              })}
            </Switch>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
