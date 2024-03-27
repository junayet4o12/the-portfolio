import React, { useContext } from 'react';
import { ParentContext } from '../ParentSection/ParentSection';

const useParent = () => {
    const data = useContext(ParentContext)
    return data;
}; 

export default useParent;