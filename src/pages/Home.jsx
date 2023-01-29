import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>        
        <Navbar />
        <br />
        <br />
        <Jumbotron title="Park Wednesday" subtitle="Some's gotta show up!" />
        <div className="container">
          <h2>Welcome</h2>
          <p>
            Bring ur blanket, some bottles, and a blunt cuz what else is there to do on Wednesday.  Come on, we're hanging!
          </p>
          <p>
            Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida urna, at pretium dui turpis non lorem. Donec pretium lorem ipsum, at fermentum nibh consequat facilisis. Sed maximus massa est, vel porta diam placerat id. Vivamus imperdiet lorem eget dolor bibendum, eget gravida tellus interdum. Sed lectus odio, condimentum eu porttitor vel, euismod sit amet urna. Nam quis dui a nibh rhoncus aliquam vitae in metus. Nam sit amet semper turpis. Suspendisse eu malesuada tortor, vel lacinia nisl. Phasellus ultrices vehicula magna, sed tempor neque dapibus quis. Phasellus urna justo, sollicitudin ac odio eget, convallis varius nulla. Vivamus in lacinia lorem, at eleifend nulla. Nulla nec luctus purus. Integer id purus mauris. Phasellus finibus ultricies erat a tempus. Nulla luctus sem nec justo venenatis, eu faucibus purus congue.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home
