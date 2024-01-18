import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { PreloaderContext } from "../context";
import Preloader from "../components/public/preloader/preloader.component";

import "../styles/public.layout.scss";
import Header from "../components/public/header/header";
import Footer from "../components/public/footer/footer";
import Resourses from "../components/public/resourses/resourses";
import Feedback from "../components/public/feedback/feedback";
import MapSection from "../components/public/map/map";

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
            <Header />
            <motion.main
                className='page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <Outlet />
                <Feedback />
                <Resourses />
                <MapSection />
            </motion.main>
            <Footer />
        </PreloaderContext.Provider>
    );
};

export default PublicLayout;
