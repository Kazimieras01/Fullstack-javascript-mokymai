function Automobilis(props) {
  const { automobilis } = props;

  return (
    <div>
      <p>Markė: {automobilis.marke}</p>
      <p>Modelis: {automobilis.modelis}</p>
      <p>Metai: {automobilis.metai}</p>
      <p>Rida: {automobilis.rida}</p>
      <p>Prašoma suma: {automobilis.piniguSuma}</p>
      {/* Render other properties of the car */}
    </div>
  );
}

export default Automobilis;