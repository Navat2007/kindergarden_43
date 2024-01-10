import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import useNewsStore from "../../store/public/newsStore";

import BasicPage from "../../components/public/basic.page/basic.page.component";
import { AdminIcons, SocialIcons } from "../../components/svgs";

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
                <title>Детский сад № 43 УДПРФ</title>
            </Helmet>
            <header className='header page__header'>
                <div className='header__wrap'>
                    <a className='header__logo-link' href='./' aria-label='Логотип' />
                    <menu className='header__menu menu'>
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
                                    Программы
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Ещё
                                </a>
                            </li>
                        </ul>
                    </menu>
                    <button className='header__mobile-button icon-button' type='button' aria-label='Выпадающее меню'>
                        {AdminIcons.menu}
                    </button>
                    <div className='header__panel'>
                        <ul className='social-group'>
                            <li>
                                <a
                                    className='social-group__link-icon'
                                    target='_blank'
                                    href='https://vk.com/public219786348'
                                    rel='noreferrer noopener nofollow'
                                    aria-label='Вконтакте'
                                >
                                    {SocialIcons.vk_currentColor}
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
                                    {SocialIcons.t_currentColor}
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-group__link-icon'
                                    target='_blank'
                                    href='tel:84991493724'
                                    rel='noreferrer noopener nofollow'
                                    aria-label='Телефон'
                                >
                                    {AdminIcons.phone}
                                </a>
                            </li>
                        </ul>
                        <a href='#feedback-form' className='header__feedback-button button button_theme_fill-main'>
                            <span className='button__text'>Задать вопрос</span>
                        </a>
                        <button className='button button_theme_outline-main header__search-button' type='button'>
                            <span className='button__icon'>{AdminIcons.search}</span>
                            <span className='button__text'>Найти</span>
                        </button>
                    </div>
                </div>
            </header>
            <main className='page__content'></main>
            <footer className='footer page__footer'>
                <a className='footer__logo-link' href='./' aria-label='Логотип' />
                <div className='footer__columns'>
                    <address className='footer__address'>
                        <a
                            className='footer__link footer__link_type_phone'
                            href='tel:84991493724'
                            rel='noreferrer noopener nofollow'
                        >
                            <span className='footer__link-icon'>{AdminIcons.phone}</span>
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
                            <span className='footer__link-icon'>{AdminIcons.email}</span>
                            <span className='footer__link-text footer__text-highlight'>fgdou43@bk.ru</span>
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
                                    {SocialIcons.vk_currentColor}
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
                                    {SocialIcons.t_currentColor}
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
                        </ul>
                    </menu>
                </div>
                <div className='footer__copyright'>
                    <p>
                        Федеральное государственное бюджетное дошкольное образовательное учреждение «Центр развития
                        ребёнка — детский сад № 43» Управления делами Президента Российской Федерации
                    </p>
                    <p>1958–2023 ©Все права защищены</p>
                </div>
            </footer>
        </BasicPage>
    );
};

export default IndexPage;
