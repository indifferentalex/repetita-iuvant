jQuery(function() {
	var options = [{ key: "articoloDeterminativo", suggestion: "Articolo Determinativo" },
								 { key: "articoloIndeterminativo", suggestion: "Articolo Indeterminativo" },
								 { key: "preposizioneDi", suggestion: "Preposizione Di" }];
	var modes = ["allenamento", "verifica"];

	var words = [{ parola: "gatto", articoloDeterminativo: "il", articoloIndeterminativo: "un", preposizioneDi: "del" },
					 		 { parola: "albero", articoloDeterminativo: "l'", articoloIndeterminativo: "un", preposizioneDi: "dell'" }];

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var option;
	var word;

	function loadWord() {
		option = options[getRandomInt(0, options.length - 1)];
		word = words[getRandomInt(0, words.length - 1)];

		$("#answer").html("");
		$("#option-category").html(option["suggestion"]);
		$("#question").html(word["parola"]);
	}

	function checkAnswer(submitted) {
		console.log(submitted);
		console.log(word[option["key"]]);

		if (word[option["key"]] == submitted) {
			console.log("Correct");
		} else {
			console.log("Wrong");
		}
	}

	loadWord();

	$("#answer").keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();

			checkAnswer($("#answer").html());

			loadWord();
		}
	});
});