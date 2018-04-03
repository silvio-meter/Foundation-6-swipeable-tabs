$(".swipeable").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {

      var tabs = $("ul.tabs");
      var tab_content = $(".tabs-content");
      var currentTab = tabs.find(".is-active");
      var currentPanel = tab_content.find(".is-active");

      currentTab.removeClass('is-active').find("[aria-selected]").attr('aria-selected', false);

      if (currentTab.next('li').length !== 0) {
        currentTab.next("li").addClass('is-active').find("[aria-selected]").attr('aria-selected', true);
      } 

      else {
        tabs.find("li:first").addClass('is-active').find("[aria-selected]").attr('aria-selected', true);
      }

      if (currentPanel.next('.tabs-panel').length !== 0) {
        currentPanel.removeClass("is-active").next(".tabs-panel").addClass("is-active");
      } else {
        currentPanel.removeClass("is-active");
        tab_content.find(".tabs-panel:first").addClass("is-active");
      }
    },
    swipeRight:function(event, direction, distance, duration, fingerCount) {

      currentTab.removeClass('is-active').find("[aria-selected]").attr('aria-selected', false);

      if (currentTab.prev('li').length !== 0) {
        currentTab.prev("li").addClass('is-active').find("[aria-selected]").attr('aria-selected', true);
      } else {
        tabs.find("li:first").addClass('is-active').find("[aria-selected]").attr('aria-selected', true);
      }

      if (currentPanel.prev('.tabs-panel').length !== 0) {
        currentPanel.removeClass("is-active").prev(".tabs-panel").addClass("is-active");
      } else {
        currentPanel.removeClass("is-active");
        tab_content.find(".tabs-panel:first").addClass("is-active");
      }
    }
});