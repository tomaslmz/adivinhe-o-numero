var fase = 1;
var vidaextra = 0;
var dark = 1;
var limite = 10;
var numeroaleatorio = Math.floor(Math.random() * limite);
var vidas = 5;
var pontos = 0;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fases").innerHTML = "Fase " + fase + " (0 - " + limite + ")";
});

function darkMode() {
    const darkmode = document.getElementById("darkmode");
    const body = document.getElementById("body");
    const field1 = document.getElementById("field1");
    const field2 = document.getElementById("field2");
    const field3 = document.getElementById("field3");
    if(dark == 0) {
        body.style.backgroundColor = "black";
        field1.style.backgroundColor = "rgb(20, 20, 29)";
        field2.style.backgroundColor = "rgb(20, 20, 29)";
        field3.style.backgroundColor = "rgb(20, 20, 29)";
        field1.style.color = "white";
        field2.style.color = "white";
        field3.style.color = "white";
        darkmode.value = "Modo claro";
        dark = 1;
    } else {
        body.style.backgroundColor = "rgb(206, 195, 176)";
        field1.style.backgroundColor = "rgb(230, 225, 225)";
        field2.style.backgroundColor = "rgb(230, 225, 225)";
        field3.style.backgroundColor = "rgb(230, 225, 225)";
        field1.style.color = "black";
        field2.style.color = "black";
        field3.style.color = "black";
        darkmode.value = "Modo escuro";
        dark = 0;
    }
}


function chutar() {
    event.preventDefault();
    var numeroinput = document.getElementById("numero");
    var numero = numeroinput.value;
    return numero;
}

function validarChute(chute) {
    if(chute == numeroaleatorio) {
        return true;
    } else {
        return false;
    }
}

function ajuda() {
    const textoajuda = document.getElementById("ajuda");
    if(textoajuda.style.display == "none") {
        textoajuda.style.display = "block";
    } else {
        textoajuda.style.display = "none";
    }
}

function main() {
    const numeroinput = document.getElementById("numero");
    const enviar = document.getElementById("enviar");
    const reiniciar = document.getElementById("reiniciar");
    const vida1 = document.getElementById("vida1");
    const vida2 = document.getElementById("vida2");
    const vida3 = document.getElementById("vida3");
    const vida4 = document.getElementById("vida4");
    const vida5 = document.getElementById("vida5");
    const resultado = document.getElementById("resultado");
    var chute = chutar();

    numeroinput.value = "";
    if(chute <= limite && chute >= 0 && chute != "") {
        if(validarChute(chute)) {
            fase++;
            if(vidas == 5 || fase%10 == 5) {
                if(vidaextra < 5) {
                    vidaextra++;
                }
                switch(vidaextra) {
                    case 1:
                        if(/Mobi/.test(navigator.userAgent)) {
                            document.getElementById("vidaextra1").innerHTML = "💛";
                        } else {
                            document.getElementById("vidaextra1").innerHTML = "❤";
                        }
                    break;
                    case 2:
                        if(/Mobi/.test(navigator.userAgent)) {
                            document.getElementById("vidaextra2").innerHTML = "💛";
                        } else {
                            document.getElementById("vidaextra2").innerHTML = "❤";
                        }
                    break;
                    case 3:
                        if(/Mobi/.test(navigator.userAgent)) {
                            document.getElementById("vidaextra3").innerHTML = "💛";
                        } else {
                            document.getElementById("vidaextra3").innerHTML = "❤";
                        }
                    break;
                    case 4:
                        if(/Mobi/.test(navigator.userAgent)) {
                            document.getElementById("vidaextra4").innerHTML = "💛";
                        } else {
                            document.getElementById("vidaextra4").innerHTML = "❤";
                        }
                    break;
                    case 5:
                        if(/Mobi/.test(navigator.userAgent)) {
                            document.getElementById("vidaextra5").innerHTML = "💛";
                        } else {
                            document.getElementById("vidaextra5").innerHTML = "❤";
                        }
                    break;
                }
                const acertouextra = document.getElementById("acertouextra");
                acertouextra.style.display = "block";
            }
            const acertou = document.getElementById("acertou");
            acertou.style.display = "block";
            vidas = 5;
            if(/Mobi/.test(navigator.userAgent)) {
                document.getElementById("vida1").innerHTML = "❤";
                document.getElementById("vida2").innerHTML = "❤";
                document.getElementById("vida3").innerHTML = "❤";
                document.getElementById("vida4").innerHTML = "❤";
                document.getElementById("vida5").innerHTML = "❤";
            } else {
                vida1.style.color = "red";
                vida2.style.color = "red";
                vida3.style.color = "red";
                vida4.style.color = "red";
                vida5.style.color = "red";
            }
            document.getElementById("dica").innerHTML = "";
            pontos += limite/10*fase*(vidas+vidaextra);
            limite+=10;
            numeroaleatorio = Math.floor(Math.random() * limite);
            document.getElementById("fases").innerHTML = "Fase " + fase + " (0 - " + limite + ")";
            document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
        } else {
            const acertou = document.getElementById("acertou");
            acertou.style.display = "none";
            const acertouextra = document.getElementById("acertouextra");
            acertouextra.style.display = "none";
            const dica = document.getElementById("dica");
            if(chute < numeroaleatorio) {
                document.getElementById("dica").innerHTML = "Dica: o número aleatório é maior que " + chute;
            } else {
                document.getElementById("dica").innerHTML = "Dica: o número aleatório é menor que " + chute;
            }
            if(vidaextra == 5) {
                document.getElementById("vidaextra5").innerHTML = "";
            } else if(vidaextra == 4) {
                document.getElementById("vidaextra4").innerHTML = "";
            } else if(vidaextra == 3) {
                document.getElementById("vidaextra3").innerHTML = "";  
            } else if(vidaextra == 2) {
                document.getElementById("vidaextra2").innerHTML = "";   
            } else if(vidaextra == 1) {
                document.getElementById("vidaextra1").innerHTML = "";
            } else if(vidas == 5) {
                reiniciar.style.display = "flex";
                if(/Mobi/.test(navigator.userAgent)) {
                    document.getElementById("vida5").innerHTML = "🖤";
                } else {
                    vida5.style.color = "gray";
                }
            } else if(vidas == 4) {
                if(/Mobi/.test(navigator.userAgent)) {
                    document.getElementById("vida4").innerHTML = "🖤";
                } else {
                    vida4.style.color = "gray";
                }
            } else if(vidas == 3) {
                if(/Mobi/.test(navigator.userAgent)) {
                    document.getElementById("vida3").innerHTML = "🖤";
                } else {
                    vida3.style.color = "gray";
                }
            } else if(vidas == 2){
                if(/Mobi/.test(navigator.userAgent)) {
                    document.getElementById("vida2").innerHTML = "🖤";
                } else {
                    vida2.style.color = "gray";
                }
            } else {
                document.getElementById("resultado").innerHTML = "O número secreto era: " + numeroaleatorio;
                if(/Mobi/.test(navigator.userAgent)) {
                    document.getElementById("vida1").innerHTML = "🖤";
                } else {
                    vida1.style.color = "gray";
                }
                const derrota = document.getElementById("derrota");
                derrota.style.display = "block";
                numeroinput.disabled = true;
                enviar.disabled = true;
            }

            if(vidaextra > 0) {
                vidaextra--;
            } else {
                vidas--;
            }
        }
    } else {
        alert("Digite um número dentro do limite!");
    }
}