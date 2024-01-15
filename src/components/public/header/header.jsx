import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { signal } from "@preact/signals-react";
import classNames from "classnames";

import useWindowSize from "../../../hook/useWindowSize";
import useOnClickOutside from "../../../hook/onClickOutside";

import { menuStore } from "../../../store/public/menuStore";

import DropdownMenu from "./drop.down.menu";

import Logo from "../logo/logo";
import "./header.scss";
import {Icons, SocialIcons} from "../../svgs";

const menuItems = signal([]);
const menuMobileItems = signal([]);
const mobileMenuItemsWidths = signal([]);

const Header = () => {
    const location = useLocation();
    const [width, height] = useWindowSize();

    const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
    const [subMenuOpened, setSubMenuOpened] = React.useState(false);
    const [moreMenuOpened, setMoreMenuOpened] = React.useState(false);
    const [dropDownMenuOpened, setDropDownMenuOpened] = React.useState(false);
    const [thirdDropDownMenuOpened, setThirdDropDownMenuOpened] = React.useState(false);

    const node = React.useRef();
    const button = React.useRef();
    const menuList = React.useRef();
    const mobileMenu = React.useRef();
    const mobileMenuList = React.useRef();
    const stickyHeader = React.useRef();

    const [burgerOpened, setBurgerOpened] = React.useState(false);

    useOnClickOutside([node, button], (e) => {
        if (burgerOpened) {
            setBurgerOpened(!burgerOpened);
        }
    });

    React.useLayoutEffect(() => {
        setBurgerOpened(false);
    }, [location]);

    React.useEffect(() => {
        let fixedTop = stickyHeader.current.offsetTop;

        const stickyHeaderEvent = () => {
            if (window.pageYOffset > fixedTop) {
                stickyHeader.current.classList.add("header_sticky");
            } else {
                stickyHeader.current.classList.remove("header_sticky");
            }
        };

        window.addEventListener("scroll", stickyHeaderEvent);

        return () => {
            window.removeEventListener("scroll", stickyHeaderEvent);
        };
    }, []);

    React.useEffect(() => {
        if(!menuItems.value || menuItems.value.length === 0)
            return;

        let offset = 40;
        let availableSpace = menuList.current.getBoundingClientRect().width;
        let requiredSpace =
            Object.values(menuList.current.childNodes).reduce((total, children) => total + children.offsetWidth, 0) +
            offset;

        if (requiredSpace > availableSpace) {
            for (let i = menuList.current.childNodes.length - 1; i >= 0; i--) {
                const elementWidth = menuList.current.childNodes[i].offsetWidth;

                menuMobileItems.value.unshift(menuItems.value.pop());
                mobileMenuItemsWidths.value.unshift(elementWidth);

                requiredSpace -= elementWidth;

                if (availableSpace > requiredSpace) break;
            }
        } else if (
            mobileMenuItemsWidths.value.length > 0 &&
            availableSpace > mobileMenuItemsWidths.value[0] + requiredSpace
        ) {
            menuItems.value.push(menuMobileItems.value.shift());
            mobileMenuItemsWidths.value.shift();
        }
    }, [width]);

    React.useEffect(() => {
        menuItems.value = menuStore.value.sorted;
    }, [menuStore.value]);

    return (
        <motion.header
            ref={stickyHeader}
            className='header page__header'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
        >
            <div className='header__wrap'>
                {/* Лого-компонент */}
                <a className='header__logo-link logo-link' href='./' aria-label='Логотип' />
                <menu
                    className={classNames({
                        "header__menu menu": true,
                        menu_opened: mobileMenuOpened,
                    })}
                >
                    <ul ref={menuList} className='menu__list'>
                        <li>
                            <a className='menu__link' href='./'>
                                Главная
                            </a>
                        </li>
                        <li>
                            <a className='menu__link' href='./'>
                                О нас
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
                                <span className='submenu__button-icon'>{Icons.chevron_down}</span>
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
                                                <span className='submenu__button-icon'>{Icons.chevron_down}</span>
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
                                <span className='submenu__button-icon'>{Icons.chevron_down}</span>
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
                                                <span className='submenu__button-icon'>{Icons.chevron_down}</span>
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
                                                                    {Icons.chevron_down}
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
                        <li>
                            <a
                                className='social-group__link-icon'
                                target='_blank'
                                href='tel:84991493724'
                                rel='noreferrer noopener nofollow'
                                aria-label='Телефон'
                            >
                                {Icons.phone}
                            </a>
                        </li>
                    </ul>
                    {/* Кнопка перехода к форме обратной связи - можно якорем */}
                    <a href='#feedback-form' className='header__feedback-button button button_theme_fill-main'>
                        <span className='button__text'>Задать вопрос</span>
                    </a>
                    {/* Кнопка для вызова панели с поиском */}
                    {/*<button className='button button_theme_outline-main header__search-button' type='button'>*/}
                    {/*    <span className='button__icon'>{Icons.search}</span>*/}
                    {/*    <span className='button__text'>Найти...</span>*/}
                    {/*</button>*/}
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
                    {mobileMenuOpened ? Icons.close : Icons.menu}
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
