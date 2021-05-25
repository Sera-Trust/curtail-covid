import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

export const PreviousReadings = (props: any) => {
  console.log(props.symptoms);
  return (
    <div>
      {props.symptoms && (
        <Paper>
          <TableContainer className="previous-reading">
            <Table
              aria-labelledby="tableTitle"
              size={"small"}
              aria-label="enhanced table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="center">Temperature</TableCell>
                  <TableCell align="center">Date and Time</TableCell>
                  <TableCell align="center">Oxygen Level</TableCell>
                  <TableCell align="center">Date and Time</TableCell>
                  <TableCell align="center">Symptoms</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.symptoms.map((row: any, index: any) => {
                  console.log(row);
                  return (
                    <TableRow hover key={row.id}>
                      <TableCell align="left"> {row.id}</TableCell>
                      <TableCell align="center">{row.temperature}</TableCell>
                      <TableCell align="center">
                        {row.temperatureDate} {row.temperatureTime}
                      </TableCell>
                      <TableCell align="center">{row.oxygenLevel}</TableCell>
                      <TableCell align="center">
                        {row.oxygenLevelDate} {row.oxygenLevelTime}
                      </TableCell>
                      <TableCell align="center">
                        Body Ache: {row.bodyAche ? "Yes" : "No"} | Fatigue :
                        {row.fatigue ? "Yes" : "No"} | Loss Of Taste:{" "}
                        {row.lossOfTaste ? "Yes" : "No"} | Loss Of Smell:{" "}
                        {row.lossOfSmell ? "Yes" : "No"}| Breathing Difficulty:{" "}
                        {row.breathingDifficulty ? "Yes" : "No"}| Sore Throat:{" "}
                        {row.soreThroat ? "Yes" : "No"}| Headache:{" "}
                        {row.headache ? "Yes" : "No"}| Nausea:{" "}
                        {row.nausea ? "Yes" : "No"}| Sneezing:{" "}
                        {row.sneezing ? "Yes" : "No"}| Diarrhea:{" "}
                        {row.diarrhea ? "Yes" : "No"}| Pulse:{" "}
                        {row.pulse ? "Yes" : "No"}| Blood Pressure:{" "}
                        {row.bloodPressure ? "Yes" : "No"}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
};
