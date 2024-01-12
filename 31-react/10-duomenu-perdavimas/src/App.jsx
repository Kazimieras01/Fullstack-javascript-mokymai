import './App.css'
import TekstoBendras from './components/Pvz1/TekstoBendras';
import Parduotuve from './components/Pvz2/Parduotuve';
import Paslaugos from './components/Pvz3/Paslaugos';
import Grupe from './components/Pvz4/Grupe';
import Imone from './components/Pvz5/Imone';
import Savaite from './components/Pvz6/Savaite';
import Servisas from './components/Pvz7/Servisas';
import Tevinis from './components/Pvz0/Tevinis';
import Ferma from './components/Pvz1/Ferma';

function App() {
    return (
        <>
            <Ferma />
            <Tevinis />
            <TekstoBendras />
            <Parduotuve />
            <Paslaugos />
            <Grupe />
            <Imone />
            <Savaite />
            <Servisas />
        </>
    )
}

export default App 
