import React from 'react';

class Hello extends React.Component{
  render(){
    return (
      <p>Hello {this.props.name} !!</p>
    );
  }
}
Hello.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Hello;
