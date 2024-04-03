import React from "react";
import { useNavigate } from "react-router-dom";

import useGroupsStore from "../../../store/admin/groupsStore";
import {userStore} from "../../../store/userStore";

import Table from "../../../components/admin/table/table.component";
import Button from "../../../components/admin/button/button.component";

import { Icons } from "../../../components/svgs";

const AdminGroupsPage = () => {
    const navigate = useNavigate();

    const store = useGroupsStore();
    const url = "admin/groups";

    const onItemClick = (props) => {
        navigate(`/${url}/${props}`);
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const items = await store.loadAll();
            //console.log(items);
        };

        fetchData();
    }, []);

    const itemConfig = [
        {
            header: "ID",
            key: "ID",
            type: "int",
            filter: "number",
            sorting: true,
        },
        {
            header: "Название",
            key: "title",
            type: "string",
            filter: "string",
            sorting: true,
        },
        {
            header: "Расписание",
            key: "schedules",
            type: "string",
            filter: "select",
            sorting: true,
        },
    ];

    return (
        <Table
            title={`Таблица ${url} ${userStore.value.ID}`}
            loading={store.loading}
            items={store.items}
            itemsConfig={itemConfig}
            onItemClick={onItemClick}
            withFilter={true}
        >
            <Button
                type='button'
                iconName={Icons.plus}
                aria-label='Добавить группу'
                onClick={() => navigate(`/${url}/new`)}
            >
                Создать
            </Button>
        </Table>
    );
};

export default AdminGroupsPage;
