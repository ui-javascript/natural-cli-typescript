import * as React from "react"

interface ISquare {
  width: string,
  height: string,
  margin: string,
  animateDuration: string,
  color: string
}
class Square extends React.Component<{}> {
  private colors: string[] = [
    '176, 215, 251',
    '251, 220, 176',
    '192, 251, 176',
    '251, 190, 176',
    '176, 199, 251',
    '255, 246, 143',
    '255, 192, 203',
    '255, 187, 255',
    '255, 110, 180',
    '28, 216, 210',
    '221, 94, 137',
    '248, 205, 218'
  ]
  constructor(props: {}) {
    super(props)
  }
  public circulars (): ISquare[] {
    return new Array(24).fill(null).map(() => {
      const num = Math.round(150 * Math.random() + 50)
      return {
        width: `${num}px`,
        height: `${num}px`,
        margin: `${Math.round(Math.random() * 10 + 2)}px`,
        animateDuration: `${Math.random() + 0.7}s`,
        color: this.colors[Math.round(Math.random() * (this.colors.length - 1))]
      }
    })
  }
  public render() {
    const circulars = this.circulars()
    return (
      <div>
        {
          circulars.map((o: ISquare, i: number) =>
            <div key={i} className={`animated bounce`} style={{display: 'inline-block', 'animationDuration': o.animateDuration, margin: o.margin, width: o.width, height: o.height, 'backgroundColor': `rgb(${o.color})`}}/>)
        }
      </div>
    )
  }
}
export default Square