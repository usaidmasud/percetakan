



$(document).ready(function () {
    
    $("#produk_id").change(function (e) { 
        e.preventDefault();
        get_harga($(this).val())
    });
});

function get_harga(id) {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3333/penjualan/get_harga/"+id,
        dataType: "json",
        success: function (response) {
            $("#harga").val(response.qty)
            $("#qty").focus()
        }
    });
}