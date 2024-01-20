import React from "react";
import { motion } from "framer-motion";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Icons } from "../../svgs";
import SocialGroup from "../social.group/social.group";

const Contact = ({ place = "landing" }) => {
    return (
        <motion.section
            className='section page__section-indent contacts'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            {place === "page" && (
                <div className='section__wrap contacts__columns'>
                    <div className='contacts__content'>
                        <h2 className='section__title section__title_with-decor'>Контакты</h2>
                        <address className='address'>
                            <a
                                className='address__link address__link_type_phone'
                                href='tel:84991493724'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='address__link-icon'>{Icons.phone}</span>
                                <span className='address__link-text'>+7 499 149-37-24</span>
                                <span className='address__text-small'>Пн-пт с 7:00 до 19:00</span>
                            </a>
                            <a
                                className='address__link address__color-main'
                                href='#0'
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='address__link-text'>
                                    г. Москва, ул. Академика Павлова, д. 14, к. 2
                                </span>
                            </a>
                            <a
                                className='address__link'
                                href='mailto:fgdou43@bk.ru'
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='address__link-icon'>{Icons.email}</span>
                                <span className='address__link-text address__text-highlight'>fgdou43@bk.ru</span>
                            </a>
                            <SocialGroup extraClass='contact__social-group' />
                        </address>
                    </div>
                    <YMaps>
                        <Map
                            state={{
                                center: [55.740882, 37.399416],
                                zoom: 17,
                            }}
                            className='contacts__map'
                            width='100%'
                        >
                            <Placemark
                                geometry={[55.740882, 37.399416]}
                                properties={{
                                    iconContent: "Детский сад № 43 УДПРФ",
                                }}
                                options={{ preset: "islands#blueStretchyIcon" }}
                            />
                        </Map>
                    </YMaps>
                </div>
            )}
            {place === "landing" && (
                <YMaps>
                    <Map
                        state={{
                            center: [55.740882, 37.399416],
                            zoom: 17,
                        }}
                        width='100%'
                        height='clamp(25rem, 18.3824rem + 29.4118vw, 50rem)'
                    >
                        <Placemark
                            geometry={[55.740882, 37.399416]}
                            properties={{
                                iconContent: "Детский сад № 43 УДПРФ",
                            }}
                            options={{ preset: "islands#blueStretchyIcon" }}
                        />
                    </Map>
                </YMaps>
            )}
        </motion.section>
    );
};

export default Contact;
