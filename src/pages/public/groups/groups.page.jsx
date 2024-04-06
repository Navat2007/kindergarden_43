import React from "react";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {NavLink} from "react-router-dom";
import {isArray} from "lodash";

import useGroupsStore from "../../../store/public/groupsStore";
import useEmployeesStore from "../../../store/public/employeesStore";

import BasicPage from "../../../components/public/basic.page/basic.page.component";
import Breadcrumbs from "../../../components/public/breadcrumbs/breadcrumbs";
import MultiSelect from "../../../components/admin/multi_select/multi_select.component";
import SingleImage from "../../../components/general/single.image/single.image.with.preview";
import SingleImageWithPreview from "../../../components/general/single.image.with.preview/single.image.with.preview";
import ImagePreview from "../../../components/general/image.preview/image.preview.component";

const GroupsPage = () => {
    const groupsStore = useGroupsStore();
    const teachersStore = useEmployeesStore();

    const {control, getValues, setValue} = useForm();
    const [selectedGroup, setSelectedGroup] = React.useState(0);

    React.useEffect(() => {
        const fetchData = async () => {
            await groupsStore.loadAll();
            await teachersStore.loadAll();
        };

        fetchData();
    }, []);

    const Employees = ({employees}) => {
        if (isArray(employees) && employees.length > 0) {
            return (
                <div className='article__section-item'>
                    <h3 className='section__caption section__caption_size_large'>Воспитатели</h3>
                    <ul className='section__card-deck'>
                        {employees.map((employee) => (
                            <li key={window.global.makeid()}>
                                <NavLink
                                    to={process.env.REACT_APP_BASE_URL + "сотрудники/" + employee.ID}
                                    target='_blank'
                                    rel='noreferrer noopener ugs'
                                    className='card-link'
                                >
                                    <article className='card card_orientation_horizontal card_type_people'>
                                        <SingleImage
                                            image={employee.photo}
                                            extraClass={"card__image"}
                                            isPersonImage={true}
                                        />
                                        <div className='card__content'>
                                            <h3 className='card__title'>
                                                <span className='card__title-accent'>{employee.fio.split(" ")[0]}</span>
                                                {employee.fio.split(" ")[1] + " " + employee.fio.split(" ")[2]}
                                            </h3>
                                            <div className='card__main-text'>
                                                <p className='card__text'>{employee.position}</p>
                                            </div>
                                        </div>
                                    </article>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    const Schedules = ({schedules}) => {
        const Day = ({day, shortDay, schedule}) => {
            if (schedule && schedule.length > 0) {
                return (
                    <tr className='table__row'>
                        <td className='table__cell'>
                            <span className='table__cell-text table__accent-text'>
                                <span className='desktop-visible'>{day}</span>
                                <span className='mobile-visible'>{shortDay}</span>
                            </span>
                        </td>
                        <td className='table__cell'>
                            <span className='table__item'>
                                {schedule.map((item) => (
                                    <p key={window.global.makeid()} style={{margin: 0, padding: 0}}>
                                        <span className='table__accent-text'>
                                            {item.startTime} – {item.endTime} 
                                        </span>
                                        — {item.text}
                                    </p>
                                ))}
                            </span>
                        </td>
                    </tr>
                );
            }
        };

        if (schedules && schedules.length > 0) {
            return (
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
                            <Day
                                day={"Понедельник"}
                                shortDay={"Пн"}
                                schedule={schedules.filter((schedule) => schedule.day === 1)}
                            />
                            <Day
                                day={"Вторник"}
                                shortDay={"Вт"}
                                schedule={schedules.filter((schedule) => schedule.day === 2)}
                            />
                            <Day
                                day={"Среда"}
                                shortDay={"Ср"}
                                schedule={schedules.filter((schedule) => schedule.day === 3)}
                            />
                            <Day
                                day={"Четверг"}
                                shortDay={"Чт"}
                                schedule={schedules.filter((schedule) => schedule.day === 4)}
                            />
                            <Day
                                day={"Пятница"}
                                shortDay={"Пт"}
                                schedule={schedules.filter((schedule) => schedule.day === 5)}
                            />
                            <Day
                                day={"Суббота"}
                                shortDay={"Сб"}
                                schedule={schedules.filter((schedule) => schedule.day === 6)}
                            />
                            <Day
                                day={"Воскресенье"}
                                shortDay={"Вс"}
                                schedule={schedules.filter((schedule) => schedule.day === 7)}
                            />
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    };

    const ImageGallery = ({images}) => {
        const [preview, setPreview] = React.useState(<></>);

        const handleOpenPreview = (slideIndex) => {
            setPreview(
                <ImagePreview open={true} index={slideIndex} items={images} onClose={() => setPreview(<></>)}/>
            );
        };

        if (images && images.length > 0) {
            return (
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
                        {images.map((image, index) => (
                            <SplideSlide key={window.global.makeid()}>
                                <div className="article__gallery-item" style={{cursor: "pointer"}}>
                                    <img
                                        className={"article__gallery-item-image"}
                                        src={
                                            image.url.includes("http")
                                                ? image.url
                                                : process.env.REACT_APP_BASE_URL + image.url
                                        }
                                        alt={image.url}
                                        loading='lazy'
                                        onClick={() => handleOpenPreview(index)}
                                    />
                                    {
                                        image.title
                                        &&
                                        <p className="article__gallery-item-label">{image.title}</p>
                                    }
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                    {preview}
                </div>
            );
        }
    };

    return (
        <BasicPage loadings={[groupsStore, teachersStore]}>
            <Helmet>
                <title>Наши группы</title>
            </Helmet>
            <motion.div
                className='article article_place_groups section'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{delay: 0.2, duration: 1}}
            >
                <div className='article__header'>
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
                            options={[
                                {
                                    label: "Все",
                                    value: 0,
                                },
                            ].concat(
                                groupsStore.items?.map((item) => {
                                    return {
                                        label: item.title,
                                        value: item.ID,
                                    };
                                })
                            )}
                            onChange={(selected) => {
                                setValue("group_select", selected);
                                setSelectedGroup(selected.value);
                            }}
                        />
                    </div>
                </div>
                {groupsStore.items
                    ?.filter((item) => {
                        if (selectedGroup && selectedGroup !== 0) {
                            return item.ID === selectedGroup;
                        }

                        return true;
                    })
                    .map((item) => (
                        <section key={window.global.makeid()} className='section page__section-indent article__section'>
                            <div className='section__wrap'>
                                <h2 className='section__subtitle'>{item.title}</h2>
                                <div className='section__main-text section__main-text_size_large'>
                                    <p>{item.preview}</p>
                                </div>
                                <Employees employees={item.employees}/>
                                <Schedules schedules={item.schedules}/>
                                <ImageGallery images={item.images}/>
                            </div>
                        </section>
                    ))}
            </motion.div>
        </BasicPage>
    );
};

export default GroupsPage;
