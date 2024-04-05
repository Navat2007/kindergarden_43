import React from "react";

const Button = ({
    children,
    iconName,
    type = "submit",
    isIconBtn,
    theme,
    extraClass,
    spinnerActive = false,
    ...rest
}) => {
    return (
        <button
            className={`admin-button${theme ? ` admin-button_theme_${theme}` : ``}${extraClass ? ` ${extraClass}` : ``}${
                isIconBtn ? ` admin-button_type_only-icon` : ``
            }${spinnerActive ? ` admin-button_loading` : ``}`}
            disabled={spinnerActive}
            type={type}
            {...rest}
        >
            {iconName && <span className={`admin-button__icon${extraClass ? ` ${extraClass}-icon` : ``}`}>{iconName}</span>}
            {children}
            {spinnerActive && (
                <div className={"admin-button__spinner"}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </button>
    );
};

export default Button;
