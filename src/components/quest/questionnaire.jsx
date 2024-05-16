
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./questionnaire.css"

export default function Question() {
  return (
    <FormControl>
      <FormLabel id="firstQ">l'essentiel est elle ailleur pour vous</FormLabel>
      <RadioGroup
        row
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane1" control={<Radio />} label="vercors" />
        <FormControlLabel value="coaching1" control={<Radio />} label="annecy" />
        <FormControlLabel value="sport1" control={<Radio />} label="connecticut" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>

      <FormLabel id="secondQ">shouaitez-vous suivre le guide coaching</FormLabel>
      <RadioGroup
        row
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane2" control={<Radio />} label="vercors" />
        <FormControlLabel value="coaching2" control={<Radio />} label="annecy" />
        <FormControlLabel value="sport2" control={<Radio />} label="connecticut" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>

      <FormLabel id="thirdQ">Quel adrénaline vous inspire</FormLabel>
      <RadioGroup
        row
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane1" control={<Radio />} label="vercors" />
        <FormControlLabel value="coaching1" control={<Radio />} label="annecy" />
        <FormControlLabel value="sport1" control={<Radio />} label="connecticut" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
  );
}


