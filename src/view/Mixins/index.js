import React from 'react';
import reactMixin from 'react-mixin';
import mixins from 'src/mixins';

@reactMixin.decorate(mixins)
class Mixins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.$http.post('/product/updata', {
      username: 'Fred',
      password: 'Flintstone',
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h3>mixins</h3>
      </div>
    );
  }
}

export default Mixins;
