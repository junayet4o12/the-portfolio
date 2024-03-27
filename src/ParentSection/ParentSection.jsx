// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState } from "react";
export const ParentContext = createContext(null)
const ParentSection = ({ children }) => {
    const [open, setOpen] = useState(false)
    const { data: userData, isLoading: userDetailsIsLoading } = useQuery({
        queryKey: ['singleUserData'],
        queryFn: async () => {
            const res = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            return res?.data
        }
    })
    if (userDetailsIsLoading) {
        return 'Loading'
    }
    const allData = {userData,setOpen,open}
    return (
        <ParentContext.Provider value={allData}>
            {children}
        </ParentContext.Provider>
    );
};

export default ParentSection;