
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
      <FormLabel id="firstQ">L&apos;essentiel pour vous est:</FormLabel>
      <RadioGroup
       column
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane1" control={<Radio />} label="la détente" />
        <FormControlLabel value="coaching1" control={<Radio />} label="Sortir des sentiers" />
        <FormControlLabel value="sport1" control={<Radio />} label="être guidé" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>

      <FormLabel id="secondQ">La deconnexion vous inspire: </FormLabel>
      <RadioGroup
        column
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane2" control={<Radio />} label="la spiritualié" />
        <FormControlLabel value="coaching2" control={<Radio />} label="le défoulememt" />
        <FormControlLabel value="sport2" control={<Radio />} label="l'accompagnement" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>

      <FormLabel id="thirdQ">Vous aspirez à être: </FormLabel>
      <RadioGroup
        column
        aria-labelledby="firstQ"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="chamane1" control={<Radio />} label="seul" />
        <FormControlLabel value="coaching1" control={<Radio />} label="en groupe" />
        <FormControlLabel value="sport1" control={<Radio />} label="peu-importe" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
    </div>
    
  );
}


