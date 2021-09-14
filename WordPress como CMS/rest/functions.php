<?php 
  add_action("cmb2_admin_init","cmb2_fields_home");

  function cmb2_fields_home(){
    $cmb = new_cmb2_box([
      'id' => 'home_box',
      'title' => 'Home',
      'object_types' => ['page'],
      'show_on' => [
        'key' => 'page-template',
        'value' => 'page-home.php',
      ],
      ]);

      $cmb ->add_field([
        'name' => 'Comida',
        'id' => 'comida',
        'type' => 'text',
      ]);

      $cmb ->add_field([
        'name' => 'Descrição',
        'id' => 'descricao',
        'type' => 'textarea',
      ]);
  }
?>