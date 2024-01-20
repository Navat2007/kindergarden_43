import React from "react";
import Logo from "../logo/logo";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Icons, SocialIcons } from "../../svgs";

const Footer = () => {
    return (
        <motion.footer
            className='footer page__footer section'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            <div className='section__wrap footer__wrap'>
                <Logo extraClass='footer__logo-link' />
                <div className='footer__columns'>
                    <address className='footer__address address'>
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
                            <span className='address__link-text'>г. Москва, ул. Академика Павлова, д. 14, к. 2</span>
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
                        <ul className='footer__social-group social-group'>
                            <li>
                                <a
                                    className='social-group__link-icon'
                                    target='_blank'
                                    href='https://vk.com/public219786348'
                                    rel='noreferrer noopener nofollow'
                                    aria-label='Вконтакте'
                                >
                                    {SocialIcons.vk_without_color}
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-group__link-icon'
                                    target='_blank'
                                    href='http://t.me/Fgdou43'
                                    rel='noreferrer noopener nofollow'
                                    aria-label='Телеграм'
                                >
                                    {SocialIcons.t_without_color}
                                </a>
                            </li>
                        </ul>
                        <NavLink
                            to={"/login"}
                            className={
                                "footer__login-link button button_theme_text-main button_content_icon-arrow-next"
                            }
                        >
                            <span className='button__text'>Личный кабинет</span>
                            <span className='button__icon'>{Icons.arrow_next}</span>
                        </NavLink>
                    </address>
                    <menu className='footer__menu menu'>
                        <ul className='footer__menu-list menu__list'></ul>
                    </menu>
                </div>
                <div className='footer__copyright'>
                    <p>
                        Федеральное государственное бюджетное дошкольное образовательное учреждение «Центр развития
                        ребёнка — детский сад № 43» Управления делами Президента Российской Федерации
                    </p>
                    <p>1958–2023 ©Все права защищены</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
