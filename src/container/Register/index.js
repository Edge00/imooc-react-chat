import React, { PureComponent } from "react";
import Logo from '../../component/Logo'
import { InputItem, WingBlank, WhiteSpace, Radio, Button } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

export default class Register extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      type: 'genius'
    };
  }

  render () {
    return (
      <div>
        <Logo />
        <WingBlank>
          <InputItem type="">用户</InputItem>
          <InputItem type="password">密码</InputItem>
          <InputItem type="">确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type === 'genius'}>牛人</RadioItem>
          <RadioItem checked={this.state.type === 'BOSS'}>BOSS</RadioItem>
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </WingBlank>
        </div>
    );
  }
}
