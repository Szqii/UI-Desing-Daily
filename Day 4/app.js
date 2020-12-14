
$(document).ready(function () {
    $(".title").click(function () {
        $(".title").removeClass("active");
        $(this).addClass("active");
        console.log("Sa")
    });
});

var app = new Vue({
    el: '#app',
    data: {
      wrapperState : true,
    },
    methods: {
        change : function(){
            this.wrapperState = this.wrapperState == true ? false : true
        },
    },
  })