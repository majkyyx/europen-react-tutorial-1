import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
  let {x,y} = props;  // nactu hodnoty z props. V renderovani ChessBoard posilam i props.piece (pro klikani, tim se nacte pismenko)

  // styly pro jedno policko
  var styles = {
    width: '12.5%',
    height: '12.5%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center'
  };

  if (x%2 === y%2) {
    styles.WebkitFilter = 'invert(100%)'; // bily policko
  }
  let clickHandler = () => props.onSquareClicked(x,y);
  return <div style={styles} onClick={clickHandler}>{props.piece}</div>
}

// Smart komponenta
class ChessBoard extends React.Component {
  constructor() {
    super(...arguments); // musi to tam byt, jinak se to rozbije

    this.state = {pieces: [] };
  }
  togglePiece(x,y){
    let pieces = this.state.pieces;
    let index = (y * 8) + x;
    pieces[index] = '♕';
    this.setState({pieces})
    console.log('Toggle Piece [%s, %s], objevi se neco: ', x, y, pieces[index]);
  }

  componentDiDMount() {
    console.log("square componentDiDMount ");
  }
  componentWillMount() {
    console.log("square componentWillMount ");
  }
  render() {
    let squares = [];

    for (var i = 0; i < 64; i++) {
      squares.push(<Square
                    key={i} x={i % 8} y={Math.floor(i/8)}
                    onSquareClicked={this.togglePiece.bind(this)} // v this muze byt uplne jiny objekt. Tim zajistim, ze this, kterej v Square pouzivam je prave ten ChessBoard.state.pieces
                    piece={this.state.pieces[i]}
                    />)
    }

    var styles = {
      width: 300,
      height: 300,
      display: 'flex',
      flexWrap: 'wrap'
    };
    return <div style={styles}>{squares}</div>
  }
}

// zapojeni vseho nahore
let rootElement = document.getElementById('root');
ReactDOM.render(
  <ChessBoard/>, rootElement
);
