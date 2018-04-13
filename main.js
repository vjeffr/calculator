$(document).ready(function() {
  $(".all").on("click", function(e){
     e.preventDefault();

      var yes = $("[value='yes']:checked").length;
      var no = $("[value='no']:checked").length;



      // PART II, RESULTS

// This is the code for STROKE

      if (yes === 0){
        $("#headache").find("span").text("0");
      } else if (yes === 1){
        $("#headache").find("span").text("20");
      } else if (yes === 2){
        $("#headache").find("span").text("40");
      } else if (yes === 3){
        $("#headache").find("span").text("70");
      } else {
        $("#headache").find("span").text("100 - 110");
      }

// code for DIABETES.

      if (yes === 0){
        $("#diabetes").find("span").text("0");
      } else if (yes === 1){
        $("#diabetes").find("span").text("13");
      } else if (yes === 2){
        $("#diabetes").find("span").text("33");
      } else if (yes === 3){
        $("#diabetes").find("span").text("33");
      } else {
        $("#diabetes").find("span").text("199");
      }

// RESPIRATORY DISEASE

      if (yes === 0){
        $("#respDisease").find("span").text("0");
      } else if (yes === 1){
        $("#respDisease").find("span").text("22");
      } else if (yes === 2){
        $("#respDisease").find("span").text("83");
      } else if (yes === 3){
        $("#respDisease").find("span").text("83");
      } else {
        $("#respDisease").find("span").text("250");
      }

      // MISCARRIAGE/stillbirth

            if (yes === 0){
              $("#miscarriage").find("span").text("0");
            } else if (yes === 1){
              $("#miscarriage").find("span").text("20");
            } else if (yes === 2){
              $("#miscarriage").find("span").text("20");
            } else if (yes === 3){
              $("#miscarriage").find("span").text("40");
            } else {
              $("#miscarriage").find("span").text("70");
            }

// DEPRESSION

            if (yes === 0){
              $("#depression").find("span").text("0");
            } else if (yes === 1){
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
