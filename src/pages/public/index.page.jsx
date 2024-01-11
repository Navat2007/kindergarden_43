import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import useNewsStore from "../../store/public/newsStore";

import BasicPage from "../../components/public/basic.page/basic.page.component";
import { AdminIcons, SocialIcons } from "../../components/svgs";

const IndexPage = () => {
    const store = useNewsStore();
    const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
    const [subMenuOpened, setSubMenuOpened] = React.useState(false);
    const [moreMenuOpened, setMoreMenuOpened] = React.useState(false);
    const [dropDownMenuOpened, setDropDownMenuOpened] = React.useState(false);
    const [thirdDropDownMenuOpened, setThirdDropDownMenuOpened] = React.useState(false);

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
            {/* Шапка */}
            <header className='header page__header'>
                <div className='header__wrap'>
                    {/* Лого-компонент */}
                    <a className='header__logo-link logo-link' href='./' aria-label='Логотип' />
                    <menu
                        className={classNames({
                            "header__menu menu": true,
                            menu_opened: mobileMenuOpened,
                        })}
                    >
                        <ul className='menu__list'>
                            <li>
                                <a className='menu__link' href='./'>
                                    Главная
                                </a>
                            </li>
                            <li
                                className={classNames({
                                    submenu: true,
                                    submenu_opened: subMenuOpened,
                                })}
                            >
                                <button
                                    className={classNames({
                                        "menu__link submenu__button": true,
                                        submenu__button_actived: subMenuOpened,
                                    })}
                                    type='button'
                                    aria-label='Развернуть список'
                                    onClick={() => {
                                        setSubMenuOpened(!subMenuOpened);
                                    }}
                                >
                                    <span className='submenu__button-text'>
                                        Сведения об образовательной организации
                                    </span>
                                    <span className='submenu__button-icon'>{AdminIcons.chevron_down}</span>
                                </button>
                                {/* первая вложенность с большим заголовком и оберткой для размещения под шапкой */}
                                <div className='submenu__wrap'>
                                    <div className='submenu__top-list-container'>
                                        <p className='submenu__title'>Сведения об образовательной организации</p>
                                        <ul className='submenu__top-list'>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Основные сведения
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Структура и органы управления образовательной организацией
                                                </a>
                                            </li>
                                            {/* Вторая вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                            <li
                                                className={classNames({
                                                    "submenu__item submenu__item_has-submenu": true,
                                                    "submenu__item_has-submenu_opened": dropDownMenuOpened,
                                                })}
                                            >
                                                <button
                                                    className={classNames({
                                                        "submenu__button menu__link": true,
                                                        submenu__button_actived: dropDownMenuOpened,
                                                    })}
                                                    type='button'
                                                    aria-label='Развернуть список'
                                                    onClick={() => {
                                                        setDropDownMenuOpened(!dropDownMenuOpened);
                                                    }}
                                                >
                                                    <span className='submenu__button-text'>Документы</span>
                                                    <span className='submenu__button-icon'>
                                                        {AdminIcons.chevron_down}
                                                    </span>
                                                </button>
                                                <div className='submenu__list-container'>
                                                    <ul className='submenu__list'>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Основные сведения
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Структура и органы управления образовательной
                                                                организацией
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Документы
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образование
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образование
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образовательные стандарты и требования
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Руководство. Педагогический (научно-педагогический) состав
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Материально-техническое обеспечение и оснащённость образовательного
                                                    процесса
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Стипендии и меры поддержки обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Платные образовательные услуги
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Финансово-хозяйственная деятельность
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Вакантные места для приёма (перевода) обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Доступная среда
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Международное сотрудничество
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Организация питания в образовательной организации
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li
                                className={classNames({
                                    submenu: true,
                                    submenu_opened: moreMenuOpened,
                                })}
                            >
                                <button
                                    className={classNames({
                                        "menu__link submenu__button": true,
                                        submenu__button_actived: moreMenuOpened,
                                    })}
                                    type='button'
                                    aria-label='Развернуть список'
                                    onClick={() => {
                                        setMoreMenuOpened(!moreMenuOpened);
                                    }}
                                >
                                    <span className='submenu__button-text'>Еще</span>
                                    <span className='submenu__button-icon'>{AdminIcons.chevron_down}</span>
                                </button>
                                {/* первая вложенность с большим заголовком и оберткой для размещения под шапкой */}
                                <div className='submenu__wrap'>
                                    <div className='submenu__top-list-container'>
                                        <p className='submenu__title'>Меню</p>
                                        <ul className='submenu__top-list'>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Основные сведения
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Структура и органы управления образовательной организацией
                                                </a>
                                            </li>
                                            {/* Вторая вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                            <li
                                                className={classNames({
                                                    "submenu__item submenu__item_has-submenu": true,
                                                    "submenu__item_has-submenu_opened": dropDownMenuOpened,
                                                })}
                                            >
                                                <button
                                                    className={classNames({
                                                        "menu__link submenu__button": true,
                                                        submenu__button_actived: dropDownMenuOpened,
                                                    })}
                                                    type='button'
                                                    aria-label='Развернуть список'
                                                    onClick={() => {
                                                        setDropDownMenuOpened(!dropDownMenuOpened);
                                                    }}
                                                >
                                                    <span className='submenu__button-text'>Документы</span>
                                                    <span className='submenu__button-icon'>
                                                        {AdminIcons.chevron_down}
                                                    </span>
                                                </button>
                                                <div className='submenu__list-container'>
                                                    <ul className='submenu__list'>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Основные сведения
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                        {/* Третья вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                                        <li
                                                            className={classNames({
                                                                "submenu__item submenu__item_has-submenu": true,
                                                                "submenu__item_has-submenu_opened":
                                                                    thirdDropDownMenuOpened,
                                                            })}
                                                        >
                                                            <button
                                                                className={classNames({
                                                                    "menu__link submenu__button": true,
                                                                    submenu__button_actived: thirdDropDownMenuOpened,
                                                                })}
                                                                type='button'
                                                                aria-label='Развернуть список'
                                                                onClick={() => {
                                                                    setThirdDropDownMenuOpened(
                                                                        !thirdDropDownMenuOpened
                                                                    );
                                                                }}
                                                            >
                                                                <span className='submenu__button-text'>Документы</span>
                                                                <span className='submenu__button-icon'>
                                                                    {AdminIcons.chevron_down}
                                                                </span>
                                                            </button>
                                                            <div className='submenu__list-container'>
                                                                <ul className='submenu__list'>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Основные сведения
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Структура и органы управления
                                                                            образовательной организацией
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Документы
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Образование
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Образовательные стандарты и требования
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Документы
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образование
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образование
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образовательные стандарты и требования
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Руководство. Педагогический (научно-педагогический) состав
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Материально-техническое обеспечение и оснащённость образовательного
                                                    процесса
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Стипендии и меры поддержки обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Платные образовательные услуги
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Финансово-хозяйственная деятельность
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Вакантные места для приёма (перевода) обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Доступная среда
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Международное сотрудничество
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Организация питания в образовательной организации
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </menu>
                    <div className='header__panel'>
                        {/* Панель соцссылок */}
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
                        {/* Кнопка перехода к форме обратной связи - можно якорем */}
                        <a href='#feedback-form' className='header__feedback-button button button_theme_fill-main'>
                            <span className='button__text'>Задать вопрос</span>
                        </a>
                        {/* Кнопка для вызова панели с поиском */}
                        <button className='button button_theme_outline-main header__search-button' type='button'>
                            <span className='button__icon'>{AdminIcons.search}</span>
                            <span className='button__text'>Найти</span>
                        </button>
                    </div>
                    <button
                        className={classNames({
                            "icon-button header__mobile-button": true,
                            "header__mobile-button_actived": mobileMenuOpened,
                        })}
                        type='button'
                        aria-label='Мобильное выпадающее меню'
                        onClick={() => {
                            setMobileMenuOpened(!mobileMenuOpened);
                        }}
                    >
                        {mobileMenuOpened ? AdminIcons.close : AdminIcons.menu}
                    </button>
                </div>
            </header>
            <main className='page__content'>
                {/* Главный баннер со слайдером */}
                <section class='lead wave-decor wave-decor_inset_bottom'>
                    <div class='lead__columns section-wrap'>
                        <div class='lead__column'>
                            <p class='lead__subtitle'>Центр развития ребёнка</p>
                            <h1 class='lead__title'>Детский сад № 43</h1>
                            <div class='lead__main-text'>
                                <p>
                                    Мы осуществляем качественное воспитание и обучение детей благодаря подбору
                                    квалифицированных педагогов и использованию инновационных эффективных методик.
                                </p>
                                <p>
                                    Мы успешно создаём в детском саду атмосферу дома, мира удивительных открытий, мира
                                    творчества и познания.
                                </p>
                            </div>
                            <a href='#0' class='button button_theme_outline-white button_content_icon-arrow-next'>
                                <span class='button__text'>Об учреждении</span>
                                <span class='button__icon'>{AdminIcons.arrow_next}</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            {/* Подвал */}
            <footer className='footer page__footer'>
                {/* Лого-компонент */}
                <a className='footer__logo-link logo-link' href='./' aria-label='Логотип' />
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
