import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; // to make wrapers we have to give them the props.children that they can render tags
};

export default Card;
