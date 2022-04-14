const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
}

setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 100) {
        heartArr[0].remove()
    }
}, 100);


//
function nonFo() {
    document.getElementById('idfoto').style.display = "none";
}

function showFo() {
    document.getElementById('idfoto').style.display = "block";
}

function nonDiv() {
    document.getElementById('Content').style = "opacity:0;visibility:hidden;margin-top:30vh;";
}

function showDiv() {
    Bn.style = "display:none";
    setTimeout(kpemb, 100);
    document.getElementById('Content').style = "opacity:1;margin-top:4vh;animation:kont 3s infinite;";
    document.getElementById("katakata").innerHTML = kata1;
}

function loadfoto() {
    document.getElementById('foto1').src = gambar1;
    document.getElementById('foto2').src = gambar2;
    document.getElementById('foto3').src = gambar3;
    document.getElementById('foto4').src = gambar4;
    document.getElementById('foto5').src = gambar5;
    document.getElementById('foto6').src = gambar6;
}

function showAkhir() {
    setInterval(createHeart, 200);
    document.getElementById('k2').style = "opacity:1;transform:scale(1);margin:0;";
    document.getElementById('ftdua').style = "transform:scale(1);";
    document.getElementById('final1').style = "transform:scale(1);";
    document.getElementById('Content').style.display = "none";
}

function mulaiakhir() {
    nonDiv();
    setTimeout(showAkhir, 1400);
    setTimeout(finalis, 2400);
}

function showTom() {
    document.getElementById('idkirim').style = "opacity:1;visibility:visible;margin-top:140px;";
}

function tombol() {
    contTom.style = "display:flex";
}

function otomatis() {
    befanimkata();
    setTimeout(animkata, 400);
    contTom.style = "display:none";
    setTimeout(tombol, 1200);
}

function befanimkata() {
    katakata.style = "transform:scale(.01);";
    katabawah.style = "transform:scale(.01);";
}

function animkata() {
    katakata.style = "transform:scale(1);";
    katabawah.style = "transform:scale(1);";
}

async function terimateks() {
    By.innerHTML = "Mau";
    Bn.style = "display:flex";
    setTimeout(animkata, 400);
    setTimeout(kats, 1500);
}

async function tolakteks() {
    await swalst.fire('' + teksnolak);
}

var aa = 0, pemb;
pemb = "";
var ii = 0, katanya;
katanya = "";
var i = 0, katanyab;
katanyab = "";
var u = 0, text2;
text2 = "";
var o = 0, text3;
text3 = "";
var a = 0, final1;
final1 = "";
var ab = 0, final2;
final2 = "";

function kpemb() {
    if (aa < pemb.length) {
        document.getElementById("idgeser").innerHTML += pemb.charAt(aa);
        aa++;
        setTimeout(kpemb, 40);
    }
    if (aa == pemb.length) {
        setTimeout(tombol, 1200);
        document.getElementById("idgeser").style = "display:none";
        document.getElementById("bq").style = "opacity:1;visibility:visible;margin-top:0";
        document.getElementById('bodyblur').style = "opacity:1;";
    }
}

function kats() {
    if (ii < katanya.length) {
        document.getElementById("katabawah").innerHTML += katanya.charAt(ii);
        ii++;
        setTimeout(kats, 80);
    }
    if (ii == katanya.length) {
        document.getElementById("katabawah").innerHTML = katanya + emotsenyum;
        setTimeout(tombol, 800);
    }
}

function kbwh() {
    if (i < katanyab.length) {
        document.getElementById("katabawah").innerHTML += katanyab.charAt(i);
        i++;
        setTimeout(kbwh, 180);
    }
    if (i == katanyab.length) {
        document.getElementById("katabawah").innerHTML = katanyab + emotsenyum;
        setTimeout(tombol, 800);
    }
}

flag = 1;
flagg = 1;

function tolak() {
    if (fungsi == 1) {
        if (flagg == 1) {
            Bn.style = "margin-left:90px;transform: rotate(45deg)";
            buttonv2.style = "opacity:1;";
            By.style = "opacity:0";
            document.getElementById("buttonv2").innerHTML = tekstolak1;
            flagg = 2
        } else if (flagg == 2) {
            Bn.style = "margin-left:95px;transform: rotate(135deg)";
            document.getElementById("buttonv2").innerHTML = tekstolak2;
            flagg = 3
        } else if (flagg == 3) {
            Bn.style = "margin:12px 8px 12px 0;transform: rotate(360deg)";
            buttonv2.style = "opacity:0;";
            By.style = "opacity:1";
            flagg = 1
        }
    } else if (fungsi == 5) {
        if (flag == 1) {
            Bn.style = "margin-left:90px;";
            buttonv2.style = "opacity:1;";
            By.style = "opacity:0";
            document.getElementById("buttonv2").innerHTML = tekstolak11;
            flag = 2;
        } else if (flag == 2) {
            Bn.style = "margin-left:95px;transform: rotate(90deg)";
            document.getElementById("buttonv2").innerHTML = tekstolak22;
            flag = 3;
        } else if (flag == 3) {
            Bn.style = "margin:12px 8px 12px 0";
            buttonv2.style = "opacity:0;";
            By.style = "opacity:1";
            flag = 1;
        }
    }
}

tekstolak1 = "Eits &#128541;";
tekstolak11 = "Yakin?";
tekstolak2 = "Gabisa &#128541;";
tekstolak22 = "Eits &#128541;";
teksnolak = "Harus mau!!! &#128541;";

fungsi = 1;

async function terima() {
    if (fungsi == 1) {
        foto1.style = "display:none";
        foto2.style = "display:inline-flex";
        katakata.innerHTML = kata2;
        otomatis();
        fungsi = 2
    } else if (fungsi == 2) {
        foto2.style = "display:none";
        foto3.style = "display:inline-flex";
        katakata.innerHTML = kata3;
        otomatis();
        fungsi = 3
    } else if (fungsi == 3) {
        foto3.style = "display:none";
        foto4.style = "display:inline-flex";
        katakata.innerHTML = kata4;
        otomatis();
        fungsi = 4
    } else if (fungsi == 4) {
        foto4.style = "display:none";
        foto5.style = "display:inline-flex";
        katakata.innerHTML = kata5;
        terimateks();
        befanimkata();
        setTimeout(animkata, 400);
        contTom.style = "display:none";
        fungsi = 5
    } else if (fungsi == 5) {
        foto5.style = "display:none";
        foto6.style = "display:inline-flex";
        katakata.innerHTML = katakhir;
        document.getElementById("katabawah").innerHTML = katakhirb;
        befanimkata();
        setTimeout(animkata, 400);
        contTom.style = "display:none";
        setTimeout(akhiran, 3300);
        setInterval(createHeart, 200);
    }
}

//
const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',});
const swalsy = Swal.mixin({confirmButtonText: 'Iya', allowOutsideClick: false,});
const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 1000, timerProgressBar: true,});

//parsing url
function parseURLParams(url) {
    const queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {};
    let i, n, v, nv;

    if (query === url || query === "") return;

    for (let i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

// Ganti isinya di sini
async function apapun() {
    await swals.fire('Sekarang lihat ini ya ~');

    pemb = "....         ";

    wallpaper.src = "https://wallpaperaccess.com/full/126971.jpg";

    gambar1 = "https://i.ibb.co/4Ppd5jv/snuggles-caring-1.gif";
    const url_string = window.location;
    const url = new URL(url_string);
    const name = url.searchParams.get('nembak') ?? "Eka Nurcahyati"
    kata1 = "Hai " + name + " &#10084;";

    gambar2 = "https://i.ibb.co/mtWVxKH/gigit.gif";
    kata2 = "Aku mau ngomong serius nih";

    gambar3 = "https://i.ibb.co/cT3t21h/tkthao219-bubududu-2.gif";
    kata3 = "Kamu tau gak?";

    gambar4 = "https://kamu.feeldream.repl.co/g4.gif";
    kata4 = "Satu-satunya orang yang memenuhi syarat untuk menjadi istriku adalah kamu.";

    gambar5 = "https://kamu.feeldream.repl.co/g5.gif";
    kata5 = "karena, syarat pernikahan yang langgeng adalah jatuh cinta berkali-kali pada orang yang sama";
    katanya = "Will you marry me?";
    emotsenyum = "&#128515;";

    gambar6 = "https://i.ibb.co/JyKdNBp/yeay.gif";
    katakhir = "Yeayyy! Makasih ayaangg &#10084;";
    katakhirb = "I Love You &#10084;&#10084;&#10084;";

    showDiv();
    loadfoto();
    play();
}

apapun();