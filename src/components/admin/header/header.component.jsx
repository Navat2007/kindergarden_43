import React from "react";
import Button from "../../admin/button/button.component";
import ProfileHeader from "../profile.header/profile.header.component";
import { Icons } from "../../svgs.js";

const HeaderComponent = ({ children, extraClass, handleBurger }) => {
    return (
        <header className={`admin-header ${extraClass && extraClass}`}>
            <Button
                type='button'
                isIconBtn
                extraClass='admin-header__burger'
                iconName={Icons.menu}
                aria-label='Открыть/Закрыть меню'
                onClick={handleBurger}
            />
            {children}
            <ProfileHeader />
        </header>
    );
};

export default HeaderComponent;
