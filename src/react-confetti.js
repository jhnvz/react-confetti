import React from 'react'
import confetti from './confetti'

export default class ReactConfetti extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    numberOfPieces: PropTypes.number,
    confettiSource: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      w: PropTypes.number,
      h: PropTypes.number,
    }),
    friction: PropTypes.number,
    wind: PropTypes.number,
    gravity: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    opacity: PropTypes.number,
    recycle: PropTypes.bool,
    run: PropTypes.bool,
  }

  static defaultProps = {
    numberOfPieces: 200,
    confettiSource: {},
    friction: 0.99,
    wind: 0,
    gravity: 0.1,
    colors: [
      '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
      '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
      '#FF5722', '#795548',
    ],
    opacity: 1.0,
    recycle: true,
    run: true,
  }

  componentDidMount() {
    this.confetti = confetti(this.canvas)
      .numberOfPieces(this.props.numberOfPieces)
      .confettiSource(this.props.confettiSource)
      .friction(this.props.friction)
      .wind(this.props.wind)
      .gravity(this.props.gravity)
      .colors(this.props.colors)
      .opacity(this.props.opacity)
      .recycle(this.props.recycle)
      .run(this.props.run)()
  }

  componentWillReceiveProps(nextProps) {
    this.confetti
      .numberOfPieces(nextProps.numberOfPieces)
      .confettiSource(nextProps.confettiSource)
      .friction(nextProps.friction)
      .wind(nextProps.wind)
      .gravity(nextProps.gravity)
      .colors(nextProps.colors)
      .opacity(nextProps.opacity)
      .recycle(nextProps.recycle)
      .run(nextProps.run)
  }

  render() {
    const {
      width,
      height,
      style,
      /* eslint-disable no-unused-vars */
      numberOfPieces,
      friction,
      wind,
      gravity,
      colors,
      opacity,
      recycle,
      confettiSource,
      run,
      /* eslint-enable no-unused-vars */
      ...passedProps
    } = this.props
    const canvasStyles = Object.assign({}, {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      WebkitPointerEvents: 'none',
      MozPointerEvents: 'none',
    }, style)

    return (
      <canvas
        width={width}
        height={height}
        ref={c => { this.canvas = c }}
        style={canvasStyles}
        {...passedProps}
      />
    )
  }
}
