import * as React from 'react'
import LoginButton from "../../containers/LoginButton";

class Login extends React.Component {
  public state = {
    userName: '',
    password: ''
  }
  public handleChange = (event: any): void => {
    const target = event.target;
    const type = target.type;
    if (type === 'text') {
      this.setState({
        userName: target.value
      })
    } else {
      this.setState({
        password: target.value
      })
    }
  }
  public render() {
    return (
      <form autoComplete="off">
        <div className="form-group">
          <label>用户名</label>
          <input type="text" className="form-input" value={this.state.userName} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label>密码</label>
          <input type="password" className="form-input" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div className="form-group" style={{textAlign: "center"}}>
          <LoginButton userName={this.state.userName}/>
        </div>
      </form>
    )
  }
}

export default Login
