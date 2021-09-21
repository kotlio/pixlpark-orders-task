import './filter.css';
import InputFilters from './filter/input-filters';
import SelectFilters from './filter/select-filters';
import SubmitFilters from './filter/submit-filters';
import ResetFilters from './filter/reset-filters';
import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {queryParams: "", userId: "", shippingId: "", status: ""};
    }

    render() {
        return(
            <div className="filter">
                <InputFilters changeUserId={this.changeUserId} changeShippingId={this.changeShippingId} userId={this.state.userId} shippingId={this.state.shippingId}></InputFilters>
                <SelectFilters changeStatus={this.changeStatus} status={this.state.status}></SelectFilters>
                <SubmitFilters queryParams={this.state.queryParams}></SubmitFilters>
                <ResetFilters resetFilters={this.resetFilters}></ResetFilters>
            </div>
        )
    }

    componentDidUpdate() {
        this.getQuery();
    }

    changeUserId = (valueUserId) => {
        this.setState({userId: valueUserId});
    }

    changeShippingId = (valueShippingId) => {
        this.setState({shippingId: valueShippingId}); 
    }

    changeStatus = (valueStatus) => {
        this.setState({status: valueStatus});
    }

    getQuery() {
        let query = "";
        if (this.state.userId) query += "&userId=" + this.state.userId;
        if (this.state.shippingId) query += "&shippingId=" + this.state.shippingId;
        if (this.state.status) query += "&status=" + this.state.status;
        if (this.state.queryParams !== query) this.setState({queryParams: query});
    }
}

export default Filter;