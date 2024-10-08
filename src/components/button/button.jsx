const Label = ({ label }) => {
  
  const alertaLabel = () => {

    alert(`a label daquele botao é "${label}"`)
};


  return (
    <div>
      <button onClick={alertaLabel}>{label}</button>
    </div>
  );
};

export default Label;
