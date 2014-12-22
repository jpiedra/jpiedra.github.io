
    $(function() {
        $(".tag-block").draggable();
		 $("#headopen_slot").droppable({
            accept: "#headopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
        $("#headclose_slot").droppable({
            accept: "#headclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
		$("#titleopen_slot").droppable({
            accept: "#titleopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
        $("#titleclose_slot").droppable({
            accept: "#titleclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
		$("#paraopen_slot").droppable({
            accept: "#paraopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
        $("#paraclose_slot").droppable({
            accept: "#paraclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
		$("#bodyopen_slot").droppable({
            accept: "#bodyopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
        $("#bodyclose_slot").droppable({
            accept: "#bodyclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
        $("#htmlopen_slot").droppable({
            accept: "#htmlopen",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
        $("#htmlclose_slot").droppable({
            accept: "#htmlclose",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
         $("#doctype_slot").droppable({
            accept: "#doctype",
            drop: function(event, ui) {
                $(this).css("background-color", "white")
				$(this).css("color", "white")
            },
            out: function(event, ui) {
                $(this).css("background-color", "")
				$(this).css("color", "black")
            }
        });
    });