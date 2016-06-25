import React, { Component } from 'react';

export default class Relise extends Component {
  render() {
      const reliseName = this.props.params.relise.replace(/-/g,' ');
      return (
        <div className='col-md-12'>
          {reliseName}
        </div>
    )
  }
}
