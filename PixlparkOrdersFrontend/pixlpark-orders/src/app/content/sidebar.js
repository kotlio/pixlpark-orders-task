import './sidebar.css';
import Filter from './sidebar/filter'

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar-title">Фильтр</div>
            <Filter></Filter>
        </div>
    )
}

export default Sidebar;