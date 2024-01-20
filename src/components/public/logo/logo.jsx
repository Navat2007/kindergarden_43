import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ extraClass }) => {
    return (
        <NavLink
            to={"/"}
            className={`logo-link${extraClass && ` ${extraClass}`}`}
            aria-label='Логотип'
            rel='noreferrer nofollow noopener'
        />
    );
};

export default React.memo(Logo);
