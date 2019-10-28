/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 5.0
	Author: PIXINVENT
	Author URL: https://themeforest.net/user/pixinvent/portfolio
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */

$(document).ready(function() {
//init select2
  $('.select-2').select2();

  $(".notification-button").dropdown({
    hover: false,
    coverTrigger: false,
    closeOnClick: false
  });
  function formatMoney(
    amount,
    decimalCount = 2,
    decimal = ".",
    thousands = ","
  ) {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? "-" : "";

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands)
      );
    } catch (e) {
      console.log(e);
    }
  }

  //init modal trigger open
  $(".modal").modal();

  //Dropdown
  $(".table .dropdown-trigger").dropdown({
    inDuration: 350,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    coverTrigger: false, // Displays dropdown below the button
    alignment: "left", // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });
  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
      $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
  });
  $("#return-to-top").click(function() {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });
  //lightbox
  $(".materialboxed").materialbox();
  //filter toggle
  $("#filter-btn").on("click", function() {
    $(this).toggleClass("active");
    $(this)
      .parent()
      .parent()
      .find(".filter-wrap")
      .slideToggle();
  });
  //Datepicker
  $(".datepicker").datepicker({
    format: "dd/mm/yyyy",
    autoClose: true,
    onOpen:function(){
      $("button.btn-flat.datepicker-cancel.waves-effect").hide();
    },
    onClose: function() {
      //    $this.datepicker("destroy");
      $(this).timepicker({
        dismissable: false,
        twelveHour: false,
        onSelect: function(hr, min) {
          $(this).attr("selectedTime", (hr + ":" + min).toString());
        },
        onCloseStart: function() {
          if ($(this).val() === $(this).attr("selectedDate")) {
            $(this).val("");
          } else {
            $(this).blur();
            $(this).val($(this).attr("selectedDate") + " " + $(this).val());
          }
          $(this).timepicker("destroy");
        }
      });
      $("button.btn-flat.timepicker-close.waves-effect")[0].remove();
      if ($(this).val() != "") {
        $(this).attr("selectedDate", $(this).val().toString());
      } else {
        $(this).val(
          pad(defaultDate.getFullYear()).toString() +
            "/" +
            pad((defaultDate.getMonth() + 1)).toString() +
            "/" +
            pad(defaultDate.getDate()).toString()
        );
        $(this).attr("selectedDate", $(this).val().toString());
      }
      $(this).timepicker("open");
    }
  });
  $(".from-date").each(function() {
    var $this = $(this);
    var defaultDate = new Date();
    $this.datepicker({
      format: "dd/mm/yyyy",
      selectMonths: true,
      dismissable: false,
      autoClose: true,
      onOpen:function(){
        $("button.btn-flat.datepicker-cancel.waves-effect").hide();
      },
      onSelect: function(selected) {
        var toDate = $this
          .parent()
          .next()
          .find(".to-date");
          if(toDate.length > 0){
            toDate.datepicker({
              format: "dd/mm/yyyy",
              minDate: selected,
              autoClose: true,
              onOpen:function(){
                $("button.btn-flat.datepicker-cancel.waves-effect").hide();
              },
              onClose: function() {
                //    $this.datepicker("destroy");
                toDate.timepicker({
                  dismissable: false,
                  twelveHour: false,
                  onSelect: function(hr, min) {
                    toDate.attr("selectedTime", (hr + ":" + min).toString());
                  },
                  onCloseStart: function() {
                    if (toDate.val() === toDate.attr("selectedDate")) {
                      toDate.val("");
                    } else {
                      toDate.blur();
                      toDate.val(toDate.attr("selectedDate") + " " + toDate.val());
                    }
                    toDate.timepicker("destroy");
                  }
                });
                $("button.btn-flat.timepicker-close.waves-effect")[0].remove();
                if (toDate.val() != "") {
                  toDate.attr("selectedDate", toDate.val().toString());
                } else {
                  toDate.val(
                    pad(defaultDate.getFullYear()).toString() +
                      "/" +
                      pad((defaultDate.getMonth() + 1)).toString() +
                      "/" +
                      pad(defaultDate.getDate()).toString()
                  );
                  toDate.attr("selectedDate", toDate.val().toString());
                }
                toDate.timepicker("open");
              }
            });
          }
       
      },
      onClose: function() {
        //  $this.datepicker("destroy");
        $this.timepicker({
          dismissable: false,
          twelveHour: false,
          defaultTime: "now",
          onSelect: function(hr, min) {
            $this.attr("selectedTime", (hr + ":" + min).toString());
          },
          onCloseStart: function() {
            if ($this.val() === $this.attr("selectedDate")) {
              $this.val("");
            } else {
              $this.blur();
              $this.val($this.attr("selectedDate") + " " + $this.val());
            }
            $this.timepicker("destroy");
          }
        });
        $("button.btn-flat.timepicker-close.waves-effect")[0].remove();
        if ($this.val() != "") {
          $this.attr("selectedDate", $this.val().toString());
        } else {
          $this.val(
            pad(defaultDate.getFullYear()).toString() +
              "/" +
              pad((defaultDate.getMonth() + 1)).toString() +
              "/" +
              pad(defaultDate.getDate().toString())
          );
          $this.attr("selectedDate", $this.val().toString());
        }
        $this.timepicker("open");
      }
    });
  });

  $(".to-date").each(function() {
    var $this = $(this);
    $this.on("click", function() {
      var fromDate = $this
        .parent()
        .prev()
        .find(".from-date")
        .val();
      if (fromDate == "") {
        $this.addClass("invalid");
        $(".to-date").datepicker("destroy");
      } else {
        $this.removeClass("invalid");
      }
    });
  });
  $('.modal').modal({
    onOpenEnd:function(event){
        var $this = $(event);
        $this.find('.input-field:first-child input').focus().select();            
    }
});
  //Select price
  $(".from-price").on("change", function() {
    console.log($(this).val());
    $(".to-price").attr("min", $(this).val());
  });

  //select all dropdown
  $("select").formSelect();
  $("select.select_all")
    .siblings("ul")
    .prepend("<li id=sm_select_all><span>Chọn tất cả</span></li>");
  $("li#sm_select_all").on("click", function() {
    var jq_elem = $(this),
      jq_elem_span = jq_elem.find("span"),
      select_all = jq_elem_span.text() == "Chọn tất cả",
      set_text = select_all ? "Bỏ chọn tất cả" : "Chọn tất cả";
    jq_elem_span.text(set_text);
    jq_elem
      .siblings("li")
      .filter(function() {
        return (
          $(this)
            .find("input")
            .prop("checked") != select_all
        );
      })
      .click();
  });

  //Mask input type
  $('[data-type="phone-number"]').formatter({
    pattern: "{{99999999999}}"
  });
  $('[data-type="dateofbirth"]').formatter({
    pattern: "{{99}}-{{99}}-{{9999}}"
  });

  //click upload file
  $("body").on("click", ".btn-upload", function(e) {
    e.preventDefault();
    $(this)
      .siblings('input[type="file"]')
      .trigger("click");
  });

  //Print btn
  $(".btn-print").each(function() {
    $(this).on("click", function() {
      window.focus();
      window.print();
      window.close();
    });
  });
  //Edit mode
  $("body").on("click", ".edit-mode", function(e) {
    e.preventDefault();
    $("body").addClass("edit-mode-open");
    $(".detail-fixed").animate({ scrollTop: 0 }, "fast");
  });
  $("body").on("click", ".close-editmode", function(e) {
    e.preventDefault();
    $("body").removeClass("edit-mode-open");
  });
  $(document).click(function(event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal

    if (
      !$(event.target).closest(
        ".edit-mode,.detail-fixed,.detail-fixed::-webkit-scrollbar"
      ).length
    ) {
      $("body").removeClass("edit-mode-open");
    }
  });

  // Table type design
  // if ($(".fixed-header-tb").length) {
  //   $(".fixed-header-tb").DataTable({
  //     responsive: false,
  //     scrollY: "60vh",
  //     scrollCollapse: true,
  //     paging: true,
  //     ordering: true,
  //     info: true,
  //     language: {
  //       searchPlaceholder: "Tìm kiếm",
  //       sLengthMenu: "Hiển thị _MENU_ kết quả tìm kiếm"
  //     }
  //   });
  // }
  

  //Set focus element style
  $('body').on('focus','input:not(.select2-search__field),select,textarea',function(){
    $(this).css('box-shadow','0px 0px 8px 0px #30f9ba');
  });
  $('body').on('blur','input,select,textarea',function(){
    $(this).attr('style','');
  });
});

window.addEventListener("DOMContentLoaded", function() {
  //Drag tabble
  var elementScroll = document.querySelectorAll(".responsive-tb");

  if (elementScroll != undefined || elementScroll != null) {
    elementScroll.forEach(function(element) {
      var mx = 0;
      element.addEventListener("mousedown", function(e) {
        this.sx = this.scrollLeft;
        mx = e.pageX - this.offsetLeft;

        this.addEventListener("mousemove", mouseMoveFunction);
      });
      element.addEventListener("mouseup", function(e) {
        this.removeEventListener("mousemove", mouseMoveFunction);
        mx = 0;
      });
      function mouseMoveFunction(e) {
        var mx2 = e.pageX - this.offsetLeft;
        if (mx) this.scrollLeft = this.sx + mx - mx2;
      }
    });
  }

  //resize table
  var tables = document.querySelectorAll(".list-package table");
  for (var i = 0; i < tables.length; i++) {
    resizableGrid(tables[i]);
  }

  function resizableGrid(table) {
    var row = table.getElementsByTagName("tr")[0],
      cols = row ? row.children : undefined;
    if (!cols) return;

    table.style.overflow = "hidden";

    var tableHeight = table.offsetHeight;

    for (var i = 0; i < cols.length; i++) {
      var div = createDiv(tableHeight);
      cols[i].appendChild(div);
      cols[i].style.position = "relative";
      setListeners(div);
    }

    function setListeners(div) {
      var pageX, curCol, nxtCol, curColWidth, nxtColWidth;

      div.addEventListener("mousedown", function(e) {
        curCol = e.target.parentElement;
        nxtCol = curCol.nextElementSibling;
        pageX = e.pageX;

        var padding = paddingDiff(curCol);

        curColWidth = curCol.offsetWidth - padding;
        if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;
      });

      div.addEventListener("mouseover", function(e) {
        e.target.style.borderRight = "1px solid #000";
      });

      div.addEventListener("mouseout", function(e) {
        e.target.style.borderRight = "";
      });

      document.addEventListener("mousemove", function(e) {
        if (curCol) {
          var diffX = e.pageX - pageX;

          if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + "px";

          curCol.style.width = curColWidth + diffX + "px";
        }
      });

      document.addEventListener("mouseup", function(e) {
        curCol = undefined;
        nxtCol = undefined;
        pageX = undefined;
        nxtColWidth = undefined;
        curColWidth = undefined;
      });
    }

    function createDiv(height) {
      var div = document.createElement("div");
      div.style.top = 0;
      div.style.right = 0;
      div.style.width = "5px";
      div.style.position = "absolute";
      div.style.cursor = "col-resize";
      div.style.userSelect = "none";
      div.style.height = height + "px";
      return div;
    }

    function paddingDiff(col) {
      if (getStyleVal(col, "box-sizing") == "border-box") {
        return 0;
      }

      var padLeft = getStyleVal(col, "padding-left");
      var padRight = getStyleVal(col, "padding-right");
      return parseInt(padLeft) + parseInt(padRight);
    }

    function getStyleVal(elm, css) {
      return window.getComputedStyle(elm, null).getPropertyValue(css);
    }
  }
});

var pad = (n)=>n>10? n:('0'+n);

//Upload image preview
function previewFiles(e) {
  var preview = e.parentNode.nextElementSibling;
  var files = e.files;
  var fileArray = Array.from(files);
  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          var image = new Image();
          image.height = 50;
          image.title = file.name;
          image.src = this.result;
          image.classList = "materialboxed";

          var wrap = document.createElement("div");
          wrap.classList = "img-block";
          wrap.appendChild(image);
          var close = document.createElement("span");
          close.classList = "material-icons red-text delete";
          close.innerHTML = "clear";
          close.onclick = function() {
            fileArray.splice(fileArray.indexOf(file));
            this.parentNode.parentNode.removeChild(this.parentNode);
          };
          wrap.appendChild(close);
          preview.appendChild(wrap);
        },
        false
      );

      reader.readAsDataURL(file);
    }
  }

  if (files) {
    var promise = new Promise(function(resolve, reject) {
      resolve([].forEach.call(files, readAndPreview));
    });
    promise.then(function() {
      setTimeout(function() {
        $(".materialboxed").materialbox();
      }, 1000);
    });
  }
}
