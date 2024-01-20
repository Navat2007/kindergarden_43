import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import moment from "moment";
import createDOMPurify from "dompurify";

import SingleImageWithPreview from "../../general/single.image.with.preview/single.image.with.preview";

const News = ({ children, items, count }) => {
    const DOMPurify = createDOMPurify(window);

    if (items.length > 0) {
        return (
            <motion.section
                className='section page__section-indent'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className='section__wrap'>
                    <h2 className='section__title'>Новости</h2>
                    <ul className='section__card-deck'>
                        {items.map((item) => {
                            return (
                                <li key={item.ID}>
                                    <NavLink className={"card-link"} to={"/новости/" + item.ID}>
                                        <article className='card card_type_article'>
                                            <SingleImageWithPreview
                                                image={item.preview_image}
                                                extraClass={"card__image"}
                                            />
                                            <div className='card__content'>
                                                <div className='card__title-block'>
                                                    <time dateTime={item.date} className='card__date'>
                                                        {moment(item.date).format("DD.MM.YYYY")}
                                                    </time>
                                                    <h3 className='card__title'>{item.preview_title}</h3>
                                                </div>
                                                <div
                                                    className='card__main-content'
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(item.preview_text),
                                                    }}
                                                />
                                            </div>
                                        </article>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    {children}
                </div>
            </motion.section>
        );
    } else {
        return null;
    }
};

export default News;
