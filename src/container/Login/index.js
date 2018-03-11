import React, { PureComponent } from "react";
import Logo from '../../component/Logo'
import { InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

export default class Login extends PureComponent {

  register = () => {
    this.props.history.push('/register');
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Logo />
        <h2>登录</h2>
        <WingBlank>
          <InputItem>用户</InputItem>
          <InputItem>密码</InputItem>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
};
