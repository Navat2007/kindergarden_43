import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/admin/header/header.component";
import Menu from "../components/admin/menu/menu.component";

import { AdminMenuIcons } from "../components/svgs.js";
import "../styles/admin.layout.scss";

const AdminLayout = () => {
    const [burgerOpened, setBurgerOpened] = React.useState(false);
    const menu = [
        {
            title: "Пользователи",
            icon: AdminMenuIcons.users,
            link: "/admin/users",
        },
        {
            title: "Файлы",
            icon: AdminMenuIcons.media,
            link: "/admin/mediaFiles",
        },
        {
            title: "Меню",
            icon: AdminMenuIcons.menu,
            link: "/admin/menu",
        },
        {
            title: "Cтраницы",
            icon: AdminMenuIcons.user_pages,
            link: "/admin/customPages",
        },
        {
            title: "separator",
            separator: true,
        },
        {
            title: "Документы",
            icon: AdminMenuIcons.documents,
            link: "/admin/documents",
        },
        {
            title: "Платные услуги",
            icon: AdminMenuIcons.lessons,
            link: "/admin/lessons",
        },
        {
            title: "Сотрудники",
            icon: AdminMenuIcons.employers,
            link: "/admin/employees",
        },
        {
            title: "Группы",
            icon: AdminMenuIcons.groups,
            link: "/admin/groups",
        },
        {
            title: "Питание",
            icon: AdminMenuIcons.food,
            link: "/admin/food",
        },
        // {
        //     title: "Режим",
        //     icon: AdminMenuIcons.mode,
        //     link: "/admin/mode",
        // },
        {
            title: "Новости",
            icon: AdminMenuIcons.news,
            link: "/admin/news",
        },
        {
            title: "О нас",
            icon: AdminMenuIcons.company,
            link: "/admin/about",
        },
    ];

    const handleBurgerMenu = () => {
        setBurgerOpened(!burgerOpened);
    };

    return (
        <div className='app'>
            <Menu menu={menu} burgerOpened={burgerOpened} setBurgerOpened={handleBurgerMenu} />
            <main className='app__main'>
                <Header extraClass={"app__header"} handleBurger={handleBurgerMenu} />
                <div className='app__content'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
