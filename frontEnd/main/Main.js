import React, {Component} from 'react';
import Footer from './Components/Footer.jsx';
import _ from 'underscore';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {

      return (

        <div className="mainFooterContainer">
          <div className="mainFooterWrapper">
            <Footer />
          </div>
        </div>
      )

    }
}

export default App;
