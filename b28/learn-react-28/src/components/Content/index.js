function Content(props) {
      const {text, number, active} = props;
      return (
            <div className={"box " + (active ? "box--active" : "")}>
                  <h1>{text} - {number}</h1>
            </div>
      )
}
export default Content;