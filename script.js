function sprawdzHaslo() {
    let wpisaneHaslo = document.getElementById("haslo").value;
    let poprawneHaslo = "Zinenko2010";

    if (wpisaneHaslo === poprawneHaslo) {
        document.getElementById("wynik").InnerText = "Yes, Dostęp przyznany!";
        window.location.href = "index2.html";
    } else {
        document.getElementById("wynik").innerText = "No, Złe hasło";
        window.location.href = "index3.html";
    }
}