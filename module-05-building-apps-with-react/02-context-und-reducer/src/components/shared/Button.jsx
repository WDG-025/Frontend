const Button = ({ stegosaurus, children }) => {
  return (
    <button type='button' className={`btn btn-primary ${stegosaurus}`}>
      {children}
    </button>
  );
};
export default Button;
