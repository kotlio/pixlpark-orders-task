import './order.css';
import OrderHiddenInfo from './order-hidden/order-hidden';
import React from 'react';

class Order extends React.Component {

    render() {
        if (!this.props.orderInfo) return null;
        let dateCreated = "";
        if (this.props.orderInfo.dateCreated) dateCreated = this.getDate(this.props.orderInfo.dateCreated);
        if (!this.props.orderInfo.deliveryAddress) this.props.orderInfo.deliveryAddress = "";
        return(
            <div className="order">
                <div className="order-main">
                    <div className="order-props-first">
                        <div className="order-prop"><i>ID: </i>{this.props.orderInfo.id}</div>
                        <div className="order-prop">Название: {this.props.orderInfo.title}</div>
                        <div className="order-prop">Адрес: {this.props.orderInfo.deliveryAddress.zipCode},&#160;
                                                            {this.props.orderInfo.deliveryAddress.city},&#160;
                                                            {this.props.orderInfo.deliveryAddress.addressLine1}
                                                            {this.props.orderInfo.deliveryAddress.addressLine2}</div>
                    </div>
                    <div className="order-props-second">
                        <div className="order-prop">Статуc: {this.props.orderInfo.status}</div>
                        <div className="order-prop">Дата создания: {dateCreated}</div>
                        <div className="order-prop"></div>
                    </div>
                </div>
                <OrderHiddenInfo orderInfo={this.props.orderInfo}/>
            </div>
        )
    }

    getDate(dateFromApi) {
        var dateString = dateFromApi.substr(6);
        var currentTime = new Date(parseInt(dateString));
        var month = currentTime.getMonth() + 1;
        if (month < 10) month = "0" + month;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        var date = day + "." + month + "." + year + ", " + hours + ":" + minutes;
        return date;
    }
    
}

export default Order;