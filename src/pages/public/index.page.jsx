import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import useNewsStore from "../../store/public/newsStore";

import BasicPage from "../../components/public/basic.page/basic.page.component";

const IndexPage = () => {
    const store = useNewsStore();

    React.useEffect(() => {
        const fetchData = async () => {
            //await store.loadAllMain();
        };

        fetchData();
    }, []);

    return (
        <BasicPage>
            <Helmet>
                <title>детский сад 43</title>
            </Helmet>
            <p>Детский сад 43</p>
        </BasicPage>
    );
};

export default IndexPage;
