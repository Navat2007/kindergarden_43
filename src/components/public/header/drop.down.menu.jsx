import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {Icons} from "../../svgs";
import {GenerateUrl} from "../../../utils/generateUrl";
import classNames from "classnames";
import useOnClickOutside from "../../../hook/onClickOutside";

const getMenuLink = (menu) => {
    if (menu.custom_page === 1) {
        return GenerateUrl(menu.title);
    } else if (menu.page === 1 && menu.custom_page === 0) {
        return menu.url;
    } else {
        return "";
    }
};

function MenuItem({item}) {
    let className = ["menu__link"];

    return (
        <li>
            {item.external === 1 ? (
                <a href={item.url} target={"_blank"} className={className.join(" ")} rel='noreferrer'>
                    {item.title}
                </a>
            ) : (
                <NavLink
                    to={getMenuLink(item)}
                    className={({isActive}) => {
                        if (isActive) className.push("menu__link_actived");
                        return className.join(" ");
                    }}
                >
                    {item.title}
                </NavLink>
            )}
        </li>
    );
}

function DropdownItem({item, items, level}) {
    const location = useLocation();

    const [submenuOpened, setSubmenuOpened] = React.useState(false);
    const node = React.useRef();

    React.useLayoutEffect(() => {
        setSubmenuOpened(false);
    }, [location]);

    useOnClickOutside([node], (e) => {
        if (submenuOpened) {
            setSubmenuOpened(!submenuOpened);
        }
    });

    return (
        <li
            className={classNames({
                submenu: true,
                'submenu__item submenu__item_has-submenu': level > 1,
                submenu_opened: submenuOpened,
            })}
            data-level={level}
        >
            <button
                className={classNames({
                    "menu__link submenu__button": true,
                    submenu__button_actived: submenuOpened,
                })}
                type='button'
                aria-label='Развернуть список'
                onClick={() => setSubmenuOpened(!submenuOpened)}
            >
                <span className='submenu__button-text'>{item.title}</span>
                <span className='submenu__button-icon'>{Icons.chevron_down}</span>
            </button>
            {
                level === 1
                &&
                <div className='submenu__wrap'>
                    <div className='submenu__top-list-container' ref={node}>
                        <p className='submenu__title'>{item.title}</p>
                        <ul className={'submenu__top-list'}>
                            <DropdownMenu items={items} level={level}/>
                        </ul>
                    </div>
                </div>
            }
            {
                level > 1
                &&
                <div className='submenu__list-container' ref={node}>
                    {/*<p className='submenu__title'>{item.title}</p>*/}
                    <ul className={classNames({
                        'submenu__top-list': level === 1,
                        'submenu__list': level > 1
                    })}>
                        <DropdownMenu items={items} level={level}/>
                    </ul>
                </div>
            }
        </li>
    );
}

const DropdownMenu = ({items, level = 0}) => {
    if (!items || items.length === 0) return null;

    return items.map((item) => {
        if(item){
            if (item.submenu?.length > 0)
                return <DropdownItem key={item.title} item={item} items={item.submenu} level={level + 1}/>;

            return <MenuItem key={item.title} item={item}/>;
        }
    });
};

export default DropdownMenu;
