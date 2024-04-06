import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { Icons } from "../../svgs";

const ImagePreview = ({ items, open = false, index = 0, onClose }) => {
    const ref = React.createRef();

    React.useEffect(() => {
        if (ref.current) {
            ref.current.go(index);
        }
    }, []);

    return (
        <div className={`image-preview${open ? ` image-preview_open` : ``}`}>
            <div className='image-preview__panel'>
                <p className='image-preview__info-text'>1/4</p>
                <p className='image-preview__title'>Самое большое описание для картинки</p>
                <button
                    type='button'
                    className='icon-button image-preview__close'
                    aria-label='Закрыть'
                    onClick={onClose}
                >
                    {Icons.close}
                </button>
            </div>
            <Splide
                ref={ref}
                className='splide_arrows_theme-on-bg image-preview__container'
                options={{
                    type: "slide",
                    arrows: items.length > 1,
                    pagination: false,
                    mediaQuery: "max",
                    gap: "1em",
                    arrowPath:
                        "M24.6183 20.3627C24.8187 20.1623 24.8187 19.8373 24.6183 19.6368L13.1799 8.19882C12.8413 7.85997 12.8416 7.31101 13.1799 6.97278L13.18 6.97261C13.5183 6.63422 14.0673 6.63399 14.4061 6.97278L26.8207 19.3872C26.9901 19.5568 27.0743 19.7763 27.0743 19.9997C27.0743 20.2233 26.9898 20.4432 26.8203 20.6128L14.4058 33.0269L14.4056 33.0271C14.0668 33.3661 13.5181 33.3658 13.18 33.0273L13.1796 33.0269C12.8412 32.6885 12.8412 32.1394 13.1795 31.8011L24.6183 20.3627Z",
                    breakpoints: {
                        768: {
                            arrows: false,
                            pagination: true,
                        },
                    },
                }}
            >
                {items.map((item, index) => (
                    <SplideSlide key={index}>
                        {/* При клике добавь, чтобы добавлялся модификатор image-preview__image_fullsize, это позволит картинку показать всю, если она была контейнером скрыта. */}
                        <img
                            className='image-preview__image'
                            src={item.url.includes("http") ? item.url : process.env.REACT_APP_BASE_URL + item.url}
                            alt={item.url}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default ImagePreview;
