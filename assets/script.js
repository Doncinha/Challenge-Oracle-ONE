document.addEventListener("DOMContentLoaded", function () {
	var encryptBtn = document.getElementById("criptografar");
	var decryptBtn = document.getElementById("descriptografar");
	var outputTextElement = document.getElementById("output");
	var elements = [
		document.getElementById("decorative-img"),
		document.getElementById("output-big-text"),
		document.getElementById("output-small-text"),
	];
	var copyBtn = document.getElementById("copiar");

	function updateOutputSection(text) {
		outputTextElement.innerHTML = text;
		outputTextElement.style.display = "block";
		copyBtn.style.display = "block";
		for (const element of elements) {
			element.style.display = "none";
		}
	}

	function showMessage(message, alertType) {
		var messageElement = document.createElement("div");
		messageElement.textContent = message;
		messageElement.classList.add("alert", alertType);
		messageElement.setAttribute("role", "alert");

		document.body.appendChild(messageElement);

		setTimeout(() => document.body.removeChild(messageElement), 1500);
	}

	function encrypt(text) {
		if (text) {
			updateOutputSection(text);
		} else {
			showMessage("Não há texto para criptografar.", "alert-warning");
		}
	}

	function decrypt(text) {
		if (text) {
			updateOutputSection(text);
		} else {
			showMessage("Não há texto para descriptografar.", "alert-warning");
		}
	}

	function copyToClipboard() {
		var outputText = outputTextElement.textContent.trim();
		if (outputText) {
			navigator.clipboard
				.writeText(outputText)
				.then(() => showMessage("Texto copiado com sucesso.", "alert-success"))
				.catch(() => showMessage("Erro ao copiar texto.", "alert-danger"));
		} else {
			showMessage("Não há texto a ser copiado.", "alert-danger");
		}
	}

	function handleClick(event) {
		var inputText = document.getElementById("inputText").value.trim();

		switch (event.target.id) {
			case "criptografar":
				encrypt(inputText);
				break;
			case "descriptografar":
				decrypt(inputText);
				break;
			case "copiar":
				copyToClipboard();
				break;
			default:
				console.log("Unknow button clicked.");
				break;
		}
	}

	encryptBtn.addEventListener("click", handleClick);
	decryptBtn.addEventListener("click", handleClick);
	copyBtn.addEventListener("click", handleClick);
});
