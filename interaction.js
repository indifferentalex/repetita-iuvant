jQuery(function() {
	var options = [{ key: "articoloDeterminativo", suggestion: "Articolo Determinativo" },
								 { key: "articoloIndeterminativo", suggestion: "Articolo Indeterminativo" },
								 { key: "preposizioneDi", suggestion: "Preposizione Di" },
								 { key: "preposizioneA", suggestion: "Preposizione A" },
								 { key: "preposizioneDa", suggestion: "Preposizione Da" },
								 { key: "preposizioneIn", suggestion: "Preposizione In" },
								 { key: "preposizioneCon", suggestion: "Preposizione Con" },
								 { key: "preposizioneSu", suggestion: "Preposizione Su" }];
	var modes = ["allenamento", "verifica"];

	var words = [{ parola: "gatto", articoloDeterminativo: "il", articoloIndeterminativo: "un", preposizioneDi: "del", preposizioneA: "al", preposizioneDa: "dal", preposizioneIn: "nel", preposizioneCon: "col", preposizioneSu: "sul" },
					 		 { parola: "albero", articoloDeterminativo: "l'", articoloIndeterminativo: "un", preposizioneDi: "dell'", preposizioneA: "all'", preposizioneDa: "dall'", preposizioneIn: "nell'", preposizioneCon: "con l'", preposizioneSu: "sull'" }];

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var optionsFilter = "tutti";
	var currentMode = "allenamento";
	var totalQuestions = 30;
	var answeredQuestions = 0;
	var correctQuestions = 0;
	var option;
	var word;

	function getValidOption() {
		validOptions = [];

		if (optionsFilter == "tutti") {
			validOptions = options;
		} else if (optionsFilter == "articoli") {
			validOptions.push(options[0]);
			validOptions.push(options[1]);
		} else {
			if (optionsFilter == "preposizioni") {
				validOptions.push(options[2]);
				validOptions.push(options[3]);
				validOptions.push(options[4]);
				validOptions.push(options[5]);
				validOptions.push(options[6]);
				validOptions.push(options[7]);
			} else if (optionsFilter == "di") {
				validOptions.push(options[2]);
			} else if (optionsFilter == "a") {
				validOptions.push(options[3]);
			} else if (optionsFilter == "da") {
				validOptions.push(options[4]);
			} else if (optionsFilter == "in") {
				validOptions.push(options[5]);
			} else if (optionsFilter == "con") {
				validOptions.push(options[6]);
			} else if (optionsFilter == "su") {
				validOptions.push(options[7]);
			}
		}

		return validOptions[getRandomInt(0, validOptions.length - 1)];
	}

	function loadWord() {
		option = getValidOption();
		word = words[getRandomInt(0, words.length - 1)];

		$("#answer").html("");
		$("#option-category").html(option["suggestion"]);
		$("#question").html(word["parola"]);
	}

	function checkAnswer(submitted) {
		if (currentMode == "verifica") {
			answeredQuestions++;
		}

		if (word[option["key"]] == submitted) {
			console.log("Correct");

			if (currentMode == "verifica") {
				correctQuestions++;
			}
		} else {
			console.log("Wrong");
		}

		if (currentMode == "verifica") {
			$("#current-score").html(correctQuestions + "/" + totalQuestions);

			if (answeredQuestions >= totalQuestions) {
				answeredQuestions = 0;
				correctQuestions = 0;
			}
		}
	}

	loadWord();

	$("#topic-select .selectable-option").click(function(e) {
		optionsFilter = $(this).html().toLowerCase();

		$(this).closest(".selection").find(".selectable-option").removeClass("selected");
		$(this).closest(".selection").find(".nested-option").addClass("hidden");
		$(this).closest(".select-option-wrapper").find(".nested-option").removeClass("hidden");
		$(this).addClass("selected");

		loadWord();
	});

	$("#mode-select .selectable-option").click(function(e) {
		currentMode = $(this).html().toLowerCase();

		$(this).closest(".selection").find(".selectable-option").removeClass("selected");
		$(this).closest(".selection").find(".nested-option").addClass("hidden");
		$(this).closest(".select-option-wrapper").find(".nested-option").removeClass("hidden");
		$(this).addClass("selected");
	});	

	$("#answer").keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();

			checkAnswer($("#answer").html());

			loadWord();
		}
	});
});