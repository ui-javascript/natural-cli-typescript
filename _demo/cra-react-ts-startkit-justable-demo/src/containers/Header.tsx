import { connect } from 'react-redux'
import Header from '../components/Home/Header'
import { withRouter } from "react-router-dom"

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    userName: state.userName
  }
}

export default withRouter(connect(
  mapStateToProps
)(Header))
