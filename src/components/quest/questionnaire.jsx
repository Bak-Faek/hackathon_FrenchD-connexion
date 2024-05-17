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

  const shamanCases = [
    "chaman,coaching,chaman",
    "chaman,sport,chaman",
    "chaman,chaman,sport",
    "chaman,chaman,coaching",
    "coaching,chaman,chaman",
    "sport,chaman,chaman",
    "chaman,chaman,chaman",
  ];

  const amsrCases = [
    "coaching,coaching,sport",
    "coaching,coaching,chaman",
    "chaman,coaching,coaching",
    "sport,coaching,coaching",
    "coaching,chaman,coaching",
    "coaching,sport,coaching",
    "coaching,coaching,coaching",
  ];

  const experienceCases = [
    "sport,sport,sport",
    "sport,sport,chaman",
    "sport,sport,coaching",
    "chaman,sport,sport",
    "coaching,sport,sport",
    "sport,chaman,sport",
    "sport,coaching,sport",
  ];

  let path = "";

  if (shamanCases.includes(selectionFinale)) {
    path = "/shaman";
  } else if (amsrCases.includes(selectionFinale)) {
    path = "/relaxation";
  } else if (experienceCases.includes(selectionFinale)) {
    path = "/images";
  }

  return (
    <div className="Q">
      <FormControl>
        <FormLabel id="firstQ">
          Le plus important pour vous c&apos;est :
        </FormLabel>
        <RadioGroup column aria-labelledby="firstQ" name="row-radio-buttons-group">
          <FormControlLabel
            onClick={handleSelect}
            value="chaman"
            control={<Radio />}
            label="La détente"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="coaching"
            control={<Radio />}
            label="Sortir des sentiers"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="sport"
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
        <RadioGroup column aria-labelledby="firstQ" name="row-radio-buttons-group">
          <FormControlLabel
            onClick={handleSelect}
            value="chaman"
            control={<Radio />}
            label="La spiritualié"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="coaching"
            control={<Radio />}
            label="Le défoulememt"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="sport"
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
        <RadioGroup colomn aria-labelledby="firstQ" name="row-radio-buttons-group">
          <FormControlLabel
            onClick={handleSelect}
            value="chaman"
            control={<Radio />}
            label="Seul"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="coaching"
            control={<Radio />}
            label="En groupe"
          />
          <FormControlLabel
            onClick={handleSelect}
            value="sport"
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
