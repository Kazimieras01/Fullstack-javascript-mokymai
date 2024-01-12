function Darbuotojas(props) {
    const { darbuotojoVardas, darbuotojoPavarde, kalėdinioBonusoDydis } = props;
  
    const checkBonusSize = () => {
      if (kalėdinioBonusoDydis === 0) {
        return 'Gaila';
      } else if (kalėdinioBonusoDydis > 0 && kalėdinioBonusoDydis < 100) {
        return 'Bent ant kebabo užmetė...';
      } else {
        return 'Nu, jau kažkas geriau';
      }
    };
  
    return (
      <div>
        <p>Darbuotojo vardas: <strong>{darbuotojoVardas}</strong></p>
        <p>Darbuotojo pavardė: <strong>{darbuotojoPavarde}</strong></p>
        <p>Kalėdinio bonoso dydis: <strong>{kalėdinioBonusoDydis}</strong></p>
        <p><strong>{checkBonusSize()}</strong></p>
      </div>
    );
  }
  
  export default Darbuotojas;