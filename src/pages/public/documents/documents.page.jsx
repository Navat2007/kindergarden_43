import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import useDocumentsStore from "../../../store/public/documentsStore";

import SingleImageWithPreview from "../../../components/general/single.image.with.preview/single.image.with.preview";
import BasicPage from "../../../components/public/basic.page/basic.page.component";

const DocumentsPage = () => {
    const store = useDocumentsStore();

    React.useEffect(() => {
        const fetchData = async () => {
            await store.loadAll();
        };

        fetchData();
    }, []);

    return (
        <BasicPage loadings={[store]}>
            <Helmet>
                <title>Документы</title>
            </Helmet>
            <motion.section
                className='sections page__section-indent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className='section__wrap'>
                    <h1 className='section__title section__title_with-decor'>Документы</h1>
                    <ul className='section__list'>
                        {store.items.map((item) => {
                            return (
                                <li key={item.ID} className='documents__item'>
                                    <SingleImageWithPreview image={item.image} extraClass={"documents__item-image"} />
                                    <div className='documents__item-section'>
                                        <h3 className='documents__item-title'>{item.titleShort}</h3>
                                        <div className='documents__item-text'>
                                            <p>{item.title}</p>
                                        </div>
                                        <a
                                            className='documents__item-link'
                                            href={
                                                item.url.includes("http")
                                                    ? item.url
                                                    : process.env.REACT_APP_BASE_URL + item.url
                                            }
                                            target={"_blank"}
                                            rel='noopener nofollow noreferrer'
                                        >
                                            Скачать
                                        </a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </motion.section>
        </BasicPage>
    );
};

export default DocumentsPage;
