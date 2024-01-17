import React from "react";
import Logo from "../logo/logo";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./footer.scss";
import {Icons, SocialIcons} from "../../svgs";

const Footer = () => {
    const node = React.useRef();

    return (
        <motion.footer
            className='footer page__footer section'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            <div className='section__wrap footer__wrap'>
                {/* Лого-компонент */}
                <a className='footer__logo-link logo-link' href='./' aria-label='Логотип' />
                <div className='footer__columns'>
                    <address className='footer__address'>
                        <a
                            className='footer__link footer__link_type_phone'
                            href='tel:84991493724'
                            rel='noreferrer noopener nofollow'
                        >
                            <span className='footer__link-icon'>{Icons.phone}</span>
                            <span className='footer__link-text'>+7 499 149-37-24</span>
                            <span className='footer__text-small'>Пн-пт с 7:00 до 19:00</span>
                        </a>
                        <a
                            className='footer__link footer__color-main'
                            href='#0'
                            target='_blank'
                            rel='noreferrer noopener nofollow'
                        >
                            <span className='footer__link-text'>г. Москва, ул. Академика Павлова, д. 14, к. 2</span>
                        </a>
                        <a
                            className='footer__link'
                            href='mailto:fgdou43@bk.ru'
                            target='_blank'
                            rel='noreferrer noopener nofollow'
                        >
                            <span className='footer__link-icon'>{Icons.email}</span>
                            <span className='footer__link-text footer__text-highlight'>fgdou43@bk.ru</span>
                        </a>
                        {/* Панель соцссылок */}
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
                    </address>
                    <menu className='footer__menu menu'>
                        <ul className='menu__list'>
                            <li>
                                <a className='menu__link' href='./'>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Сведения об образовательной организации
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Программы
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Режим
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Расписание
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Сведения об образовательной организации
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Программы
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Режим
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Расписание
                                </a>
                            </li>
                        </ul>
                    </menu>
                </div>
                <div className='footer__copyright'>
                    <p>
                        Федеральное государственное бюджетное дошкольное образовательное учреждение «Центр развития
                        ребёнка — детский сад № 43» Управления делами Президента Российской Федерации
                    </p>
                    <p>1958–2023 ©Все права защищены</p>
                    <NavLink to={"/login"} className={"footer__lk-link main-link"}>
                        Личный кабинет &rarr;
                    </NavLink>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
