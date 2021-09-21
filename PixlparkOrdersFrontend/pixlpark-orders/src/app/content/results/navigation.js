import './navigation.css';
import React from 'react';

class Navigation extends React.Component {
    render() {
        if (this.props.skip > 0 && this.props.isNextActive === true)
        return(
            <div className="navigation">
                <button className="previous" onClick={this.previous}>Предыдущая</button>
                <button className="next" onClick={this.next}>Следующая</button>
            </div>
        )
        else if (this.props.skip === 0 && this.props.isNextActive === true)
        return(
            <div className="navigation">
                <button className="next" onClick={this.next}>Следующая</button>
            </div>
        )
        else if (this.props.skip === 0)
        return(
            <div className="navigation"></div>
        )
        else
        return(
            <div className="navigation">
                <button className="previous" onClick={this.previous}>Предыдущая</button>
            </div>
        )
    }

    previous = () => {this.props.updateOrders(this.props.skip - 10)}
    next = () => {this.props.updateOrders(this.props.skip + 10)}
}

export default Navigation;