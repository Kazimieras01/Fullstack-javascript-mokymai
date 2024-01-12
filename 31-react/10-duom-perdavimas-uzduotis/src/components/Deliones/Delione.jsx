import PropTypes from 'prop-types';

function Delione(props) {
  const { dalykai } = props;

  const checkDifficulty = (dalykai) => {
    if (dalykai.kiekis <= 500) {
      return 'lengva';
    } else if (dalykai.kiekis <= 1000) {
      return 'vidutinė';
    } else {
      return 'sunki';
    }
  };

  return (
    <div>
      <p>Pavadinimas: {dalykai.pavadinimas}</p>
      <p>Detales: {dalykai.kiekis}</p>
      <p>Plotis: {dalykai.plotis} cm</p>
      <p>Aukštis: {dalykai.aukstis} cm</p>
      <p>Sudėtingumas: {checkDifficulty(dalykai)}</p>
    </div>
  );
}

Delione.propTypes = {
  dalykai: PropTypes.shape({
    pavadinimas: PropTypes.string.isRequired,
    kiekis: PropTypes.number.isRequired,
    plotis: PropTypes.number.isRequired,
    aukstis: PropTypes.number.isRequired,
  }).isRequired,
};

export default Delione;