import React, { Component, Fragment } from 'react';

class Counter extends Component {
    componentWillMount(){
        console.log("components will mount(deprecated)")
    }
    componentDidMount(){
        console.log("components did mount called")
    }
    
    render() {
        return (
            <Fragment>
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <h1 className="text-info text-center">
                            Counter
                            </h1>
                            <p>
                                {this.props.counterProps}
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Counter;
