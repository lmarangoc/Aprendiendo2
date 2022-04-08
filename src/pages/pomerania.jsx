import React from "react";
import 'styles/styles.css';

const PomeraniaInfoPage = () => {
  return (
    <div>
      <div>Página de información del Pomerania</div>
      <form className="form">
        <input className="input" type="text" required />
        <input className="input" type="password" />
        <input className="input" type="email" />
        <input className="input" type="file" />
        <button>Summit</button>
      </form>
    </div>
  )
}

export default PomeraniaInfoPage;