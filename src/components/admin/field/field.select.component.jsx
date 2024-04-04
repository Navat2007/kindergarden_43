import React, { forwardRef } from "react";

const FieldSelect = (
    {
        errorText,
        extraClass,
        label = "",
        visuallyLabel = true,
        placeholder = "",
        required = false,
        defaultSelectItem = {
            title: "Все",
            value: "Все",
            disabled: false,
        },
        selectItems = [],
        flatOptions = <></>,
        disabled,
        ...rest
    },
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
            <div className={`admin-field__inner admin-field__inner_content_select${extraClass ? ` ${extraClass}-inner` : ``}`}>
                <select
                    ref={ref}
                    className={`admin-field__select${extraClass ? ` ${extraClass}-select` : ``}`}
                    required={required}
                    disabled={disabled}
                    {...rest}
                >
                    {defaultSelectItem && (
                        <option defaultValue disabled={defaultSelectItem.disabled} value={defaultSelectItem.value}>
                            {defaultSelectItem.title}
                        </option>
                    )}
                    {selectItems.map((item, index) => (
                        <option key={item.value + "_" + index} value={item.value}>
                            {item.title}
                        </option>
                    ))}
                    {flatOptions}
                </select>
                <span className={`admin-field__info-text${extraClass ? ` ${extraClass}-info-text` : ``}`}>{errorText}</span>
            </div>
        </div>
    );
};

export default forwardRef(FieldSelect);
