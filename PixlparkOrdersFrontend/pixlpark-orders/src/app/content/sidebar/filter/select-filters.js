import './select-filters.css';
import React from 'react';

class SelectFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: ""};

        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }

    handleChangeStatus(event) {
        this.setState({status: event.target.value});
        this.props.changeStatus(event.target.value);
    }

    render() {
        return(
            <div className="select-filter">
                Статус заказа
                <select className="select-filter-area" value={this.props.status} onChange={this.handleChangeStatus}>
                    <option value="">Не выбрано</option>
                    <option value="NotProcessed">NotProcessed</option>
                    <option value="AwaitingPayment">AwaitingPayment</option>
                    <option value="ReadyToProcessing">ReadyToProcessing</option>
                    <option value="DesignCoordination">DesignCoordination</option>
                    <option value="DesignCoordinationComplete">DesignCoordinationComplete</option>
                    <option value="DesignCoordinationAwaitingReply">DesignCoordinationAwaitingReply</option>
                    <option value="PrepressCoordination">PrepressCoordination</option>
                    <option value="PrepressCoordinationComplete">PrepressCoordinationComplete</option>
                    <option value="PrepressCoordinationAwaitingReply">PrepressCoordinationAwaitingReply</option>
                    <option value="Printing">Printing</option>
                    <option value="PrintedWithDefect">PrintedWithDefect</option>
                    <option value="Printed">Printed</option>
                    <option value="Shipped">Shipped</option>
                    <option value="ShippedToStorage">ShippedToStorage</option>
                    <option value="Returned">Returned</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="CancelledWithDefect">CancelledWithDefect</option>
                    <option value="Refused">Refused</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>
        )
    }
}

export default SelectFilters;