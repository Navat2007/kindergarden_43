import React from "react";
import createDOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import useGroupsStore from "../../../store/public/groupsStore";

import BasicPage from "../../../components/public/basic.page/basic.page.component";
import Breadcrumbs from "../../../components/public/breadcrumbs/breadcrumbs";
import TeachersSlider from "../../../components/general/teachers.slider/teachers.slider";

const GroupPage = () => {
    let { id } = useParams();
    const DOMPurify = createDOMPurify(window);

    const store = useGroupsStore();

    React.useEffect(() => {
        const fetchData = async () => {
            await store.loadByID({ id });
        };

        fetchData();
    }, []);

    return (
        <BasicPage loadings={[store]}>
            <Helmet>
                <title>{store.item.title}</title>
            </Helmet>
            <Breadcrumbs
                items={[
                    {
                        title: "Главная",
                        url: "/",
                    },
                    {
                        title: "Группы",
                        url: "/группы",
                    },
                    {
                        title: store.item.title,
                        url: "",
                    },
                ]}
            />
            <motion.section
                className='section page__section-indent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                {!store.loading && Object.keys(store.item).length > 0 && (
                    <>
                        <h1 className='section__title section__title_with-decor'>{store.item.title}</h1>
                        <p className='section__caption'>{store.item.preview}</p>
                        <img
                            className='section__article-image'
                            src={
                                store.item.image.includes("http")
                                    ? store.item.image
                                    : process.env.REACT_APP_BASE_URL + store.item.image
                            }
                            alt='Изображение занятия'
                        />
                        <div
                            className='section__main-content'
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(store.item.text),
                            }}
                        />
                        {store.item?.employees?.length > 0 && (
                            <div className='section__indent'>
                                <h2 className='section__subtitle'>Воспитатели</h2>
                                <TeachersSlider isBorderGradient={false} type={"slide"} items={store.item?.employees} />
                            </div>
                        )}
                    </>
                )}
            </motion.section>
        </BasicPage>
    );
};

export default GroupPage;
