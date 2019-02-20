import * as React from "react"
import { withRouter } from "react-router-dom"

interface IProps {
  history: any;
  location: any;
  match: any;
  staticContext?: any;
};
interface INavItem {
  type: string,
  text: string,
  path: string,
  active: boolean
}
interface IState {
  navs: INavItem[];
};
class Sidebar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      navs: [{
        type: 'parent',
        text: '形状',
        path: '',
        active: false
      },
      {
        type: 'child',
        path: '/home/shape/circular',
        text: '圆形',
        active: true
      },
      {
        type: 'child',
        path: '/home/shape/square',
        text: '正方形',
        active: false
      },
      {
        type: 'parent',
        text: '颜色',
        path: '',
        active: false
      },
      {
        type: 'child',
        path: '/home/colors/red',
        text: '红色',
        active: false
      },
      {
        type: 'child',
        path: '/home/colors/blue',
        text: '蓝色',
        active: false
      }]
    }
  }
  public handleClick = (no: number) => {
    return (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const navs: INavItem[] = this.state.navs.map((o, i) => {
        if (no === i) {
          o.active = true
        } else {
          o.active = false
        }
        return o
      })
      this.setState({
        navs
      })
      this.props.history.push(navs[no].path)
    }
  }
  public render() {
    const navs = this.state.navs
    return (
      <ul className="menu">
        {navs.map(
          (o: INavItem, i: number) => <li key={i} className={`menu-item ${o.type} ${o.active?'active':''}`} onClick={this.handleClick(i)}>
            {o.text}
          </li>
        )}
      </ul>
    )
  }
}
export default withRouter(Sidebar)