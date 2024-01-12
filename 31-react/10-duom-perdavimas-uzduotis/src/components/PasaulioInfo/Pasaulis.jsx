import Salis from './Salis'
const Pasaulis = () => {
  return (
    <div>
        <h2>Pasaulio super-valstybes:</h2>
        <Salis pav="Lietuva" zem="Pangejos"/>
        <Salis pav="Kavarskas" zem="Gondvanos" />
        <Salis pav='MiauMiau' zem="WufWuf"/>
    </div>
  )
}

export default Pasaulis