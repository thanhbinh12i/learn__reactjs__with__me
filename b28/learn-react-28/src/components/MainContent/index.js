import logo from './logo.svg';
function MainContent() {
      let name = "Thanh Bình";
      const css = {
            color: "red"
      }
      const bg = {
            backgroundColor: 'black'
      }
      return (
            <>
                  <div style={bg}>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p style={css}>
                              Hello {name}
                        </p>
                  </div>
            </>
      )
}
export default MainContent;