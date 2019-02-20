import * as React from "react"
import { ILoginButtonProps } from "../../types"
const LoginButton = ({ onClick }: ILoginButtonProps) => {
  return <button className="form-button" onClick={onClick}>登陆</button>
}
export default LoginButton