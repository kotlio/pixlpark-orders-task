import './results.css';
import Order from './results/order';
import Navigation from './results/navigation';
import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orders: [], skip: 0, isNextActive: true, isLoaded: false};
    }

    render() {
        if (this.state.isLoaded) {
            console.log();
            if (this.state.orders.length > 0) {
                return(
                    <div className="results">
                        {this.getOrders()}
                        <Navigation skip={this.state.skip} updateOrders={this.updateOrders} isNextActive={this.state.isNextActive}></Navigation>
                    </div>
                )
            }
            else {
                return(
                    <div className="results">
                        <div className="loading">Заказы с выбранными параметрами отсутствуют</div>
                    </div>
                )
            }

        }
        else {
            this.getOrdersFromApi();
            return(
                <div className="results">
                    <div className="loading">Идет загрузка...</div>
                </div>
            );
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isQueryChanged !== this.props.isQueryChanged) {
            this.setState({orders: [], skip: 0, isLoaded: false});
        }
    }

    getOrdersFromApi() {
        //http://localhost:60664/api/orders/
        fetch('https://kotlio.somee.com/api/orders/' + this.props.queryParams + '&take=11&skip=' + this.state.skip)
            .then(response => response.json())
            .then((data) => {
                if (data.length > 10) this.setState({orders: data, isNextActive: true, isLoaded: true});
                else this.setState({orders: data, isNextActive: false, isLoaded: true})
            })
            .catch((error) => {
                console.error(error);
        })
    }

    updateOrders = (newSkip) => {
        this.setState({orders: [], skip: newSkip, isLoaded: false});
    }

    getOrders() {
        let list = [];
        for (let i = 0; i < 10; i++)
        {
            list.push(<Order orderInfo={this.state.orders[i]} key={i}></Order>)
        }
        return list;
    }
}
export default Results;