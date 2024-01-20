import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";

import useLessonsStore from "../../../store/public/lessonsStore";
import BasicPage from "../../../components/public/basic.page/basic.page.component";

const LessonsPage = () => {
    const store = useLessonsStore();

    React.useEffect(() => {
        const fetchData = async () => {
            await store.loadAll();
        };

        fetchData();
    }, []);

    return (
        <BasicPage loadings={[store]}>
            <Helmet>
                <title>Платные услуги</title>
            </Helmet>
            <motion.section
                className='section page__section-indent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className='section__wrap'>
                    <h1 className='section__title section__title_with-decor'>Платные услуги</h1>
                    <ul className='section__card-deck'>
                        {store.items.map((item) => {
                            const cardVariants: Variants = {
                                offscreen: {
                                    y: 300,
                                    rotate: window.global.getRandomIntNumber(-30, 30),
                                },
                                onscreen: {
                                    y: 0,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.4,
                                        duration: 0.8
                                    }
                                }
                            };

                            return (
                                <motion.li
                                    key={item.ID}
                                    initial='offscreen'
                                    whileInView='onscreen'
                                    viewport={{ once: true, amount: 0.05 }}
                                    variants={cardVariants}
                                >
                                    <NavLink className={"card-link"} to={"" + item.ID}>
                                        <article className='card'>
                                            <img
                                                className='card__image'
                                                src={
                                                    item.image.includes("http")
                                                        ? item.image
                                                        : process.env.REACT_APP_BASE_URL + item.image
                                                }
                                                loading='lazy'
                                                alt='Изображение занятия'
                                            />
                                            <div className='card__content'>
                                                <h2 className='card__title'>{item.title}</h2>
                                            </div>
                                        </article>
                                    </NavLink>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </motion.section>
        </BasicPage>
    );
};

export default LessonsPage;
