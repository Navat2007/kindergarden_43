import React, { forwardRef } from "react";

const FieldCheckbox = (
    { errorText, extraClass, label = "", visuallyLabel = true, placeholder = "", required = false, ...rest },
    ref
) => {
    const id = window.global.makeid(8);

    return (
        <div
            className={`admin-field admin-field_content_checkbox${errorText ? ` admin-field_state_error` : ``}${
                extraClass ? ` ${extraClass}` : ``
            }`}
        >
            <label
                className={`admin-field__label${extraClass ? ` ${extraClass}-label` : ``}${
                    !visuallyLabel ? ` visually-hidden` : ``
                }`}
                htmlFor={id}
            >
                {label}
            </label>
            <div className={`admin-field__inner${extraClass ? ` ${extraClass}-inner` : ``}`}>
                <input
                    ref={ref}
                    className={`admin-field__checkbox${extraClass ? ` ${extraClass}-checkbox` : ``}`}
                    id={id}
                    type='checkbox'
                    name='checkbox'
                    placeholder={placeholder}
                    required={required}
                    {...rest}
                />
            </div>
            <span className={`admin-field__info-text${extraClass ? ` ${extraClass}-info-text` : ``}`}>{errorText}</span>
        </div>
    );
};

export default forwardRef(FieldCheckbox);
