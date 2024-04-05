import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {useForm} from "react-hook-form";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import useAboutStore from "../../../store/public/aboutStore";
import useGroupsStore from "../../../store/public/groupsStore";
import useEmployeesStore from "../../../store/public/employeesStore";

import BasicPage from "../../../components/public/basic.page/basic.page.component";
import Breadcrumbs from "../../../components/public/breadcrumbs/breadcrumbs";
import FieldSelect from "../../../components/admin/field/field.select.component";
import MultiSelect from "../../../components/admin/multi_select/multi_select.component";

const GroupsPage = () => {
    const aboutStore = useAboutStore();
    const groupsStore = useGroupsStore();
    const teachersStore = useEmployeesStore();

    const {control, getValues, setValue} = useForm();
    const [selectedGroup, setSelectedGroup] = React.useState(0);

    React.useEffect(() => {
        const fetchData = async () => {
            await aboutStore.loadByID({ id: 1 });
            await groupsStore.loadAll();
            await teachersStore.loadAll();
        };

        fetchData();

        console.log(groupsStore.items);
    }, []);

    return (
        <BasicPage loadings={[aboutStore, groupsStore, teachersStore]}>
            <Helmet>
                <title>Наши группы</title>
            </Helmet>
            <motion.div
                className='article article_place_groups section'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className="article__header">
                    <Breadcrumbs
                        items={[
                            {
                                title: "Главная",
                                url: "/",
                            },
                            {
                                title: "Наши группы",
                                url: "",
                            },
                        ]}
                    />
                    <div className='section__wrap'>
                        <h1 id={"groups"} className='section__title section__title_with-decor'>
                            Наши группы
                        </h1>
                        <MultiSelect
                            control={control}
                            isMulti={false}
                            name={"group_select"}
                            closeMenuOnSelect={true}
                            placeholder={"Выберите группу"}
                            options={groupsStore.items?.map((item) => {
                                return {
                                    label: item.title,
                                    value: item.ID,
                                };
                            })}
                            onChange={(selected) => {
                                setValue("group_select", selected);
                                setSelectedGroup(selected.value);
                            }}
                        />
                    </div>
                </div>

                {/* Группа 1 */}
                <section className='section page__section-indent article__section'>
                    <div className='section__wrap'>
                        <h2 className='section__subtitle'>
                            Группа № 1, общеразвивающей направленности, 1-ая младшая группа
                        </h2>
                        <div className='section__main-text section__main-text_size_large'>
                            <p>Небольшое описание группы</p>
                        </div>
                        <div className='article__section-item'>
                            <h3 className='section__caption section__caption_size_large'>Воспитатели</h3>
                            <ul className='section__card-deck'>
                                <li>
                                    <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                        <article className='card card_orientation_horizontal card_type_people'>
                                            <img
                                                className='card__image'
                                                src={""}
                                                alt='Описание фотографии'
                                                loading='lazy'
                                            />
                                            <div className='card__content'>
                                                <h3 className='card__title'>
                                                    <span className='card__title-accent'>Годик</span>
                                                    Татьяна Михайловна
                                                </h3>
                                                <div className='card__main-text'>
                                                    <p className='card__text'>Старший воспитатель</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                                <li>
                                    <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                        <article className='card card_orientation_horizontal card_type_people'>
                                            <img
                                                className='card__image'
                                                src={""}
                                                alt='Описание фотографии'
                                                loading='lazy'
                                            />
                                            <div className='card__content'>
                                                <h3 className='card__title'>
                                                    <span className='card__title-accent'>Годик</span>
                                                    Татьяна Михайловна
                                                </h3>
                                                <div className='card__main-text'>
                                                    <p className='card__text'>Старший воспитатель</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                                <li>
                                    <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                        <article className='card card_orientation_horizontal card_type_people'>
                                            <img
                                                className='card__image'
                                                src={""}
                                                alt='Описание фотографии'
                                                loading='lazy'
                                            />
                                            <div className='card__content'>
                                                <h3 className='card__title'>
                                                    <span className='card__title-accent'>Годик</span>
                                                    Татьяна Михайловна
                                                </h3>
                                                <div className='card__main-text'>
                                                    <p className='card__text'>Старший воспитатель</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Таблица с классами компонента, только внутри есть разные селекторы для выделения текста */}
                        <div className='table article__section-item'>
                            <h3 className='table__title'>Расписание занятий</h3>
                            <div className='table__container'>
                                <table className='table__table'>
                                    <thead>
                                        <tr className='table__row'>
                                            <th className='table__cell-heading'>
                                                <span className='table__cell-heading-text'>
                                                    <span className='desktop-visible'>День недели</span>
                                                    <span className='mobile-visible'>День</span>
                                                </span>
                                            </th>
                                            <th className='table__cell-heading'>
                                                <span className='table__cell-heading-text'>Время, Занятие</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='table__row'>
                                            <td className='table__cell'>
                                                <span className='table__cell-text table__accent-text'>
                                                    <span className='desktop-visible'>Понедельник</span>
                                                    <span className='mobile-visible'>Пн</span>
                                                </span>
                                            </td>
                                            <td className='table__cell'>
                                                <span className='table__item'>
                                                    <span className='table__accent-text'>9.00–9.15 </span>— Подготовка
                                                    к обучению грамоте <br />
                                                    <span className='table__accent-text'>9.25–9.40 </span>— Музыка
                                                    11.30–11.45 <br />
                                                    <span className='table__accent-text'>11.30–11.45 </span>—
                                                    Физкультура на улице <br />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className='table__row'>
                                            <td className='table__cell'>
                                                <span className='table__item table__accent-text'>
                                                    <span className='desktop-visible'>Вторник</span>
                                                    <span className='mobile-visible'>Вт</span>
                                                </span>
                                            </td>
                                            <td className='table__cell'>
                                                <span className='table__item'>
                                                    <span className='table__accent-text'>9.00–9.15 </span>— Подготовка
                                                    к обучению грамоте <br />
                                                    <span className='table__accent-text'>9.25–9.40 </span>— Музыка
                                                    11.30–11.45 <br />
                                                    <span className='table__accent-text'>11.30–11.45 </span>—
                                                    Физкультура на улице <br />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='article__section-item'>
                            <h3 className='section__caption section__caption_size_large'>Фотографии</h3>
                            <Splide
                                className='splide splide_mobile_auto-width splide_pagination_grey'
                                options={{
                                    type: "loop",
                                    cloneStatus: false,
                                    pagination: true,
                                    arrows: false,
                                    autoplay: true,
                                    perPage: 3,
                                    focus: "center",
                                    updateOnMove: true,
                                    gap: ".5em",
                                    breakpoints: {
                                        1000: {
                                            perPage: 2,
                                        },
                                        480: {
                                            perPage: 1,
                                            padding: "var(--inline-indent)",
                                        },
                                    },
                                }}
                            >
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </section>
                {/* Группа 2 */}
                <section className='section page__section-indent article__section'>
                    <div className='section__wrap'>
                        <h2 className='section__subtitle'>
                            Группа № 1, общеразвивающей направленности, 1-ая младшая группа
                        </h2>
                        <div className='section__main-text section__main-text_size_large'>
                            <p>Небольшое описание группы</p>
                        </div>
                        <div className='article__section-item'>
                            <h3 className='section__caption section__caption_size_large'>Воспитатели</h3>
                            <ul className='section__card-deck'>
                                <li>
                                    <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                        <article className='card card_orientation_horizontal card_type_people'>
                                            <img
                                                className='card__image'
                                                src={""}
                                                alt='Описание фотографии'
                                                loading='lazy'
                                            />
                                            <div className='card__content'>
                                                <h3 className='card__title'>
                                                    <span className='card__title-accent'>Годик</span>
                                                    Татьяна Михайловна
                                                </h3>
                                                <div className='card__main-text'>
                                                    <p className='card__text'>Старший воспитатель</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                                <li>
                                    <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                        <article className='card card_orientation_horizontal card_type_people'>
                                            <img
                                                className='card__image'
                                                src={""}
                                                alt='Описание фотографии'
                                                loading='lazy'
                                            />
                                            <div className='card__content'>
                                                <h3 className='card__title'>
                                                    <span className='card__title-accent'>Годик</span>
                                                    Татьяна Михайловна
                                                </h3>
                                                <div className='card__main-text'>
                                                    <p className='card__text'>Старший воспитатель</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                                <li>
                                    <a href='#0' rel='noreferrer noopener ugs' className='card-link'>
                                        <article className='card card_orientation_horizontal card_type_people'>
                                            <img
                                                className='card__image'
                                                src={""}
                                                alt='Описание фотографии'
                                                loading='lazy'
                                            />
                                            <div className='card__content'>
                                                <h3 className='card__title'>
                                                    <span className='card__title-accent'>Годик</span>
                                                    Татьяна Михайловна
                                                </h3>
                                                <div className='card__main-text'>
                                                    <p className='card__text'>Старший воспитатель</p>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Таблица с классами компонента, только внутри есть разные селекторы для выделения текста */}
                        <div className='table article__section-item'>
                            <h3 className='table__title'>Расписание занятий</h3>
                            <div className='table__container'>
                                <table className='table__table'>
                                    <thead>
                                        <tr className='table__row'>
                                            <th className='table__cell-heading'>
                                                <span className='table__cell-heading-text'>
                                                    <span className='desktop-visible'>День недели</span>
                                                    <span className='mobile-visible'>День</span>
                                                </span>
                                            </th>
                                            <th className='table__cell-heading'>
                                                <span className='table__cell-heading-text'>Время, Занятие</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='table__row'>
                                            <td className='table__cell'>
                                                <span className='table__cell-text table__accent-text'>
                                                    <span className='desktop-visible'>Понедельник</span>
                                                    <span className='mobile-visible'>Пн</span>
                                                </span>
                                            </td>
                                            <td className='table__cell'>
                                                <span className='table__item'>
                                                    <span className='table__accent-text'>9.00–9.15 </span>— Подготовка
                                                    к обучению грамоте <br />
                                                    <span className='table__accent-text'>9.25–9.40 </span>— Музыка
                                                    11.30–11.45 <br />
                                                    <span className='table__accent-text'>11.30–11.45 </span>—
                                                    Физкультура на улице <br />
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className='table__row'>
                                            <td className='table__cell'>
                                                <span className='table__item table__accent-text'>
                                                    <span className='desktop-visible'>Вторник</span>
                                                    <span className='mobile-visible'>Вт</span>
                                                </span>
                                            </td>
                                            <td className='table__cell'>
                                                <span className='table__item'>
                                                    <span className='table__accent-text'>9.00–9.15 </span>— Подготовка
                                                    к обучению грамоте <br />
                                                    <span className='table__accent-text'>9.25–9.40 </span>— Музыка
                                                    11.30–11.45 <br />
                                                    <span className='table__accent-text'>11.30–11.45 </span>—
                                                    Физкультура на улице <br />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='article__section-item'>
                            <h3 className='section__caption section__caption_size_large'>Фотографии</h3>
                            <Splide
                                className='splide splide_mobile_auto-width splide_pagination_grey'
                                options={{
                                    type: "loop",
                                    cloneStatus: false,
                                    pagination: true,
                                    arrows: false,
                                    autoplay: true,
                                    perPage: 3,
                                    focus: "center",
                                    updateOnMove: true,
                                    gap: ".5em",
                                    breakpoints: {
                                        1000: {
                                            perPage: 2,
                                        },
                                        480: {
                                            perPage: 1,
                                            padding: "var(--inline-indent)",
                                        },
                                    },
                                }}
                            >
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                                <SplideSlide>
                                    <img
                                        src='https://darfix.ru/wp-content/uploads/8/3/b/83bad5381b0ffc4afb6fbf3a8b12b6e0.jpeg'
                                        alt='Описание изображения'
                                        className='corner-rounded corner-rounded_size_lg'
                                        loading='lazy'
                                    />
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </section>
            </motion.div>
            {/* старая разметка
                <ul className='about__list'>
                    {groupsStore.loading && <h3>Загрузка...</h3>}
                    {groupsStore.loading === false &&
                        groupsStore.items.map((item, index) => {
                            return (
                                <motion.li
                                    key={index}
                                    initial='offscreen'
                                    whileInView='onscreen'
                                    viewport={{ once: true, amount: 0.05 }}
                                >
                                    <NavLink className={"card-link"} to={"" + item.ID}>
                                        <article className='card'>
                                            <img
                                                className='card__image'
                                                src={
                                                    item.image.includes("http")
                                                        ? item.image
                                                        : process.env.REACT_APP_BASE_URL + item.image
                                                }
                                                loading='lazy'
                                                alt='Изображение группы'
                                            />
                                            <div className='card__content'>
                                                <h2 className='card__title'>{item.title}</h2>
                                                <div class='card__main-text'>
                                                    <p class='card__text'>{item.preview}</p>
                                                </div>
                                            </div>
                                        </article>
                                    </NavLink>
                                </motion.li>
                            );
                        })}
                </ul> */}
        </BasicPage>
    );
};

export default GroupsPage;
