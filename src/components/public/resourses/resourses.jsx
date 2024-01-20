import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";

import resources__logo_01 from "../../../images/resources__logo_01.jpg";
import resources__logo_02 from "../../../images/resources__logo_02.jpg";
import resources__logo_03 from "../../../images/resources__logo_03.jpg";
import resources__logo_04 from "../../../images/resources__logo_04.jpg";
import resources__logo_05 from "../../../images/resources__logo_05.jpg";

const Resourses = () => {
    return (
        <>
            <motion.section
                className='section page__section-indent resources'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className='section__wrap'>
                    <h2 className='section__title section__title_with-decor'>Полезные ресурсы</h2>
                    <Splide
                        className='splide splide_indent-block splide_pagination_grey'
                        aria-label='Отзывы родителей о детском садике'
                        options={{
                            type: "loop",
                            cloneStatus: false,
                            pagination: true,
                            arrows: false,
                            autoplay: true,
                            perPage: 5,
                            focus: "center",
                            updateOnMove: true,
                            gap: "var(--indent-block-medium)",
                            padding: "var(--indent-block-small)",
                            breakpoints: {
                                1420: {
                                    perPage: 4,
                                },
                                768: {
                                    perPage: 3,
                                },
                                480: {
                                    perPage: 1,
                                },
                            },
                        }}
                    >
                        <SplideSlide>
                            <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                <img className='resources__image' src={resources__logo_01} alt='Описание' />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                <img className='resources__image' src={resources__logo_02} alt='Описание' />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                <img className='resources__image' src={resources__logo_03} alt='Описание' />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                <img className='resources__image' src={resources__logo_04} alt='Описание' />
                            </a>
                        </SplideSlide>
                        <SplideSlide>
                            <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                <img className='resources__image' src={resources__logo_05} alt='Описание' />
                            </a>
                        </SplideSlide>
                    </Splide>
                </div>
            </motion.section>
        </>
    );
};

export default Resourses;
