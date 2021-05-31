import { Box, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { dashboardRoutes } from "../routes/curtail-covid";

export default function Dashboard() {
  const history = useHistory();
  const navigate = () => {
    history.push("/patientList");
  };
  return (
    <React.Fragment>
      <AppBar
        position="static"
        style={{ minWidth: "100Vw", overflowX: "auto" }}
      >
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
    </React.Fragment>
  );
}
