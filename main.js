$(document).ready(function() {
  $(".all").on("click", function(e){
     e.preventDefault();

      var yes = $("[value='yes']:checked").length;
      var no = $("[value='no']:checked").length;



      // Results or PART II of the page

// This is the code for cardiovascular disease

      if (yes === 1){
        $("#cardiovascular").find("span").text("52");
        // console.log("52");
      } else if (yes === 2){
        console.log("103");
      } else if (yes === 3){
        console.log("99");
      } else if (yes === 4) {
        console.log("107");
      } else {
        console.log("107");
      }

// This will be the code for Diabetes.

      if (yes === 1){
        $("#diabetes").find("span").text("17");
      } else if (yes === 2){
        console.log("26");
      } else if (yes === 3){
        console.log("88");
      } else if (yes === 4) {
        console.log("118");
      } else {
        console.log("118");
      }


  });
});
