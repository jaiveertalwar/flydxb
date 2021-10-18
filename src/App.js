import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">LOGO</a>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for DXB.</h1>
            <p>EK 505 on December 11 2021. .</p>
      <div data-type="countdown" data-id="2824702" class="tickcounter" style="width: 100%; position: relative; padding-bottom: 25%"><a href="//www.tickcounter.com/countdown/2824702/my-countdown" title="My countdown">My countdown</a><a href="//www.tickcounter.com/" title="Countdown">Countdown</a></div><script>(function(d, s, id) { var js, pjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//www.tickcounter.com/static/js/loader.js"; pjs.parentNode.insertBefore(js, pjs); }(document, "script", "tickcounter-sdk"));</script>
          </div>
          <a href="https://dxb.jtlr.tech">
            <div className="cta">JTLR DXB</div>
          </a>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;
