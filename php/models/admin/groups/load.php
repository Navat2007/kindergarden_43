<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

require $_SERVER['DOCUMENT_ROOT'] . '/php/include.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/auth.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/params.php';

function getScheduleTitle($scheduleID) {
    switch ((int)$scheduleID) {
        case 0:
            return "Не заполнено";
        default:
            return "Заполнено";
    }
}

$sql = "SELECT 
            g.ID, g.title, g.create_time, 
            (SELECT COUNT(*) FROM group_schedules as gs WHERE gs.groupID = g.ID) as schedules
        FROM 
            groups as g
        ORDER BY g.create_time DESC";
$sqls[] = $sql;
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_object($result)) {
        $params[] = (object)[
            'ID' => (int)$row->ID,
            'schedules' => getScheduleTitle((int)$row->schedules),
            'title' => htmlspecialchars_decode($row->title),
            'create_time' => $row->create_time,
        ];
    }
}

require $_SERVER['DOCUMENT_ROOT'] . '/php/answer.php';