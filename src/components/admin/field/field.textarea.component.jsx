import React, { forwardRef } from "react";

const FieldTextArea = (
    { errorText, extraClass, label = "", visuallyLabel = true, placeholder = "", required = false, ...rest },
    ref
) => {
    const id = window.global.makeid(8);

    const handleKeyDown = (e) => {
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
    };

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
                <textarea
                    ref={ref}
                    className={`admin-field__input${extraClass ? ` ${extraClass}-input` : ``}`}
                    id={id}
                    name='textarea'
                    placeholder={placeholder}
                    required={required}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyDown}
                    {...rest}
                />
                <span className={`admin-field__info-text${extraClass ? ` ${extraClass}-info-text` : ``}`}>{errorText}</span>
            </div>
        </div>
    );
};

export default forwardRef(FieldTextArea);
