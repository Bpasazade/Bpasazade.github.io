<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Preview</title>
</head>
<body>
    <h1>Preview</h1>
    <?php
        if (isset($_POST['submit'])) {
            $name = $_POST['name'];
            if ($name  == NULL)
            {   
                echo 'Name: Not provided <br/>';
            } else {
                echo $name . "<br/>"; 
            }
            
            $username = $_POST['username'];
            if ($username  == NULL) {   
                echo 'Username: Not provided <br/>';
            } else {
                echo $username . "<br/>";      
            }

            $password = $_POST['password'];
            if ($password  == NULL) {   
                echo 'Password: Not provided <br/>';
            } else {
                echo $password . "<br/>";     
            }

            $address = $_POST['address'];
            if ($address  == NULL) {   
                echo 'Address: Not provided <br/>';
            } else {
                echo $address;      
            }


            if(!empty($_POST['country'])) {
                echo $_POST['country'] . "<br/>";
            } else {
                echo 'Country: Not provided <br/>';
            }


            $zip = $_POST['zip'];
            if ($zip  == NULL) {   
                echo 'ZIP: Not provided <br/>';
            } else {
                echo $zip . "<br/>";      
            }

            $email = $_POST['email'];
            if ($email  == NULL) {   
                echo 'Email: Not provided <br/>';
            } else {
                echo $email;      
            }

            if(!empty($_POST['gender'])) {
                echo $_POST['gender'] . "<br/>";
            } else {
                echo 'Sex: Not provided <br/>';
            }

            if(!empty($_POST['language'])) {          
                for($i = 0; $i < sizeof($_POST['language']); $i++) {
                    echo $_POST['language'][$i] . " ";
                }
                echo "<br/>";
            } else {
                echo 'Language: Not provided <br/>';
            }

            $about = $_POST['about'];
            if ($about  == NULL) {   
                header("About: Not provided");
            } else {
                echo $about;      
            }
        }
    ?>   
</body>
</html>


