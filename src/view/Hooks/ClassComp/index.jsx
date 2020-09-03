import React from 'react';

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {

    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>
                    你点击了
                    {count}
                    次
                </p>
                <button type="button" onClick={() => this.setState({ count: count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}

export default ClassComp;
