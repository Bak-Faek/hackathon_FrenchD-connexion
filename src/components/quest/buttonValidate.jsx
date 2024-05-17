import "./buttonValidate.css"
import Button from '@mui/material/Button';

function ButtonValidate() {
    return (
      <Button
        className='valid'
        variant='contained'
        buttonValidate
        sx={{
          height: '150%',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 18,
          backgroundColor: 'white',
          border: '1px solid black',
          marginBottom: '36px',
          transition:
            'box-shadow 0.3s, background-color 0.3s' /* Ajout de la transition pour background-color */,
          '&:active': {
            transform: 'translateY(2px)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          },
          '&:hover': {
            backgroundColor:
              '#43431F' /* Correction du background bleu sur hover */,color:'white',
          },
          cursor: 'pointer',
        }}
      >
        VALIDER
      </Button>
    );
}



export default ButtonValidate