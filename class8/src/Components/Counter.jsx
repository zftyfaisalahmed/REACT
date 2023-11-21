import React, { Component, Fragment } from 'react';
import  ReactDOM  from 'react-dom';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            isActive : false
        }
    }
    componentWillMount(){
        console.log("components will mount(deprecated)")
    }
    componentDidMount(){
        console.log("components did mount called")
    }

    componentWillReceiveProps(nP, nC){
        console.log("Components recieve props")
        console.log("New Props = ", nP)
        console.log("New State", nC)

        if(nP.counterProps >= 10){
            this.setState({
                isActive : true
            })
        }
    }

    shouldComponentUpdate(nP, nS){
        console.log('Should Update?')
        console.log('new Props0', nP)
        console.log('new State0', nS)
        return true;
    }

    componentWillUpdate(nP, nC){
        console.log("Conponents will update")
        console.log('new Props1',nP)
        console.log('new State1',nC)
    }

    updateCounter(){
        ReactDOM.render(
            <React.StrictMode>
                <Counter counterProps={this.props.counterProps + 1}/>
            </React.StrictMode>,
            document.getElementById("renderHere")
        )
    }

    render() {
        console.log("This is render Method..!")
        return (
            <Fragment>
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <h1 className="text-info text-center">
                            Counter
                            </h1>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h1>
                                {this.props.counterProps}
                            </h1>
                            <div className="lead p-3 border text-cente">
                                {
                                    this.state.isActive ? <h1 className='text-success'>
                                        WELCOME TO LIFESTYLE
                                    </h1> : (
                                        <button className="btn btn-outline-info" onClick={this.updateCounter.bind(this)}>
                                            Update
                                        </button>
                                    )
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    
    componentDidUpdate(oP, oC){
        console.log('components did update')
        console.log('old props', oP)
        console.log('old state', oC)
    }
    componentWillUnmount(){
        console.log('components successfully unmounted')
    }

}

export default Counter;
