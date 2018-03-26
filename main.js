$(document).ready(function () {

$(".button").on("click", function (e) {
  e.preventDefault();
  var yesAnswer=0;
  var noAnswer=0;
$("input").each(function (){
  if ($(this).val()=="Yes"){
  yesAnswer++;
  }
console.log(yesAnswer);
});

 });
});
