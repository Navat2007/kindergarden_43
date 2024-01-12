import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import useNewsStore from "../../store/public/newsStore";

import BasicPage from "../../components/public/basic.page/basic.page.component";
import { Icons, AdvantagesIcons, SocialIcons } from "../../components/svgs";

const IndexPage = () => {
    const store = useNewsStore();
    const [mobileMenuOpened, setMobileMenuOpened] = React.useState(false);
    const [subMenuOpened, setSubMenuOpened] = React.useState(false);
    const [moreMenuOpened, setMoreMenuOpened] = React.useState(false);
    const [dropDownMenuOpened, setDropDownMenuOpened] = React.useState(false);
    const [thirdDropDownMenuOpened, setThirdDropDownMenuOpened] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            //await store.loadAllMain();
        };

        fetchData();
    }, []);

    return (
        <BasicPage>
            <Helmet>
                <title>Детский сад № 43 УДПРФ</title>
            </Helmet>
            {/* Шапка */}
            <header className='header page__header section'>
                <div className='header__wrap section__wrap'>
                    {/* Лого-компонент */}
                    <a className='header__logo-link logo-link' href='./' aria-label='Логотип' />
                    <menu
                        className={classNames({
                            "header__menu menu": true,
                            menu_opened: mobileMenuOpened,
                        })}
                    >
                        <ul className='menu__list'>
                            <li>
                                <a className='menu__link' href='./'>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    О нас
                                </a>
                            </li>
                            <li
                                className={classNames({
                                    submenu: true,
                                    submenu_opened: subMenuOpened,
                                })}
                            >
                                <button
                                    className={classNames({
                                        "menu__link submenu__button": true,
                                        submenu__button_actived: subMenuOpened,
                                    })}
                                    type='button'
                                    aria-label='Развернуть список'
                                    onClick={() => {
                                        setSubMenuOpened(!subMenuOpened);
                                    }}
                                >
                                    <span className='submenu__button-text'>
                                        Сведения об образовательной организации
                                    </span>
                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                </button>
                                {/* первая вложенность с большим заголовком и оберткой для размещения под шапкой */}
                                <div className='submenu__wrap'>
                                    <div className='submenu__top-list-container'>
                                        <p className='submenu__title'>Сведения об образовательной организации</p>
                                        <ul className='submenu__top-list'>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Основные сведения
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Структура и органы управления образовательной организацией
                                                </a>
                                            </li>
                                            {/* Вторая вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                            <li
                                                className={classNames({
                                                    "submenu__item submenu__item_has-submenu": true,
                                                    "submenu__item_has-submenu_opened": dropDownMenuOpened,
                                                })}
                                            >
                                                <button
                                                    className={classNames({
                                                        "submenu__button menu__link": true,
                                                        submenu__button_actived: dropDownMenuOpened,
                                                    })}
                                                    type='button'
                                                    aria-label='Развернуть список'
                                                    onClick={() => {
                                                        setDropDownMenuOpened(!dropDownMenuOpened);
                                                    }}
                                                >
                                                    <span className='submenu__button-text'>Документы</span>
                                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                                </button>
                                                <div className='submenu__list-container'>
                                                    <ul className='submenu__list'>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Основные сведения
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Структура и органы управления образовательной
                                                                организацией
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Документы
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образование
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образование
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образовательные стандарты и требования
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Руководство. Педагогический (научно-педагогический) состав
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Материально-техническое обеспечение и оснащённость образовательного
                                                    процесса
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Стипендии и меры поддержки обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Платные образовательные услуги
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Финансово-хозяйственная деятельность
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Вакантные места для приёма (перевода) обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Доступная среда
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Международное сотрудничество
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Организация питания в образовательной организации
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Программы
                                </a>
                            </li>
                            <li>
                                <a className='menu__link' href='./'>
                                    Режим
                                </a>
                            </li>
                            <li
                                className={classNames({
                                    submenu: true,
                                    submenu_opened: moreMenuOpened,
                                })}
                            >
                                <button
                                    className={classNames({
                                        "menu__link submenu__button": true,
                                        submenu__button_actived: moreMenuOpened,
                                    })}
                                    type='button'
                                    aria-label='Развернуть список'
                                    onClick={() => {
                                        setMoreMenuOpened(!moreMenuOpened);
                                    }}
                                >
                                    <span className='submenu__button-text'>Еще</span>
                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                </button>
                                {/* первая вложенность с большим заголовком и оберткой для размещения под шапкой */}
                                <div className='submenu__wrap'>
                                    <div className='submenu__top-list-container'>
                                        <p className='submenu__title'>Меню</p>
                                        <ul className='submenu__top-list'>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Основные сведения
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Структура и органы управления образовательной организацией
                                                </a>
                                            </li>
                                            {/* Вторая вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                            <li
                                                className={classNames({
                                                    "submenu__item submenu__item_has-submenu": true,
                                                    "submenu__item_has-submenu_opened": dropDownMenuOpened,
                                                })}
                                            >
                                                <button
                                                    className={classNames({
                                                        "menu__link submenu__button": true,
                                                        submenu__button_actived: dropDownMenuOpened,
                                                    })}
                                                    type='button'
                                                    aria-label='Развернуть список'
                                                    onClick={() => {
                                                        setDropDownMenuOpened(!dropDownMenuOpened);
                                                    }}
                                                >
                                                    <span className='submenu__button-text'>Документы</span>
                                                    <span className='submenu__button-icon'>{Icons.chevron_down}</span>
                                                </button>
                                                <div className='submenu__list-container'>
                                                    <ul className='submenu__list'>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Основные сведения
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                        {/* Третья вложенность без заголовка раздела и обертки, с классом submenu__item submenu__item_has-submenu */}
                                                        <li
                                                            className={classNames({
                                                                "submenu__item submenu__item_has-submenu": true,
                                                                "submenu__item_has-submenu_opened":
                                                                    thirdDropDownMenuOpened,
                                                            })}
                                                        >
                                                            <button
                                                                className={classNames({
                                                                    "menu__link submenu__button": true,
                                                                    submenu__button_actived: thirdDropDownMenuOpened,
                                                                })}
                                                                type='button'
                                                                aria-label='Развернуть список'
                                                                onClick={() => {
                                                                    setThirdDropDownMenuOpened(
                                                                        !thirdDropDownMenuOpened
                                                                    );
                                                                }}
                                                            >
                                                                <span className='submenu__button-text'>Документы</span>
                                                                <span className='submenu__button-icon'>
                                                                    {Icons.chevron_down}
                                                                </span>
                                                            </button>
                                                            <div className='submenu__list-container'>
                                                                <ul className='submenu__list'>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Основные сведения
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Структура и органы управления
                                                                            образовательной организацией
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Документы
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Образование
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className='menu__link' href='./'>
                                                                            Образовательные стандарты и требования
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Документы
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образование
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className='menu__link' href='./'>
                                                                Образовательные стандарты и требования
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образование
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Образовательные стандарты и требования
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Руководство. Педагогический (научно-педагогический) состав
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Материально-техническое обеспечение и оснащённость образовательного
                                                    процесса
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Стипендии и меры поддержки обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Платные образовательные услуги
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Финансово-хозяйственная деятельность
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Вакантные места для приёма (перевода) обучающихся
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Доступная среда
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Международное сотрудничество
                                                </a>
                                            </li>
                                            <li>
                                                <a className='menu__link' href='./'>
                                                    Организация питания в образовательной организации
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </menu>
                    <div className='header__panel'>
                        {/* Панель соцссылок */}
                        <ul className='social-group'>
                            <li>
                                <a
                                    className='social-group__link-icon'
                                    target='_blank'
                                    href='https://vk.com/public219786348'
                                    rel='noreferrer noopener nofollow'
                                    aria-label='Вконтакте'
                                >
                                    {SocialIcons.vk_without_color}
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-group__link-icon'
                                    target='_blank'
                                    href='http://t.me/Fgdou43'
                                    rel='noreferrer noopener nofollow'
                                    aria-label='Телеграм'
                                >
                                    {SocialIcons.t_without_color}
                                </a>
                            </li>
                            <li>
                                <a
                                    className='social-group__link-icon'
                                    target='_blank'
                                    href='tel:84991493724'
                                    rel='noreferrer noopener nofollow'
                                    aria-label='Телефон'
                                >
                                    {Icons.phone}
                                </a>
                            </li>
                        </ul>
                        {/* Кнопка перехода к форме обратной связи - можно якорем */}
                        <a href='#feedback-form' className='header__feedback-button button button_theme_fill-main'>
                            <span className='button__text'>Задать вопрос</span>
                        </a>
                        {/* Кнопка для вызова панели с поиском */}
                        <button className='button button_theme_outline-main header__search-button' type='button'>
                            <span className='button__icon'>{Icons.search}</span>
                            <span className='button__text'>Найти...</span>
                        </button>
                    </div>
                    <button
                        className={classNames({
                            "icon-button header__mobile-button": true,
                            "header__mobile-button_actived": mobileMenuOpened,
                        })}
                        type='button'
                        aria-label='Мобильное выпадающее меню'
                        onClick={() => {
                            setMobileMenuOpened(!mobileMenuOpened);
                        }}
                    >
                        {mobileMenuOpened ? Icons.close : Icons.menu}
                    </button>
                </div>
            </header>
            <main className='page__content'>
                {/* Главный баннер со слайдером */}
                <section className='lead section wave-decor wave-decor_inset_bottom blobs'>
                    <div
                        className='blobs__item blobs__item_theme_secondary blobs__item_place_lead-top-left'
                        aria-hidden='true'
                    ></div>
                    <div
                        className='blobs__item blobs__item_type_secondary blobs__item_theme_accent blobs__item_place_lead-bottom-right'
                        aria-hidden='true'
                    ></div>
                    <div className='lead__columns section__wrap'>
                        <div className='lead__column'>
                            <p className='lead__subtitle'>Центр развития ребёнка</p>
                            <h1 className='lead__title'>Детский сад № 43</h1>
                            <div className='lead__main-text'>
                                <p>
                                    Мы осуществляем качественное воспитание и обучение детей благодаря подбору
                                    квалифицированных педагогов и использованию инновационных эффективных методик.
                                </p>
                                <p>
                                    Мы успешно создаём в детском саду атмосферу дома, мира удивительных открытий, мира
                                    творчества и познания.
                                </p>
                            </div>
                            <a href='#0' className='button button_theme_outline-white button_content_icon-arrow-next'>
                                <span className='button__text'>Об учреждении</span>
                                <span className='button__icon'>{Icons.arrow_next}</span>
                            </a>
                        </div>
                        <Splide
                            aria-label='Фотографии детского садика'
                            options={{
                                type: "fade",
                                rewind: true,
                                autoplay: true,
                                cover: true,
                                heightRatio: 0.608,
                                pagination: false,
                                arrows: false,
                            }}
                        >
                            <SplideSlide className='corner-rounded corner-rounded_size_lg'>
                                <img
                                    src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                    alt='Image 1'
                                />
                            </SplideSlide>
                            <SplideSlide className='corner-rounded corner-rounded_size_lg'>
                                <img
                                    src='https://img.goodfon.ru/original/1600x900/7/f4/novyi-god-bokaly-shampanskoe-ukrashenie-lenta-dekor.jpg'
                                    alt='Image 2'
                                />
                            </SplideSlide>
                        </Splide>
                    </div>
                </section>
                {/* Блок преимуществ */}
                <section className='section advantages' aria-label='Преимущества'>
                    <div className='section__wrap'>
                        <ul className='section__card-deck advantages__color-list'>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.time}
                                    </span>
                                    <span className='text-item__text'>
                                        Режим работы: <span className='text-item__text-accent'>с 07:00 до 19:00</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.child}
                                    </span>
                                    <span className='text-item__text'>
                                        Группы: <span className='text-item__text-accent'>до 15 человек</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.territory}
                                    </span>
                                    <span className='text-item__text'>
                                        Площадь для прогулок:{" "}
                                        <span className='text-item__text-accent'>
                                            собственная оборудованная территория для прогулок
                                        </span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.medical_v3}
                                    </span>
                                    <span className='text-item__text'>
                                        Утренний фильтр медработником:{" "}
                                        <span className='text-item__text-accent'>ежедневно</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.baby}
                                    </span>
                                    <span className='text-item__text'>
                                        Возраст детей: <span className='text-item__text-accent'>с 1,6 до 7 лет</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.food}
                                    </span>
                                    <span className='text-item__text'>
                                        Питание:{" "}
                                        <span className='text-item__text-accent'>
                                            сбалансированное 4-х разовое питание
                                        </span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.house}
                                    </span>
                                    <span className='text-item__text'>
                                        Помещение: <span className='text-item__text-accent'>800 кв.м</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.gym}
                                    </span>
                                    <span className='text-item__text'>
                                        Тренажёрный зал: <span className='text-item__text-accent'>с 4 лет</span>
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className='text-item'>
                                    <span className='text-item__icon advantages__color-item-icon'>
                                        {AdvantagesIcons.pool}
                                    </span>
                                    <span className='text-item__text'>
                                        Бассеин: <span className='text-item__text-accent'>с 3–4 лет</span>
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* Об учреждении */}
                <section className='section section_indent-small about'>
                    <div className='section__wrap section__wrap_size_medium section__wrap_bg_main-light corner-rounded corner-rounded_size_lg'>
                        <h2 className='section__title section__title_with-decor'>Об учреждении</h2>
                        <div className='about__two-columns'>
                            <img
                                className='about__image'
                                src='http://ooo-ado.ru/wp-content/uploads/2021/06/265.jpg'
                                alt='Описание фотографии'
                                loading='lazy'
                            />
                            <div className='about__content'>
                                <div className='about__main-info'>
                                    <h3 className='about__title'>
                                        <span className='about__title-accent'>Булаева</span>
                                        Татьяна Александровна
                                    </h3>
                                    <p>Занимаемая должность: Заведующая</p>
                                    <p>Стаж работы по специальности: 24 года</p>
                                </div>
                                <div className='about__main-text'>
                                    <p>
                                        ФГБДОУ "Центр развития ребенка - детский сад № 43" Управления делами Президента
                                        Российской Федерации расположен в экологически чистом Западном районе г. Москвы.
                                    </p>
                                    <p>
                                        В детском саду № 43 реализуется уникальная образовательная программа, проводится
                                        качественная подготовка детей к школе, после которой дети с легкостью поступают
                                        в престижные школы. С детьми работают опытные и квалифицированные педагоги
                                        (воспитатели, учителя-логопеды, инструктор по физической культуре, тренер по
                                        плаванию, музыкальные руководители, педагог-психолог и педагоги дополнительного
                                        образования).
                                    </p>
                                </div>
                                <a
                                    href='#0'
                                    className='button button_theme_outline-main button_content_icon-arrow-next'
                                >
                                    <span className='button__text'>На страницу учреждения</span>
                                    <span className='button__icon'>{Icons.arrow_next}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Подвал */}
            <footer className='footer page__footer section'>
                <div className='section__wrap footer__wrap'>
                    {/* Лого-компонент */}
                    <a className='footer__logo-link logo-link' href='./' aria-label='Логотип' />
                    <div className='footer__columns'>
                        <address className='footer__address'>
                            <a
                                className='footer__link footer__link_type_phone'
                                href='tel:84991493724'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='footer__link-icon'>{Icons.phone}</span>
                                <span className='footer__link-text'>+7 499 149-37-24</span>
                                <span className='footer__text-small'>Пн-пт с 7:00 до 19:00</span>
                            </a>
                            <a
                                className='footer__link footer__color-main'
                                href='#0'
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='footer__link-text'>г. Москва, ул. Академика Павлова, д. 14, к. 2</span>
                            </a>
                            <a
                                className='footer__link'
                                href='mailto:fgdou43@bk.ru'
                                target='_blank'
                                rel='noreferrer noopener nofollow'
                            >
                                <span className='footer__link-icon'>{Icons.email}</span>
                                <span className='footer__link-text footer__text-highlight'>fgdou43@bk.ru</span>
                            </a>
                            {/* Панель соцссылок */}
                            <ul className='footer__social-group social-group'>
                                <li>
                                    <a
                                        className='social-group__link-icon'
                                        target='_blank'
                                        href='https://vk.com/public219786348'
                                        rel='noreferrer noopener nofollow'
                                        aria-label='Вконтакте'
                                    >
                                        {SocialIcons.vk_without_color}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='social-group__link-icon'
                                        target='_blank'
                                        href='http://t.me/Fgdou43'
                                        rel='noreferrer noopener nofollow'
                                        aria-label='Телеграм'
                                    >
                                        {SocialIcons.t_without_color}
                                    </a>
                                </li>
                            </ul>
                        </address>
                        <menu className='footer__menu menu'>
                            <ul className='menu__list'>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Сведения об образовательной организации
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Программы
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Режим
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Расписание
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Главная
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Сведения об образовательной организации
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Программы
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Режим
                                    </a>
                                </li>
                                <li>
                                    <a className='menu__link' href='./'>
                                        Расписание
                                    </a>
                                </li>
                            </ul>
                        </menu>
                    </div>
                    <div className='footer__copyright'>
                        <p>
                            Федеральное государственное бюджетное дошкольное образовательное учреждение «Центр развития
                            ребёнка — детский сад № 43» Управления делами Президента Российской Федерации
                        </p>
                        <p>1958–2023 ©Все права защищены</p>
                    </div>
                </div>
            </footer>
        </BasicPage>
    );
};

export default IndexPage;
