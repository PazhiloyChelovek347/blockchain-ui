import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const OwnerPage = () => {
    const { address } = useSelector((store) => store.basicReducer);

    return (
        <div>Hello</div>
    );
};

export default memo(OwnerPage);
