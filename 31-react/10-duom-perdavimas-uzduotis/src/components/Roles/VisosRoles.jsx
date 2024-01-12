import Role from './Role';

function VisosRoles() {
  const rolesData = [
    { pavadinimas: 'Administratorius', vartotojuKiekis: 15 },
    { pavadinimas: 'Vartotojas', vartotojuKiekis: 25 },
    { pavadinimas: 'Moderatorius', vartotojuKiekis: 18 },
  ];

  return (
    <div>
      {rolesData.map((role, index) => (
        <Role key={index} roleName={role.pavadinimas} userCount={role.vartotojuKiekis} />
      ))}
    </div>
  );
}

export default VisosRoles;