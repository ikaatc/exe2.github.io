function kirimData() {
    var name = document.getElementById("nama").value
    var tanggal = document.getElementById("tanggal").value
    var album = document.getElementById("album").value
    var peminatan = document.querySelector("input[name=peminatan]:checked").value
    var alasan = document.getElementById("alasan").value
    var suka = document.getElementById("suka").value

    alert(
        "Nama : " + name +
        "\nTanggal : " + tanggal +
        "\nAlbum Favorite : " + album +
        "\nBias : " + peminatan +
        "\nAlasan suka NCT Dream : " + alasan +
        "\nAlasan suka album " + album + " : " + suka
    )
}