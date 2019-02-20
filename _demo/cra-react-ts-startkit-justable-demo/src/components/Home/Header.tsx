import * as React from "react"

const Header = ({ userName, history }: any) => {
  const onClick = () => {
    history.push('/')
  }
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="title animated slower infinite rubberBandDelay">{ userName }</h2>
      </div>
      <div className="header-right">
        <a className="router-link-active" href="javascript:void(0)" onClick={onClick}>登出</a>
      </div>
    </header>
  )
}
  

export default Header
