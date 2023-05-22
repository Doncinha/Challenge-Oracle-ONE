function encrypt(text) {
    console.log(text);
}

function decrypt(text) {
    console.log(text);
}

ocument.addEventListener("DOMContentLoaded", function () {

    var inputText = document.getElementById("inputText").value;
    var encryptBtn = getElementById("criptografar");
    var decryptBtn = getElementById("descriptografar");

	document.getElementById("criptografar").addEventListener("click", function () {
		var inputArea = document.getElementById("inputText");
		var text = inputArea.value;
		encrypt(text);
	});

	document.getElementById("descriptografar").addEventListener("click", function () {
		var inputArea = document.getElementById("inputText");
		var text = inputArea.value;
		decrypt(text);
	});
});
