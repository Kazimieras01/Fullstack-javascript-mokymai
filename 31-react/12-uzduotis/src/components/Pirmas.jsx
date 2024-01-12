import { useState } from "react";

const Pirmas = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [svgCoordinates, setSvgCoordinates] = useState({ x: 0, y: 0 });
  const [ingredients, setIngredients] = useState({
    vista: [
      { name: "vistiena", unit: "g", quantity: 200 },
      { name: "salotos", unit: "vnt", quantity: 2 }
    ],
    tortas: [
      { name: "melyniu", unit: "g", quantity: 50 },
      { name: "kiausiniai", unit: "vnt", quantity: 3 },
      { name: "miltai", unit: "g", quantity: 250 }
    ],
    makaronai: [
      { name: "makaronai", unit: "g", quantity: 300 },
      { name: "mėsa", unit: "g", quantity: 400 },
      { name: "pomidorai", unit: "vnt", quantity: 4 }
    ]
  });
  const [quantity, setQuantity] = useState(0);

  const handleDivClick = (divId, event) => {
    const rect = event.target.getBoundingClientRect();
    setSelectedDiv(divId);
    setSvgCoordinates({ x: rect.right + window.scrollX - 17, y: rect.top + window.scrollY - 10 });

    setIngredientsForRecipe(divId);
  };

  const setIngredientsForRecipe = (recipe) => {
    // Update the ingredients for the selected recipe
    switch (recipe) {
      case 'vista':
        setIngredients({ vista: [{ name: "Vistiena", unit: " g", quantity: 200 }, { name: "Salotos", unit: " g", quantity: 200 }] });
        break;
      case 'tortas':
        setIngredients({ tortas: [{ name: "Melyniu", unit: " g", quantity: 50 }, { name: "Kiausiniai", unit: " vnt", quantity: 1 }, { name: "Miltai", unit: " g", quantity: 250 }, { name: "Cukrus", unit: " sauksteliu", quantity: 1 }] });
        break;
      case 'makaronai':
        setIngredients({ makaronai: [{ name: "Makaronai", unit: " g", quantity: 300 }, { name: "Mėsa", unit: " g", quantity: 400 }, { name: "Pomidoru padazas", unit: " g", quantity: 100 }] });
        break;
      default:
        setIngredients({});
        break;
    }
  };

  const handleRangeChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const calculateTotalIngredients = () => {
    const totalIngredients = {};

    if (selectedDiv) {
      ingredients[selectedDiv].forEach((ingredient) => {
        const { name, unit, quantity: defaultQuantity } = ingredient;
        const totalQuantity = defaultQuantity * quantity;

        totalIngredients[name] = `${totalQuantity}${unit}`;
      });
    }

    return totalIngredients;
  };

  return (
    <div>
      <div id="pirmas">
        <h3>Pasirinkite recepta:</h3>
      <div id="rec">
        <div id="vista" className="card" onClick={(event) => handleDivClick('vista', event)}>
          <img src="../src/assets/vistiena.jpg" alt="" />
          <h4>Vistiena su salotom</h4>
          <p>Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.</p>
        </div>
        <div id="tortas" className="card" onClick={(event) => handleDivClick('tortas', event)}>
          <img src="../src/assets/tortas.jpg" alt="" />
          <h4>Tortas su melynem</h4>
          <p>Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.</p>
        </div>
        <div id="makaronai" className="card" onClick={(event) => handleDivClick('makaronai', event)}>
          <img src="../src/assets/makaronai.jpg" alt="" />
          <h4>Makaronai su mesa</h4>
          <p>Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.</p>
        </div>
        {selectedDiv && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            style={{ position: "absolute", left: svgCoordinates.x, top: svgCoordinates.y }}
          >
            <circle cx="12.5" cy="12.5" r="12.5" fill="#0FC261" />
            <line x1="6.35355" y1="9.64645" x2="12.3536" y2="15.6464" stroke="white" />
            <line x1="11.6464" y1="15.6464" x2="19.6464" y2="7.64645" stroke="white" />
          </svg>
        )}
      </div>
      
    </div>
    <div id="antras">
        <h3>Kiek porciju gaminsite?</h3><p> {quantity}</p>
        <input type="range" min="0" max="10" value={quantity} onChange={handleRangeChange} />
    </div>
    <div id="trecias">
        <h3>Jums reikes siu ingredientu, tokiais kiekiais:</h3>
        {selectedDiv && (
          <ul>
            {Object.entries(calculateTotalIngredients()).map(([ingredient, totalQuantity], index) => (
              <li key={index}>
                {ingredient}: <strong>{totalQuantity}</strong></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pirmas;