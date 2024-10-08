import "./texto.css";

const Texto = () => {
   const p = document.getElementById('paragrafo')
   p.innerText = `ESSE É O TEXTO`
}

const Button = ({children, color, text}) => {
  return (
    <>
    <button onClick={Texto}>
      {children}

    </button>
      <p id="paragrafo" style={{color: color, textTransform: text}}></p>
    </>
  );
};

Button.defaultProps = {
    color: 'blue',
    text: 'uppercase',
}

export default Button;

