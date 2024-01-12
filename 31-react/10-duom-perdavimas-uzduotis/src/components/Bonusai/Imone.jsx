import Darbuotojas from './Darbuotojas';

function Imone() {
  const employeesData = [
    { vardas: 'Jonas', pavarde: 'Jonaitis', bonusas: 50 },
    { vardas: 'Petras', pavarde: 'Petraitis', bonusas: 0 },
    { vardas: 'Ona', pavarde: 'Onaite', bonusas: 120 },
  ];

  return (
    <div id='imone'>
        <h2>Saraskino kontora</h2>
      {employeesData.map((employee, index) => (
        <Darbuotojas
          key={index}
          darbuotojoVardas={employee.vardas}
          darbuotojoPavarde={employee.pavarde}
          kalėdinioBonusoDydis={employee.bonusas}
        />
      ))}
    </div>
  );
}

export default Imone;