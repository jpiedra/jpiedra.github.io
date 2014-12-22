
	var heado, headc, htmlo, htmlc, bodyo, bodyc, doct, titleo, titlec, parao, parac = false;
	var FPS = 30;
	
    $(function() {
        $(".tag-block").draggable();
		 $("#headopen_slot").droppable({
            accept: "#headopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				heado = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				heado = false;
            }
        });
        $("#headclose_slot").droppable({
            accept: "#headclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				headc = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				headc = false;
            }
        });
		$("#titleopen_slot").droppable({
            accept: "#titleopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				titleo = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				titleo = false;
            }
        });
        $("#titleclose_slot").droppable({
            accept: "#titleclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				titlec = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				titlec = false;
            }
        });
		$("#paraopen_slot").droppable({
            accept: "#paraopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				parao = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				parao = false;
            }
        });
        $("#paraclose_slot").droppable({
            accept: "#paraclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				parac = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				parac = false;
            }
        });
		$("#bodyopen_slot").droppable({
            accept: "#bodyopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				bodyo = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				bodyo = false;
            }
        });
        $("#bodyclose_slot").droppable({
            accept: "#bodyclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				bodyc = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				bodyc = false;
            }
        });
        $("#htmlopen_slot").droppable({
            accept: "#htmlopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				htmlo = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				htmlo = false;
            }
        });
        $("#htmlclose_slot").droppable({
            accept: "#htmlclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				htmlc = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				htmlc = false;
            }
        });
         $("#doctype_slot").droppable({
            accept: "#doctype",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
				doct = true;
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
				doct = false;
            }
        });
		
		setInterval(function() {
				if (heado && headc && htmlo && htmlc && bodyo && bodyc && doct && titleo && titlec && parao && parac) {
						alert("Great job!);
					}
				}, 1000/FPS);
		
    });