import React, { PureComponent } from "react";
import logoImg from './job.png';
import './index.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo-container">
        <img src={logoImg} alt="" />
      </div>
    );
  }
}
