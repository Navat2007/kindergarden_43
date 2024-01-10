<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

require $_SERVER['DOCUMENT_ROOT'] . '/php/include.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/auth.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/params.php';

$id = htmlspecialchars($_POST["id"]);
$userID = $authorization[1];
$fio = mysqli_real_escape_string($conn, htmlspecialchars($_POST["fio"]));
$position = mysqli_real_escape_string($conn, htmlspecialchars($_POST["position"]));
$categoryID = mysqli_real_escape_string($conn, htmlspecialchars($_POST["category"]));
$page = mysqli_real_escape_string($conn, htmlspecialchars($_POST["page"]));

$image = $_POST["image"] ?? [];
$educations = $_POST["educations"] ?? [];
$qualifications = $_POST["qualification"] ?? [];
$works = $_POST["work"] ?? [];
$rewards = $_POST["reward"] ?? [];

$sql = "UPDATE 
                employees
            SET
                fio = '$fio', 
                position = '$position', 
                categoryID = '$categoryID', 
                page = '$page', 
                last_userID = '$userID'
            WHERE 
                ID = '$id'";
$sqls[] = $sql;
$result = mysqli_query($conn, $sql);

if (!$result) {
    $error = 1;
    $error_text = "Ошибка при редактировании занятия: " . mysqli_error($conn);
}
else {
    $lastID = $id;

    $sql = "DELETE FROM employee_education WHERE employeeID = '$id'";
    $sqls[] = $sql;
    mysqli_query($conn, $sql);

    $sql = "DELETE FROM employee_qualification WHERE employeeID = '$id'";
    $sqls[] = $sql;
    mysqli_query($conn, $sql);

    $sql = "DELETE FROM employee_work WHERE employeeID = '$id'";
    $sqls[] = $sql;
    mysqli_query($conn, $sql);

    $sql = "DELETE FROM employee_reward WHERE employeeID = '$id'";
    $sqls[] = $sql;
    mysqli_query($conn, $sql);

    for ($i = 0; $i < count($image); $i++) {
        $url = $image[$i]['url'];
        $main = $image[$i]['main'];
        $order = $image[$i]['order'];
        $isFile = (int)$image[$i]['isFile'];
        $isLoaded = (int)$image[$i]['isLoaded'];

        if($isFile === 1 && $isLoaded === 0){
            $dir_name = 'employees';
            $url = "";

            $helper->createDir("/files/" . $dir_name . "/" . $id);

            $temp_name = $_FILES['image']['tmp_name'][$i]['file'];
            $name = $_FILES['image']['name'][$i]['file'];

            $sqls[] = $temp_name;
            $sqls[] = $name;

            $file_token = $helper->gen_token();

            $path = $_SERVER['DOCUMENT_ROOT'] . "/files/" . $dir_name . "/" . $id . "/" . $file_token . "_" . $name;

            @unlink($path);

            if(copy($temp_name, $path))
            {
                $url = "/files/" . $dir_name . "/" . $id . "/" . $file_token . "_" . $name;

                $sql = "
                    UPDATE 
                        employees
                    SET
                        photo = '$url'
                    WHERE 
                        ID = '$id'";
                $sqls[] = $sql;
                mysqli_query($conn, $sql);
            }
        }
    }

    foreach ($educations as $item) {

        $endDate = mysqli_real_escape_string($conn, $item['endDate']);
        $orgName = mysqli_real_escape_string($conn, $item['orgName']);
        $qualification = mysqli_real_escape_string($conn, $item['qualification']);

        $sql = "
            INSERT INTO employee_education (employeeID, org_name, end_date, qualification, userID, last_userID) 
            VALUES ('$lastID', '$orgName', '$endDate', '$qualification', '$userID', '$userID')";

        $sqls[] = $sql;
        mysqli_query($conn, $sql);

        unset($endDate);
        unset($orgName);
        unset($qualification);
    }

    foreach ($qualifications as $item) {

        $title = mysqli_real_escape_string($conn, $item['title']);
        $date = mysqli_real_escape_string($conn, $item['date']);
        $place = mysqli_real_escape_string($conn, $item['place']);
        $hours = mysqli_real_escape_string($conn, $item['hours']);

        $sql = "
            INSERT INTO employee_qualification (employeeID, title, date, place, hours, userID, last_userID) 
            VALUES ('$lastID', '$title', '$date', '$place', '$hours', '$userID', '$userID')";

        $sqls[] = $sql;
        mysqli_query($conn, $sql);

        unset($title);
        unset($date);
        unset($place);
        unset($hours);
    }

    foreach ($works as $item) {

        $summary = mysqli_real_escape_string($conn, $item['summary']);
        $education = mysqli_real_escape_string($conn, $item['education']);
        $work = mysqli_real_escape_string($conn, $item['work']);
        $category = mysqli_real_escape_string($conn, $item['category']);
        $date = mysqli_real_escape_string($conn, $item['date']);
        $date_order = mysqli_real_escape_string($conn, $item['date_order']);

        $sql = "
            INSERT INTO employee_work (employeeID, summary, education, work, category, date, date_order, userID, last_userID) 
            VALUES ('$lastID', '$summary', '$education', '$work', '$category', '$date', '$date_order', '$userID', '$userID')";

        $sqls[] = $sql;
        mysqli_query($conn, $sql);

        unset($summary);
        unset($education);
        unset($work);
        unset($category);
        unset($date);
        unset($date_order);
    }

    foreach ($rewards as $item) {

        $title = mysqli_real_escape_string($conn, $item['title']);
        $date = mysqli_real_escape_string($conn, $item['date']);

        $sql = "
            INSERT INTO employee_reward (employeeID, title, date, userID, last_userID) 
            VALUES ('$lastID', '$title', '$date', '$userID', '$userID')";

        $sqls[] = $sql;
        mysqli_query($conn, $sql);

        unset($title);
        unset($date);
    }

    $log->add($conn, $authorization[1], 'Сотрудник ID: ' . $id . ' отредактирован');
}

require $_SERVER['DOCUMENT_ROOT'] . '/php/answer.php';