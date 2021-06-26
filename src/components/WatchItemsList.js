import React from 'react';
import PropTypes from 'prop-types';
import WatchItem from "./WatchItem";

const WatchItemsList = ({list}) => {
    return (
        <div>
            {list.map(item => <WatchItem key={item.id} item={item}/>)}
        </div>
    );
}

WatchItemsList.propTypes = {
    list: PropTypes.array
};

export default WatchItemsList;
