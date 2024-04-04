import React, { forwardRef } from "react";

const FieldDate = (
    { errorText, extraClass, label = "", visuallyLabel = true, placeholder = "", type = "date", required = false, ...rest },
    ref
) => {
    const id = window.global.makeid(8);

    return (
        <div className={`admin-field${errorText ? ` admin-field_state_error` : ``}${extraClass ? ` ${extraClass}` : ``}`}>
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
                    className={`admin-field__input${extraClass ? ` ${extraClass}-input` : ``}`}
                    id={id}
                    type={type}
                    name='date'
                    placeholder={placeholder}
                    required={required}
                    {...rest}
                />
                <span className={`admin-field__info-text${extraClass ? ` ${extraClass}-info-text` : ``}`}>{errorText}</span>
            </div>
        </div>
    );
};

export default forwardRef(FieldDate);
