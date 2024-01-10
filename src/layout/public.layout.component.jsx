import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { PreloaderContext } from "../context";
import Preloader from "../components/public/preloader/preloader.component";

import "../styles/public.layout.scss";

const PublicLayout = () => {
    const location = useLocation();

    const [loading, setLoading] = React.useState(true);

    React.useLayoutEffect(() => {
        setLoading(true);
    }, [location]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <PreloaderContext.Provider value={{ loading, setLoading }}>
            <Preloader loading={loading} />
            <motion.main
                className='main-content'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <Outlet />
            </motion.main>
        </PreloaderContext.Provider>
    );
};

export default PublicLayout;
