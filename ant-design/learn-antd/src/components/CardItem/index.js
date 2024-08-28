import "./CardItem.scss"
function CardItem(props){
      const {title, style} = props;
      return (
            <>
               <div className="card__item" style={style}>
                  {title && <h4>{title}</h4>}
               </div>
            </>
      )
}
export default CardItem;