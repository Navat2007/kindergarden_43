import React from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

import useGroupsStore from "../../../store/admin/groupsStore";
import useTeachersStore from "../../../store/admin/employeesStore";

import BasicPage from "../../../components/admin/basic.page/basic.page.component";
import AlertPopup from "../../../components/general/alert.popup/alert.popup";
import Button from "../../../components/admin/button/button.component";
import Editor from "../../../components/general/reach.editor/editor.component";
import ImageSelector from "../../../components/admin/image.selector/image.selector.component";
import TitleBlock from "../../../components/admin/title.block/title.block.component";
import MultiSelect from "../../../components/admin/multi_select/multi_select.component";
import FieldText from "../../../components/admin/field/field.text.component";
import Tabs from "../../../components/general/tabs/tabs.component";
import Tab from "../../../components/general/tabs/tab.component";
import Table from "../../../components/admin/table/table.component";

const AddGroupPage = () => {
    const navigate = useNavigate();

    const store = useGroupsStore();
    const teachersStore = useTeachersStore();

    const {register, handleSubmit, reset, control, getValues} = useForm();
    const [image, setImage] = React.useState([]);
    const [popup, setPopup] = React.useState(<></>);
    const [schedules, setSchedules] = React.useState([]);
    const [photo, setPhoto] = React.useState([]);

    const back = () => navigate("/admin/groups");

    React.useEffect(() => {
        const fetchData = async () => {
            await teachersStore.loadAll();
        };

        reset();
        fetchData();
    }, []);

    const checkForComplete = (sendObject) => {
        if (!sendObject.title) {
            setPopup(
                <AlertPopup
                    title='Ошибка'
                    text={"Название должно быть заполнено."}
                    opened={true}
                    onClose={() => {
                        setPopup(<></>);
                    }}
                />
            );
            return false;
        }

        return true;
    };

    const onAdd = async (params) => {
        const data = getValues();

        let sendObject = {...data};

        if (data.teachers_select && data.teachers_select.length > 0)
            sendObject["employees"] = Array.from(data.teachers_select.map((item) => item.value));

        sendObject["image"] = image && image.length > 0 ? image : "";
        sendObject["images"] = photo;

        if (schedules.length > 0) sendObject["schedules"] = schedules;

        if (!checkForComplete(sendObject)) return;

        console.log(sendObject);

        return;

        await store.add(sendObject);

        if (!store.error) {
            setPopup(
                <AlertPopup
                    title=''
                    text={"Группа успешно добавлена"}
                    opened={true}
                    onClose={back}
                />
            );
        } else {
            setPopup(
                <AlertPopup
                    title='Ошибка'
                    text={store.errorText}
                    opened={true}
                    onClose={() => {
                        setPopup(<></>);
                    }}
                />
            );
        }
    };

    const itemConfigSchedules = [
        {
            header: "ID",
            key: "ID",
            type: "int",
            filter: "number",
            sorting: true,
            hide: true,
        },
        {
            header: "День недели",
            key: "day",
            type: "select",
            filter: "select",
            sorting: true,
            required: true,
            items: [
                {value: 1, title: "Понедельник"},
                {value: 2, title: "Вторник"},
                {value: 3, title: "Среда"},
                {value: 4, title: "Четверг"},
                {value: 5, title: "Пятница"},
                {value: 6, title: "Суббота"},
                {value: 7, title: "Воскресенье"}
            ],
        },
        {
            header: "Время начала",
            key: "startTime",
            type: "time",
            filter: "time",
            sorting: true,
            required: true,
        },
        {
            header: "Время окончания",
            key: "endTime",
            type: "time",
            filter: "time",
            sorting: true,
            required: true,
        },
        {
            header: "Занятие",
            key: "text",
            type: "string",
            filter: "string",
            sorting: true,
            required: true,
        },
    ];

    return (
        <BasicPage mainStore={teachersStore} loadings={[teachersStore]}>
            <TitleBlock title={"Создание группы"} onBack={back}/>
            <Tabs place={"groups_create"}>
                <Tab title={"Основная информация"}>
                    <form id='add_form' onSubmit={handleSubmit(onAdd)} className='admin-form'>
                        <fieldset className='admin-form__section admin-form__section_width_one-col'>
                            <FieldText
                                label={"Название*"}
                                required={true}
                                placeholder={"Введите название"}
                                {...register("title")}
                            />
                            <FieldText
                                label={"Краткое описание"}
                                placeholder={"Введите краткое описание"}
                                {...register("preview")}
                            />
                            <p className='admin-form__subtitle'>Воспитатели</p>
                            <MultiSelect
                                control={control}
                                isMulti={true}
                                name={"teachers_select"}
                                closeMenuOnSelect={false}
                                options={teachersStore.items?.sort((a, b) => a.fio.localeCompare(b.fio)).map((item) => {
                                    return {
                                        label: item.fio,
                                        value: item.ID,
                                    };
                                })}
                            />
                            <p className='admin-form__subtitle'>Фотография</p>
                            <ImageSelector
                                items={image}
                                onlyOneFile={true}
                                multiFiles={false}
                                onChange={(items) => setImage(items)}
                            />
                        </fieldset>
                        <fieldset className='admin-form__section'>
                            <p className='admin-form__subtitle'>Детальное описание</p>
                            <Editor control={control} name='text' minHeight={250} buttons={{link: true}}/>
                        </fieldset>
                    </form>
                </Tab>
                <Tab title={"Расписание"}>
                    <Table
                        title={"Информация о расписании"}
                        items={schedules}
                        itemsConfig={itemConfigSchedules}
                        withItemControls={true}
                        onItemsChange={(items) => {
                            const sort_by = function() {
                                let fields = [].slice.call(arguments),
                                    n_fields = fields.length;

                                return function(A, B) {
                                    let a, b, field, key, primer, reverse, result;
                                    for (let i = 0, l = n_fields; i < l; i++) {
                                        result = 0;
                                        field = fields[i];

                                        key = typeof field === 'string' ? field : field.name;

                                        a = A[key];
                                        b = B[key];

                                        if (typeof field.primer !== 'undefined') {
                                            a = field.primer(a);
                                            b = field.primer(b);
                                        }

                                        reverse = (field.reverse) ? -1 : 1;

                                        if (a < b) result = reverse * -1;
                                        if (a > b) result = reverse * 1;
                                        if (result !== 0) break;
                                    }
                                    return result;
                                }
                            }

                            items = items.map((item) => {
                                item.day = parseInt(item.day);
                                return item;
                            });

                            items.sort(sort_by('day', {
                                name: 'startTime',
                            }));

                            setSchedules(items);
                        }}
                    />
                </Tab>
                <Tab title={"Фото"}>
                    <h2 className='admin-form__title'>Фото галерея</h2>
                    <ImageSelector
                        title='Фото галерея'
                        items={photo}
                        multiFiles={true}
                        withDescription={true}
                        onChange={(items) => setPhoto(items)}
                    />
                </Tab>
            </Tabs>
            <div className='admin-section__bottom-panel admin-form__controls'>
                <Button
                    extraClass={"admin-form__button"}
                    type='submit'
                    form='add_form'
                    onClick={() => {
                        const data = getValues();
                        checkForComplete(data);
                    }}
                    spinnerActive={store.sending}
                >
                    Сохранить
                </Button>
                <Button
                    type='button'
                    extraClass={"admin-form__button"}
                    theme='text'
                    onClick={back}
                    spinnerActive={store.sending}
                >
                    Отмена
                </Button>
            </div>
            {popup}
        </BasicPage>
    );
};

export default AddGroupPage;