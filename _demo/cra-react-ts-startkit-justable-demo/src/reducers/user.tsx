import { DefaultUserName } from '../actions'
import { AnyAction } from 'redux'
interface IUserAction extends AnyAction {
  userName: string,
  password?: string | number
}
const userName = (state = DefaultUserName, action: IUserAction) => {
  const name = action.userName || DefaultUserName
  switch (action.type) {
    case 'SET_USERNAME': 
      return name
    default:
      return state
  }
}
export default userName
