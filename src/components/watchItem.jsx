import React, {Component} from 'react';

class WatchItem extends Component {
    state = {
        count: this.props.count ?? 0,
        img: 'https://picsum.photos/100?random=' + Math.random()
    }

    clickHandler = () => {
        this.setState(prevState => ({
            count: prevState.count+1
        }))
    }

    render() {
        return (
            <div>
                <img className="rounded my-1 mx-2 shadow" alt="Random" src={this.state.img + (this.state.count * "")}/>
                <span className="bd-highlight user-select-none" onClick={this.clickHandler}> Count: {this.state.count}</span>
                <button className='btn btn-danger btn-sm m-2'>HI</button>
            </div>
        );
    }
}

export default WatchItem;