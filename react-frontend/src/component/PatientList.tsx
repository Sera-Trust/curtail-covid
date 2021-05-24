import { Button, Grid, IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import axios from "axios";
import MaterialTable from "material-table";
import { withSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { failureToast } from "../util/util";
const PatientListComponent = (props: any) => {
  const [patientList, setPatientList] = useState<any>([]);
  const history = useHistory();
  const editPatient = (patient: any) => {
    history.push("/editPatient/" + patient.id);
    console.log(patient);
  };
  console.log("DatabaseComponent");
  const columns = [
    { show: false, title: "ID", field: "id" },
    {
      show: false,
      field: "firstName",
      title: "Name",
      render: (patient: any) => {
        return `${patient.firstName} ${patient.surname}`;
      },
    },
    { show: true, title: "Address", field: "address" },
    { show: true, title: "Phone Number", field: "phoneNumber" },
    { show: false, title: "Recent Date", field: "recentDate" },
    { show: true, title: "# of Days From Onset", field: "impor" },
    { show: true, title: "Covid Status", field: "covidStatus" },
    {
      show: true,
      title: "",
      field: "action",
      render: (patient: any) => {
        return (
          <IconButton
            style={{ width: "10px", height: "10px" }}
            aria-label="delete"
            onClick={() => {
              editPatient(patient);
            }}
          >
            <CreateIcon />
          </IconButton>
        );
      },
    },
  ];
  const fetchPatientList = () => {
    const url = "/api/v1/patient/all";
    axios
      .get(url)
      .then((response: any) => {
        setPatientList(response.data);
      })
      .catch((reponse: any) => {
        props.enqueueSnackbar(reponse.error, failureToast);
      });
  };
  useEffect(() => {
    fetchPatientList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const addNewPatient = () => {
    history.push("/newPatient");
  };
  return (
    <React.Fragment>
      <Grid item style={{ marginBottom: "20px", textAlign: "right" }} xs={12}>
        <Button onClick={addNewPatient} variant="outlined">
          Add new Patient
        </Button>
      </Grid>
      <Grid item xs={12} className="database-component">
        <MaterialTable
          tableRef={props.tableRef}
          padding="dense"
          columns={columns}
          data={patientList}
          options={{
            search: false,
            filtering: false,
            selection: false,
          }}
          components={{
            Toolbar: (props: any) => <div></div>,
          }}
        />
      </Grid>
    </React.Fragment>
  );
};
export const PatientList = withSnackbar(PatientListComponent);
