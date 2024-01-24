import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { signal } from "@preact/signals-react";
import classNames from "classnames";

import useWindowSize from "../../../hook/useWindowSize";
import useOnClickOutside from "../../../hook/onClickOutside";

import { menuStore } from "../../../store/public/menuStore";

import Logo from "../logo/logo";
import SocialGroup from "../social.group/social.group";
import DropdownMenu from "./drop.down.menu";

import { Icons } from "../../svgs";

const menuItems = signal([]);
const menuMobileItems = signal([]);
const mobileMenuItemsWidths = signal([]);

const Header = () => {
    const location = useLocation();
    const [width, height] = useWindowSize();

    const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);

    const node = React.useRef();
    const button = React.useRef();
    const menuContainer = React.useRef();
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
        if (!menuItems.value || menuItems.value.length === 0) return;

        let offset = 100;
        let availableSpace = menuContainer.current.getBoundingClientRect().width;
        let requiredSpace =
            Object.values(menuList.current.childNodes).reduce((total, children) => total + children.offsetWidth, 0) +
            offset;

        console.log("availableSpace: ", availableSpace);
        console.log("requiredSpace: ", requiredSpace);

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
                <Logo extraClass='header__logo-link' />
                <menu
                    ref={menuContainer}
                    className={classNames({
                        "header__menu menu": true,
                        menu_opened: mobileMenuOpened,
                    })}
                >
                    <ul className={`menu__list`} ref={menuList}>
                        <DropdownMenu items={menuItems.value} />
                        <li
                            className={classNames({
                                submenu: true,
                                submenu_opened: burgerOpened,
                            })}
                            ref={mobileMenu}
                            data-level='1'
                        >
                            <button
                                ref={button}
                                className={classNames({
                                    "menu__link submenu__button": true,
                                    submenu__button_actived: burgerOpened,
                                })}
                                type='button'
                                aria-label='Развернуть список'
                                onClick={() => {
                                    setBurgerOpened(!burgerOpened);
                                }}
                            >
                                <span className='submenu__button-text'>Еще</span>
                                <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                            </button>
                            <div className='submenu__wrap'>
                                <div className='submenu__top-list-container' ref={node}>
                                    <p className='submenu__title'>Меню</p>
                                    <ul className='submenu__top-list' ref={mobileMenuList}>
                                        <DropdownMenu items={menuMobileItems.value} level={2} />
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </menu>
                <div className='header__panel'>
                    <SocialGroup />
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
