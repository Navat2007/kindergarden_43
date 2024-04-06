import React from 'react';
import {PreloaderContext} from "../../../context";
import Preloader from "../preloader/preloader.component";

const BasicPage = ({children, loadings = [], loadingTimer = 1500}) => {

    const [basicLoading, setBasicLoading] = React.useState(false);
    const {loading, setLoading} = React.useContext(PreloaderContext);

    React.useLayoutEffect(() => {
        setTimeout(() => {
            setBasicLoading(true);
        }, loadingTimer)
    }, [loadingTimer]);

    React.useLayoutEffect(() => {
        if(basicLoading && loadings.filter(item => item.loading).length === 0){
            setLoading(false);
        }
    }, [basicLoading, loadings, setLoading]);

    if(basicLoading === false || loadings.filter(item => item.loading).length > 0) {
        return <Preloader loading={true} />;
    }
    else {
        return (
            <>
                {children}
            </>
        );
    }
};

export default BasicPage;