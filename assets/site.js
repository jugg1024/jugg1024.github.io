(function () {
  var body = document.body;
  var buttons = document.querySelectorAll("[data-lang-target]");
  var saved = window.localStorage.getItem("ligen-site-language");
  var initial = saved === "zh" ? "zh" : "en";

  function setLanguage(language) {
    body.setAttribute("data-lang", language);
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
    buttons.forEach(function (button) {
      button.setAttribute(
        "aria-pressed",
        button.getAttribute("data-lang-target") === language ? "true" : "false"
      );
    });
    window.localStorage.setItem("ligen-site-language", language);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-lang-target"));
    });
  });

  setLanguage(initial);
})();
