import React from 'react';
import './submit-filters.css';
import {QueryFilterContext} from '../../../content'

class SubmitFilters extends React.Component {
   render() {
        return(
            <QueryFilterContext.Consumer>
                {({changeQuery}) => (
                    <input type="submit" value="Фильтровать" className="submit-filters" onClick={() => changeQuery(this.props.queryParams)}></input>
                )}
            </QueryFilterContext.Consumer>
        )
    }
}

export default SubmitFilters;