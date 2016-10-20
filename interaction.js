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

	var words = [{parola:"scopo", genere:"m", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"lo", articoloIndeterminativo:"uno", preposizioneDi:"dello", preposizioneA:"allo", preposizioneDa:"dallo", preposizioneIn:"nello", preposizioneCon:"collo", preposizioneSu:"sullo"}, {parola:"scopi", genere:"m", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"gli", articoloIndeterminativo:"", preposizioneDi:"degli", preposizioneA:"agli", preposizioneDa:"dagli", preposizioneIn:"negli", preposizioneCon:"cogli", preposizioneSu:"sugli"}, {parola:"specie", genere:"f", plurale:false, singolare_plurale_uguale:true, articoloDeterminativo:"la", articoloIndeterminativo:"una", preposizioneDi:"della", preposizioneA:"alla", preposizioneDa:"dalla", preposizioneIn:"nella", preposizioneCon:"colla", preposizioneSu:"sulla"}, {parola:"specie", genere:"f", plurale:true, singolare_plurale_uguale:true, articoloDeterminativo:"le", articoloIndeterminativo:"", preposizioneDi:"delle", preposizioneA:"alle", preposizioneDa:"dalle", preposizioneIn:"nelle", preposizioneCon:"colle", preposizioneSu:"sulle"}, {parola:"cosa", genere:"f", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"la", articoloIndeterminativo:"una", preposizioneDi:"della", preposizioneA:"alla", preposizioneDa:"dalla", preposizioneIn:"nella", preposizioneCon:"colla", preposizioneSu:"sulla"}, {parola:"cose", genere:"f", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"le", articoloIndeterminativo:"", preposizioneDi:"delle", preposizioneA:"alle", preposizioneDa:"dalle", preposizioneIn:"nelle", preposizioneCon:"colle", preposizioneSu:"sulle"}, {parola:"anno", genere:"m", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"l'", articoloIndeterminativo:"un", preposizioneDi:"dell'", preposizioneA:"all'", preposizioneDa:"dall'", preposizioneIn:"nell'", preposizioneCon:"con l'", preposizioneSu:"sull'"}, {parola:"anni", genere:"m", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"gli", articoloIndeterminativo:"", preposizioneDi:"degli", preposizioneA:"agli", preposizioneDa:"dagli", preposizioneIn:"negli", preposizioneCon:"cogli", preposizioneSu:"sugli"}, {parola:"uomo", genere:"m", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"l'", articoloIndeterminativo:"un", preposizioneDi:"dell'", preposizioneA:"all'", preposizioneDa:"dall'", preposizioneIn:"nell'", preposizioneCon:"con l'", preposizioneSu:"sull'"}, {parola:"uomini", genere:"m", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"gli", articoloIndeterminativo:"", preposizioneDi:"degli", preposizioneA:"agli", preposizioneDa:"dagli", preposizioneIn:"negli", preposizioneCon:"cogli", preposizioneSu:"sugli"}, {parola:"giorno", genere:"m", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"il", articoloIndeterminativo:"un", preposizioneDi:"del", preposizioneA:"al", preposizioneDa:"dal", preposizioneIn:"nel", preposizioneCon:"col", preposizioneSu:"sul"}, {parola:"giorni", genere:"m", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"i", articoloIndeterminativo:"", preposizioneDi:"dei", preposizioneA:"ai", preposizioneDa:"dai", preposizioneIn:"nei", preposizioneCon:"coi", preposizioneSu:"sui"}, {parola:"volta", genere:"f", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"la", articoloIndeterminativo:"una", preposizioneDi:"della", preposizioneA:"alla", preposizioneDa:"dalla", preposizioneIn:"nella", preposizioneCon:"colla", preposizioneSu:"sulla"}, {parola:"volte", genere:"f", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"le", articoloIndeterminativo:"", preposizioneDi:"delle", preposizioneA:"alle", preposizioneDa:"dalle", preposizioneIn:"nelle", preposizioneCon:"colle", preposizioneSu:"sulle"}, {parola:"casa", genere:"f", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"la", articoloIndeterminativo:"una", preposizioneDi:"della", preposizioneA:"alla", preposizioneDa:"dalla", preposizioneIn:"nella", preposizioneCon:"colla", preposizioneSu:"sulla"}, {parola:"case", genere:"f", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"le", articoloIndeterminativo:"", preposizioneDi:"delle", preposizioneA:"alle", preposizioneDa:"dalle", preposizioneIn:"nelle", preposizioneCon:"colle", preposizioneSu:"sulle"}, {parola:"parte", genere:"f", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"la", articoloIndeterminativo:"una", preposizioneDi:"della", preposizioneA:"alla", preposizioneDa:"dalla", preposizioneIn:"nella", preposizioneCon:"colla", preposizioneSu:"sulla"}, {parola:"parti", genere:"f", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"le", articoloIndeterminativo:"", preposizioneDi:"delle", preposizioneA:"alle", preposizioneDa:"dalle", preposizioneIn:"nelle", preposizioneCon:"colle", preposizioneSu:"sulle"}, {parola:"vita", genere:"f", plurale:false, singolare_plurale_uguale:false, articoloDeterminativo:"la", articoloIndeterminativo:"una", preposizioneDi:"della", preposizioneA:"alla", preposizioneDa:"dalla", preposizioneIn:"nella", preposizioneCon:"colla", preposizioneSu:"sulla"}, {parola:"vite", genere:"f", plurale:true, singolare_plurale_uguale:false, articoloDeterminativo:"le", articoloIndeterminativo:"", preposizioneDi:"delle", preposizioneA:"alle", preposizioneDa:"dalle", preposizioneIn:"nelle", preposizioneCon:"colle", preposizioneSu:"sulle"}];

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

	function getValidOption(plurale) {
		validOptions = [];

		if (optionsFilter == "tutti") {
			for (var i = 0; i < options.length; i++) {
				if (plurale == false || i != 1) {
					validOptions.push(options[i]);
				}
			}			
		} else if (optionsFilter == "articoli") {
			validOptions.push(options[0]);
			if (plurale == false) {
				validOptions.push(options[1]);
			}	
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
		word = words[getRandomInt(0, words.length - 1)];
		option = getValidOption(word["plurale"]);

		$("#answer").html("");
		$("#option-category").html(option["suggestion"]);
		$("#question").html(word["parola"]);

		$("#useful-suggestion").removeClass("correct");
		$("#useful-suggestion").removeClass("wrong");

		if (word["singolare_plurale_uguale"] == true) {
			$("#useful-suggestion").removeClass("faded");
			$("#useful-suggestion").html(word["plurale"] == true ? "Versione Plurale" : "Versione Singolare");
		} else {
			$("#useful-suggestion").addClass("faded");
			$("#useful-suggestion").html("Ripetere ad alta voce aiuta a migliorare");
		}

		$("#answer").prop("contenteditable", true);
	}

	function checkAnswer(submitted) {
		if (currentMode == "verifica") {
			answeredQuestions++;
		}

		if (word[option["key"]] == submitted) {
			$("#useful-suggestion").removeClass("faded");
			$("#useful-suggestion").addClass("correct");
			$("#useful-suggestion").html("Corretto!");

			if (currentMode == "verifica") {
				correctQuestions++;
			}
		} else {
			$("#useful-suggestion").removeClass("faded");
			$("#useful-suggestion").addClass("wrong");
			$("#useful-suggestion").html("Sbagliato!");
		}

		$("#answer").prop("contenteditable", false);

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

			setTimeout(function() {
				loadWord();
			}, 1500);
		}
	});
});