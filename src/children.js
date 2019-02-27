import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from './Content'

export default class Children extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  componentDidMount () {

  }

  render() {
    const { children } = this.props;
    return (
      <div className={'sass--app'}>
        {/*<Navigation/>*/}
        <Content body={children}/>
       {/* <Footer/>*/}
      </div>
    );
  }
}

