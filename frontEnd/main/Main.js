import React, {Component} from 'react';
import Footer from './Components/Footer.jsx';
import _ from 'underscore';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {

  }
  render() {

      return (

        <div className="mainFooterContainer">
          <Footer />
        </div>
      )

    }
}

export default App;
