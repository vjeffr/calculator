$(document).ready(function() {
  $(".all").on("click", function(e){
     e.preventDefault();

      var yes = $("[value='yes']:checked").length;
      var no = $("[value='no']:checked").length;

      if (yes === 1){
        console.log("52");
      } else if (yes === 2){
        console.log("103");
      } else if (yes === 3){
        console.log("99");
      } else if (yes === 4) {
        console.log("107");
      } else {
        console.log("107");
      }
  });
});
