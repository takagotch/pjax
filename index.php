<?php
if(!isset($_SERVER['HTTP_X_AJAX_REQUEST'])){
?>
<!DOCYPE html>
<html>
<body>
<?php echo date('Y/m/d H:i:s'); ?>
<div id="content">
<?php } ?>

<?php if (!isset($_GET['page']) || $_GET['page'] != 'b' ) { ?>

  <h1>Page</h1>
  <a href="?page=b">Page</a><br>

  <?php } ?>

<?php
if (!isset($_SERVER['HTTP_X_AJAX_REQUEST']) {
?>
</div>
</body>
<script src="pushsate.js"></script>
</html>
<?php } ?>

