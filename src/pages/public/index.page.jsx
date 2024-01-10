import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

import useNewsStore from "../../store/public/newsStore";

import BasicPage from "../../components/public/basic.page/basic.page.component";

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
            <header class='header clouds-decor clouds-decor_position_top'>
                <div class='page__wrap page__wrap_size_wide header__wrap'>
                    <a class='header__logo logo' href='./'>
                        <img
                            class='logo__image'
                            src='./images/logo.svg'
                            alt='Домик, расположенный на раскрытой книжке'
                            width='84'
                            height='67'
                        />
                        <p class='logo__content'>
                            <span class='logo__title'>Детский сад № 43</span>
                            <span>Центр развития ребенка</span>
                        </p>
                    </a>
                    <menu class='header__menu menu'>
                        <ul class='menu__list'>
                            <li>
                                <a class='menu__link' href='./'>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a class='menu__link' href='./'>
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a class='menu__link' href='./'>
                                    Сведения об образовательной организации
                                </a>
                            </li>
                            <li>
                                <a class='menu__link' href='./'>
                                    Программы
                                </a>
                            </li>
                            <li>
                                <a class='menu__link' href='./'>
                                    Режим
                                </a>
                            </li>
                            <li>
                                <a class='menu__link' href='./'>
                                    Расписание
                                </a>
                            </li>
                            <li>
                                <a class='menu__link' href='./'>
                                    Ещё
                                </a>
                            </li>
                        </ul>
                    </menu>
                    <div class='header__panel'>
                        <ul class='social-group'>
                            <li>
                                <a class='social-group__link icon icon_type_vkontakte' href='#0'></a>
                            </li>
                            <li>
                                <a class='social-group__link icon icon_type_telegram' href='#0'></a>
                            </li>
                            <li>
                                <a class='social-group__link icon icon_type_phone' href='tel:'></a>
                            </li>
                        </ul>
                        <a href='#feedback-form' class='button button_theme_fill-accent'>
                            <span class='button__text'>Задать вопрос</span>
                        </a>
                        <button class='button button_theme_outline-main header__search-button' type='button'>
                            <span class='button__icon icon icon_type_search'></span>
                            <span class='button__text'>Найти</span>
                        </button>
                    </div>
                </div>
            </header>
        </BasicPage>
    );
};

export default IndexPage;
