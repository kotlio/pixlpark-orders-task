import './reset-filters.css';
import {QueryFilterContext} from '../../../content'
import React from 'react';

class ResetFilters extends React.Component {
    render() {
        return(
            <QueryFilterContext.Consumer>
                {({changeQuery}) => (
                    <input type="submit" value="Сбросить" className="reset-filters" onClick={() => changeQuery("")}></input>
                )}
            </QueryFilterContext.Consumer>
        )
    }
}

export default ResetFilters;