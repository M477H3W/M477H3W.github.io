 // jQuery goes here
    $(document).ready(function () {
        // Hidden paragraphs
        $(".bio").hide();
        $(".skill").hide();
        $(".innovate").hide();
        $(".cont").hide();
        $(".bibCred").hide();

        // To show hidden paragraphs
        $(".bioClick").click(function() {
            $(".bio").fadeIn(900);
        });

        $(".skillClick").click(function() {
            $(".skill").fadeIn(900);
        });

        $(".innovateClick").click(function() {
            $(".innovate").fadeIn(900);
        });
        
        $(".contClick").click(function() {
            $(".cont").fadeIn(900);
        })

        $(".bibCredClick").click(function() {
            $(".bibCred").fadeIn(900);
        });
    });