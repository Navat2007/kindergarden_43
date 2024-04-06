import React from "react";

const Preloader = ({ children, loading }) => {
    if (loading) {
        return (
            <div className={"preloader preloader--place-page"}>
                <div className={"preloader__chasing-squares"}>
                    <div className='preloader__square'></div>
                    <div className='preloader__square'></div>
                    <div className='preloader__square'></div>
                    <div className='preloader__square'></div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default Preloader;
