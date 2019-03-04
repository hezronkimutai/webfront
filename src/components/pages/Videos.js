import React, { Component } from 'react';

class Videos extends Component {
  render(){
  return (
    <React.Fragment>
    <h1>Videos</h1>
    {
      this.props.resultyt.map((link, i) =>{
        console.log(link);
        var frame = <div key={i}><iframe  width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
          return frame;
      })

    }
    {this.frame}


    </React.Fragment>
  )
}
}

export default Videos;
