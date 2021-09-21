import React from 'react';
import './input-filters.css';

class InputFilters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userId: "", shippingId: ""};

        this.handleChangeUserId = this.handleChangeUserId.bind(this);
        this.handleChangeShippingId = this.handleChangeShippingId.bind(this);
    }

    render() {
        return(
            <div className="input-filters">
                <div className="input-filter">
                    ID пользователя
                    <input className="input-filter-area" type="text" value={this.props.userId} onChange={this.handleChangeUserId}></input>
                </div>
                <div className="input-filter">
                    ID офиса
                    <input className="input-filter-area" type="text" value={this.props.shippingId} onChange={this.handleChangeShippingId}></input>
                </div>
            </div>
        )
    }

    handleChangeUserId(event) {
        this.setState({userId: event.target.value});
        this.props.changeUserId(event.target.value);
    }

    handleChangeShippingId(event) {
        this.setState({shippingId: event.target.value});
        this.props.changeShippingId(event.target.value);
    }
}

export default InputFilters