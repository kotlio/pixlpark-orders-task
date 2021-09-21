import React from 'react';

class OrderHiddenInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Развернуть"};
        this.press = this.press.bind(this);
    }

    press(){
        if (this.state.class === "off")
        {
            this.setState({class: "on", label: "Свернуть"});
        }
        else {
            this.setState({class: "off", label: "Развернуть"});
        }
    }
    render() {
        if (!this.props.orderInfo.shipping) this.props.orderInfo.shipping = "";
        return (
            <div className="order-hidden">
                <button onClick={this.press} className={this.state.class + " order-expand-button"}>{this.state.label}</button>
                <div style={{display: this.state.class === "on" ? "block" : "none"}}>
                    <div className="order-prop-full">ID заказа: {this.props.orderInfo.customId}</div>
                    <div className="order-prop-full">ID пользователя: {this.props.orderInfo.userId}</div>
                    <div className="order-prop-full">Полное название: {this.props.orderInfo.title}</div>
                    <div className="order-prop-full">Полное имя: {this.props.orderInfo.deliveryAddress.fullName}</div>
                    <div className="order-prop-full">Телефон: {this.props.orderInfo.deliveryAddress.phone}</div>
                    <div className="order-prop-full">ID офиса: {this.props.orderInfo.shipping.id}</div>
                    <div className="order-prop-full">Офис: {this.props.orderInfo.shipping.title}</div>
                    <div className="order-prop-full">Стоимость заказа: {this.props.orderInfo.price}</div>
                    <div className="order-prop-full">Скидка: {this.props.orderInfo.discountPrice}</div>
                    <div className="order-prop-full">Акция: {this.props.orderInfo.discountTitle}</div>
                    <div className="order-prop-full">Стоимость доставки: {this.props.orderInfo.deliveryPrice}</div>
                    <div className="order-prop-full">Итоговая цена: {this.props.orderInfo.totalPrice}</div>
                </div>
            </div>
        ) 
    }
}

export default OrderHiddenInfo;