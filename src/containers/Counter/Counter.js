import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.addCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.removeCounter(5)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({ type: 'INCREMENT' }),
        decrementCounter: () => dispatch({ type: 'DECREMENT' }),
        addCounter: (value) => dispatch({ type: 'ADD', value: value }),
        removeCounter: (value) => dispatch({ type: 'REMOVE', value: value }),
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Counter);