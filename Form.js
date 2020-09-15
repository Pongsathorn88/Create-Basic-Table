import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "12ch",
    },
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState(data);

  const data = {
    // 
    TotalPieces: "",
    TotalCW: "",
    TotalGW: "",
    TotalM3: "",
  };

  const [TotalPieces, setTotalPieces] = React.useState(0);
  const [TotalCW, setTotalCW] = React.useState(0);
  const [TotalGW, setTotalGW] = React.useState(0);
  const [TotalM3, setTotalM3] = React.useState(0);
  const [Pieces, setPieces] = React.useState(0);
  const [Length, setLength] = React.useState(0);
  const [Width, setWidth] = React.useState(0);
  const [Height, setHeight] = React.useState(0);
  const [CW, setCW] = React.useState(0);
  const [GW, setGW] = React.useState(0);
  const [M3, setM3] = React.useState(0);
  const [volumeWG, setVolumeWG] = React.useState(0);

  const handleChange = (prop) => (event) => {
    //
    setValues({ ...values, [prop]: event.target.value });
  };

  const calculatorCW = () => {
    if (volumeWG > GW) {
      setCW(volumeWG);
      return volumeWG;
    } else {
      setCW(GW);
      return GW;
    }
  };

  const calculatorM3 = () => {
    const m3 = (length * Width * Height) / 1000000;
    setM3(m3);
    return m3;
  };

  const calculatorVolumeWg = () => {
    const volumeWg = (length * Width * Height) / 6000;
    setVolumeWG(volumeWg);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="Total Pieces"
        label="Total Pieces"
        value={TotalPieces}
        onChange={(event) => setTotalPieces(event.target.value)}
      />
      <TextField
        id="Total CW"
        label="Total CW"
        value={TotalCW}
        onChange={(event) => setTotalCW(event.target.value)}
      />
      <TextField
        id="Total GW"
        label="Total GW"
        value={TotalGW}
        onChange={(event) => setTotalGW(event.target.value)}
      />
      <TextField
        id="Total M3"
        label="Total M3"
        value={TotalM3}
        onChange={(event) => setTotalM3(event.target.value)}
      />
      <br />
      <TextField
        id="Pieces"
        label="Pieces"
        value={Pieces}
        onChange={(event) => setPieces(event.target.value)}
      />
      <TextField
        id="Length"
        label="Length"
        value={Length}
        onChange={(event) => setLength(event.target.value)}
      />
      <TextField
        id="Width"
        label="Width"
        value={Width}
        onChange={(event) => setWidth(event.target.value)}
      />
      <TextField
        id="Height"
        label="Height"
        value={Height}
        onChange={(event) => setHeight(event.target.value)}
      />
      <TextField
        id="CW"
        label="CW"
        value={calculatorCW()}
        // onChange={(event) => setCW(event.target.value)}
        disabled={true}
      />
      <TextField
        id=" GW"
        label="GW"
        value={GW}
        onChange={(event) => setGW(event.target.value)}
      />
      <TextField
        id="M3"
        label="M3"
        value={calculatorM3()}
        // onChange={(event) => setM3(event.target.value)}
        disabled={true}
      />
    </form>
  );
}
