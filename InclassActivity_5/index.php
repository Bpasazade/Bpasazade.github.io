<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .container{
            width: 455px;
            margin: 25px auto;
        }
        .form-row{
            width:100%;
            display:block;
        }
        .form-group{
            width: 100%;
            height: 30px;
            display: inline-block;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .a1{
            width: 80%;
            float: right;
        }
        .a2{
            width: 40%;
            float: right;
        }
        .label{
            width:30%;
            float:left;
        }
        .currency{
            width: 80px;
            margin-left: 10px;
        }
        #button {
            float: right;
            margin-right: 6px;
        }
        label[for="to"] {
            margin-right: 65px;
        }
        .button{
            float: right;
            margin-right: 24px;
        }

    </style>
</head>
<body>
    <?php
        $result = 0.00;
        $convert_from = 'USD';
        $convert_to = 'USD';
        if (isset($_POST['submit'])) {
            $from = $_POST['from'];

            if(!empty($_POST['convert_from'])) {
                $convert_from = $_POST['convert_from'];
            }

            if(!empty($_POST['convert_to'])) {
                $convert_to = $_POST['convert_to'];
            }
            
            if ($convert_from == 'USD' && $convert_to == 'CAD') {
                $result = $from * 1.25;
            } elseif ($convert_from == 'USD' && $convert_to == 'EUR') {
                $result = $from * 0.82;
            } elseif ($convert_from == 'CAD' && $convert_to == 'USD') {
                $result = $from * 0.80;
            } elseif ($convert_from == 'CAD' && $convert_to == 'EUR') {
                $result = $from * 0.65;
            } elseif ($convert_from == 'EUR' && $convert_to == 'USD') {
                $result = $from * 1.22;
            } elseif ($convert_from == 'EUR' && $convert_to == 'CAD') {
                $result = $from * 1.54;
            } else {
                $result = $from;
            }
        }
    ?>
    <div class="container">
        <h1>Currency Converter</h1>
        <form action="" method="post">
            <div class="form-row">
                    <div class="form-group">
                        <label for="from">From:</label>
                        <div class="a1">
                            <input type="number" name="from" id="from" value="<?php echo $from;?>">
                            <label for="convert_f">Currency:</label>
                            <select name="convert_from" class="currency" value="<?php echo $_POST['convert_from'];?>">
                                <option value="USD" <?=$convert_from == "USD" ? ' selected="selected"' : ''?>>USD</option>
                                <option value="CAD" <?=$convert_from == "CAD" ? ' selected="selected"' : ''?>>CAD</option>
                                <option value="EUR" <?=$convert_from == "EUR" ? ' selected="selected"' : ''?>>EUR</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="to">To:</label>
                        <?php echo $result;?>
                        <div class="a2">
                            <label for="convert_t">Currency:</label>
                            <select name="convert_to" class="currency">
                                <option value="USD" <?=$convert_to == "USD" ? ' selected="selected"' : ''?>>USD</option>
                                <option value="CAD" <?=$convert_to == "CAD" ? ' selected="selected"' : ''?>>CAD</option>
                                <option value="EUR" <?=$convert_to == "EUR" ? ' selected="selected"' : ''?>>EUR</option>
                            </select>
                    
                        </div>
                    </div>
                <input type='submit' name='submit' value='Convert' class="button">
            </div>             
        </form>
    </div>
</body>
</html>