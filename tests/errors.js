$(function() {
  console.log(jQuery.tmpl("${ one }", {one: "first"}).text());
  $(".errors-test").each(function(index) {
      try {
          var testId = $(this).attr("id");
          console.log("Running test " + testId);

          var result = $(this).tmpl({
              real: {
                  thing: "thing"
              }
          });
          console.log(result);
      }
      catch (ex) {
        console.log(ex.message);
      }
  });
});
