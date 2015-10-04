import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
  let {x,y} = props;  // nactu hodnoty z props

  // styly pro jedno policko
  var styles = {
    width: '12.5%',
    height: '12.5%',
    backgroundColor: 'black',
    color: 'white'
  };

  if (x%2 === y%2) {
    styles.WebkitFilter = 'invert(100%)';
  }
  let clickHandler = () => props.onSquareClicked(x,y);
  return <div style={styles} onClick={clickHandler}>X</div>
}

class ChessBoard extends React.Component {
  togglePiece(x,y){
    console.log('Toggle Piece [%s, %s]', x, y);
  }

  render() {
    let squares = [];

    for (var i = 0; i < 64; i++) {
      squares.push(<Square key={i} x={i % 8} y={Math.floor(i/8)} onSquareClicked={this.togglePiece} />)
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

let rootElement = document.getElementById('root');
ReactDOM.render(
  <ChessBoard/>,
  rootElement
);
