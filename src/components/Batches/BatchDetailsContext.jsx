import React, { createContext, useContext, useState } from 'react';

const BatchDetailsContext = createContext();

export const useBatchDetails = () => {
    return useContext(BatchDetailsContext);
};

export const BatchDetailsProvider = ({ children }) => {
    const [batchDetails, setBatchDetails] = useState(false);

    return (
        <BatchDetailsContext.Provider value={{ batchDetails, setBatchDetails }}>
            {children}
        </BatchDetailsContext.Provider>
    );
};
