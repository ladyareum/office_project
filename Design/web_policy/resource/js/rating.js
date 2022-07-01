var starRating = function(){
  var $star = $(".star-rating"),
      $result = $star.find("output>b");
  $(document)
    .on("focusin", ".star-rating>.rating", function(){
    $(this).addClass("focus");
  })
    .on("focusout", ".star-rating>.rating", function(){
    var $this = $(this);
    setTimeout(function(){
      if($this.find(":focus").length === 0){
        $this.removeClass("focus");
      }
    }, 100);
  })
    .on("change", ".star-rating :radio", function(){
    $result.text($(this).next().text());
  })
    .on("mouseover", ".star-rating label", function(){
    $result.text($(this).text());
  })
    .on("mouseleave", ".star-rating>.rating", function(){
    var $checked = $star.find(":checked");
    if($checked.length === 0){
      $result.text("0");
    } else {
      $result.text($checked.next().text());
    }
  });
};
starRating();