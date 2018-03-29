$(document).ready(function() {
  $(".all").on("click", function(e){
     e.preventDefault();

      var yes = $("[value='yes']:checked").length;
      var no = $("[value='no']:checked").length;



      // Results or PART II of the page

// This is the code for cardiovascular disease

      if (yes === 1){
        $("#cardiovascular").find("span").text("52");
      } else if (yes === 2){
        $("#cardiovascular").find("span").text("103");
      } else if (yes === 3){
        $("#cardiovascular").find("span").text("99");
      } else if (yes === 4) {
        $("#cardiovascular").find("span").text("107");
      } else {
        $("#cardiovascular").find("span").text("107");
      }

// This will be the code for Diabetes.

      if (yes === 1){
        $("#diabetes").find("span").text("17");
      } else if (yes === 2){
        $("#diabetes").find("span").text("33");
      } else if (yes === 3){
        $("#diabetes").find("span").text("44");
      } else if (yes === 4) {
        $("#diabetes").find("span").text("67");
      } else {
        $("#diabetes").find("span").text("67");
      }

// ASTHMA

      if (yes === 1){
        $("#asthma").find("span").text("10");
      } else if (yes === 2){
        $("#asthma").find("span").text("20");
      } else if (yes === 3){
        $("#asthma").find("span").text("30");
      } else if (yes === 4) {
        $("#asthma").find("span").text("35");
      } else {
        $("#asthma").find("span").text("35");
      }

      // FRACTURES

            if (yes === 1){
              $("#fracture").find("span").text("15");
            } else if (yes === 2){
              $("#fracture").find("span").text("120");
            } else if (yes === 3){
              $("#fracture").find("span").text("200");
            } else if (yes === 4) {
              $("#fracture").find("span").text("400");
            } else {
              $("#fracture").find("span").text("35");
            }

// DEPRESSION

            if (yes === 1){
              $("#depression").find("span").text("12");
            } else if (yes === 2){
              $("#depression").find("span").text("35");
            } else if (yes === 3){
              $("#depression").find("span").text("75");
            } else if (yes === 4) {
              $("#depression").find("span").text("110");
            } else {
              $("#depression").find("span").text("110");
            }

  });
});
