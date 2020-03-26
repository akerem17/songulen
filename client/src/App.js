import React, { Component } from 'react';
import io from 'socket.io-client';
import './bakim.css';

const Comingsoon = '1-2';

class App extends Component {

  render() {
    if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
      return 'Uzgunum dostum, mobilde oynanmıyor...';
    }

    return (
      <div id="divs">
        <h1>Sunucu Bakımda!</h1>
        <h3>Merak Etmeyin, sunucu tekrar açıldığında son gülen olmaya devam edebileceksiniz!</h3>
        <h4>Tahmini bakım süresi: {Comingsoon} gün </h4>
      </div>
    );
  }
}

export default App;
