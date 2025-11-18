// * Wiederverwendbare Card-Komponente
// # Kapselt ein Layout und rendert beliebige Kinder über props.children
const Card = (props) => {
  console.log(props);

  // ? Alles, was zwischen <Card> ... </Card> steht, landet hier als props.children
  return <div className="bg-amber-700">{props.children}</div>;
};
export default Card;
