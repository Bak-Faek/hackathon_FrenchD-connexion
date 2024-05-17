import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./questionnaire.css";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Question() {
  const [selection, setSelection] = useState([]);

  const handleSelect = (event) => {
    const newSelection = event.target.value;
    setSelection((selection) => [...selection, newSelection]);
  };

  const selectionFinale = selection.toString();
  const case1 = "chamane1,coaching2,sport1";
  let path = selectionFinale === case1 ? "/shaman" : "";

  console.log(path);

  return (
    <div className="Q">
      <FormControl>
        <FormLabel id="firstQ">L&apos; essentiel pour vous est :</FormLabel>
        <RadioGroup row aria-labelledby="firstQ" name="row-radio-buttons-group">
          <FormControlLabel
            onClick={handleSelect}
            value="chamane1"
            control={<Radio />}
            label="La détente"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="coaching1"
            control={<Radio />}
            label="Sortir des sentiers"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="sport1"
            control={<Radio />}
            label="Etre guidé"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="disabled"
            disabled
            control={<Radio />}
            label="Autre"
          />
        </RadioGroup>

        <FormLabel id="secondQ">La déconnexion vous inspire : </FormLabel>
        <RadioGroup row aria-labelledby="firstQ" name="row-radio-buttons-group">
          <FormControlLabel
            onClick={handleSelect}
            value="chamane2"
            control={<Radio />}
            label="La spiritualié"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="coaching2"
            control={<Radio />}
            label="Le défoulememt"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="sport2"
            control={<Radio />}
            label="L'accompagnement"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="disabled"
            disabled
            control={<Radio />}
            label="Autre"
          />
        </RadioGroup>

        <FormLabel id="thirdQ">Vous aspirez à être : </FormLabel>
        <RadioGroup row aria-labelledby="firstQ" name="row-radio-buttons-group">
          <FormControlLabel
            onClick={handleSelect}
            value="chamane1"
            control={<Radio />}
            label="Seul"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="coaching1"
            control={<Radio />}
            label="En groupe"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="sport1"
            control={<Radio />}
            label="Peu-importe"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="disabled"
            disabled
            control={<Radio />}
            label="Autre"
          />
        </RadioGroup>
      </FormControl>
      <div className="buttonValidate">
        <Link to={path}>
          <Button
            className="valid"
            variant="contained"
            buttonValidate
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: 18,
              backgroundColor: "white",
              border: "1px solid black",
              marginBottom: "36px",
              transition:
                "box-shadow 0.3s, background-color 0.3s" /* Ajout de la transition pour background-color */,
              "&:active": {
                transform: "translateY(2px)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              },
              "&:hover": {
                backgroundColor:
                  "#43431F" /* Correction du background bleu sur hover */,
                color: "white",
              },
              cursor: "pointer",
            }}
          >
            VALIDER
          </Button>
        </Link>
      </div>
    </div>
  );
}
