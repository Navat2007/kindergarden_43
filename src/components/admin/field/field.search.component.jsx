import React, { forwardRef } from "react";

const FieldEmail = ({ errorText, extraClass, label, visuallyLabel = true, required = false, ...rest }, ref) => {
    return (
        <div className={`admin-field${extraClass ? ` ${extraClass}` : ``}${errorText ? ` admin-field_state_error` : ``}`}>
            <label
                className={`admin-field__label${extraClass ? ` ${extraClass}-label` : ``}${
                    !visuallyLabel ? ` visually-hidden` : ``
                }`}
                htmlFor='search'
            >
                {label}
            </label>
            <div className={`admin-field__inner${extraClass ? ` ${extraClass}-inner` : ``}`}>
                <input
                    ref={ref}
                    className={`admin-field__input${extraClass ? ` ${extraClass}-input` : ``}`}
                    id='search'
                    type='search'
                    autoComplete='off'
                    name='search'
                    required={required}
                    {...rest}
                />
                <span className={`admin-field__info-text${extraClass ? ` ${extraClass}-info-text` : ``}`}>{errorText}</span>
            </div>
        </div>
    );
};

export default forwardRef(FieldEmail);
