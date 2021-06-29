import React from 'react';
import PropTypes from 'prop-types';
import WatchItem from "./watch-item-components/WatchItem";

const WatchItemsList = ({list, toggleIsWatched, onDeleteItem}) => {
    return (
        <div>
            {list.map(item => <WatchItem key={item.id}
                                         item={item}
                                         onIconClick={toggleIsWatched}
                                         onMinusClick={onDeleteItem}/>)}
        </div>
    );
}

WatchItemsList.propTypes = {
    list: PropTypes.array
};

export default WatchItemsList;
