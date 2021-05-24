import DashboardIcon from "@material-ui/icons/Dashboard";
import React from "react";
import { Patient } from "../component/Patient";
import { PatientList } from "../component/PatientList";
import { SignIn } from "../component/SignIn";

export const dashboardRoutes = [
  {
    path: "/editPatient/:id",
    name: "newPatient",
    icon: <DashboardIcon></DashboardIcon>,
    component: <Patient></Patient>,
    layout: "/newPatient",
  },
  {
    path: "/newPatient",
    name: "newPatient",
    icon: <DashboardIcon></DashboardIcon>,
    component: <Patient></Patient>,
    layout: "/newPatient",
  },
  {
    path: "/patientList",
    name: "patientList",
    icon: <DashboardIcon></DashboardIcon>,
    component: <PatientList></PatientList>,
    layout: "/patientList",
  },
  {
    path: "/signin",
    name: "Sign In",
    icon: <DashboardIcon></DashboardIcon>,
    component: <SignIn></SignIn>,
    layout: "/signin",
  },
  {
    path: "/",
    name: "Sign In",
    icon: <DashboardIcon></DashboardIcon>,
    component: <SignIn></SignIn>,
    layout: "/signin",
  },
];
