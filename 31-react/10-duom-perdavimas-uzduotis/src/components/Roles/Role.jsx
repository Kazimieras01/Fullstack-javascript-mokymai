function Role(props) {
  const { roleName, userCount } = props;

  const checkUserCount = () => {
    if (userCount >= 20) {
      return 'Vartotojų kiekis didelis';
    } else {
      return 'Vartotojų kiekis mažas';
    }
  };

  return (
    <div>
      <h4>Rolės pavadinimas: {roleName}</h4>
      <p>Vartotojų kiekis: {userCount}</p>
      <p>{checkUserCount()}</p>
    </div>
  );
}

export default Role;