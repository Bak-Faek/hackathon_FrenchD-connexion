
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./questionnaire.css"

export default function Question() {
  return (
    <div className='Q'>
<FormControl>
      <FormLabel id="firstQ">L&apos; essentiel pour vous est :</FormLabel>
      <RadioGroup
        row
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane1" control={<Radio />} label="La détente" />
        <FormControlLabel value="coaching1" control={<Radio />} label="Sortir des sentiers" />
        <FormControlLabel value="sport1" control={<Radio />} label="Etre guidé" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="Autre"
        />
      </RadioGroup>

      <FormLabel id="secondQ">La déconnexion vous inspire : </FormLabel>
      <RadioGroup
        row
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane2" control={<Radio />} label="La spiritualié" />
        <FormControlLabel value="coaching2" control={<Radio />} label="Le défoulememt" />
        <FormControlLabel value="sport2" control={<Radio />} label="L'accompagnement" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="Autre"
        />
      </RadioGroup>

      <FormLabel id="thirdQ">Vous aspirez à être : </FormLabel>
      <RadioGroup
        row
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane1" control={<Radio />} label="Seul" />
        <FormControlLabel value="coaching1" control={<Radio />} label="En groupe" />
        <FormControlLabel value="sport1" control={<Radio />} label="Peu-importe" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="Autre"
        />
      </RadioGroup>
    </FormControl>
    </div>
  );
}


