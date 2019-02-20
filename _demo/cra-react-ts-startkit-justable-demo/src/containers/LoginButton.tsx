import { connect } from 'react-redux'
import { setUserName } from '../actions'
import { withRouter } from "react-router-dom"
import LoginButton from '../components/Login/LoginButton'

const mapStateToProps = (state: any, ownProps: any) => ({
  active: ownProps.userName === state.userName
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: () => { 
    dispatch(setUserName(ownProps.userName))
    ownProps.history.push('/home')
  }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton))
