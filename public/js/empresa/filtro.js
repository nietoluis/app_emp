$(function() {

  $("#ciudad").autocomplete({
      source: "/api/v1/encontrar_ubicacion",
      minLength: 2,
      select: function(event, ui) {
      $('#ciudad').val(ui.item.value);
      $('#ciudad_id').val(ui.item.id);
    }       
  });

  $("#empresa").autocomplete({
      source: "/api/v1/encontrar_empresa",
      minLength: 2,
      select: function(event, ui) {
      	//window.location.href = "/empresa/"+ui.item.id;
      	$('#empresa').val(ui.item.value);
      	$('#empresa_id').val(ui.item.id);
    }       
  });

});