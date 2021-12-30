const root = document.documentElement;

const themeChangeSlider = document.getElementById("theme-slider");

themeChangeSlider.addEventListener("input", () => {
  const value = Number(themeChangeSlider.value);
  switch (value) {
    case 0:
      root.style.setProperty("--main-bg-color", "hsl(222, 26%, 31%)");
      root.style.setProperty("--main-text-color", "white");
      root.style.setProperty("--result-box-bg-color", "hsl(224, 36%, 15%)");
      root.style.setProperty("--main-calculator-color", "hsl(223, 31%, 20%)");
      root.style.setProperty(
        "--number-buttons-text-color",
        "hsl(221, 14%, 31%)"
      );
      root.style.setProperty("--number-buttons-bg-color", "white");
      root.style.setProperty("--main-buttons-shadow-color", "hsl(0, 0%, 65%)");
      root.style.setProperty(
        "--reset-delete-button-main-color",
        "hsl(225, 21%, 49%)"
      );
      root.style.setProperty(
        "--reset-delete-button-shadow-color",
        "hsl(224, 28%, 35%)"
      );
      root.style.setProperty("--equals-buttom-main-color", "hsl(6, 63%, 50%)");
      root.style.setProperty(
        "--equals-button-shadow-color",
        "hsl(6, 70%, 34%)"
      );
      break;
    case 1:
      root.style.setProperty("--main-bg-color", "hsl(0, 0%, 90%)");
      root.style.setProperty("--main-text-color", "hsl(60, 10%, 19%)");
      root.style.setProperty("--result-box-bg-color", "hsl(0, 0%, 93%)");
      root.style.setProperty("--main-calculator-color", "hsl(0, 5%, 81%)");
      root.style.setProperty(
        "--number-buttons-text-color",
        "hsl(60, 10%, 19%)"
      );
      root.style.setProperty("--number-buttons-bg-color", "hsl(45, 7%, 89%)");
      root.style.setProperty(
        "--main-buttons-shadow-color",
        "hsl(35, 11%, 61%)"
      );
      root.style.setProperty(
        "--reset-delete-button-main-color",
        "hsl(185, 42%, 37%)"
      );
      root.style.setProperty(
        "--reset-delete-button-shadow-color",
        "hsl(185, 58%, 25%)"
      );
      root.style.setProperty("--equals-buttom-main-color", "hsl(25, 98%, 40%)");
      root.style.setProperty(
        "--equals-button-shadow-color",
        "hsl(25, 99%, 27%)"
      );
      break;
    case 2:
      root.style.setProperty("--main-bg-color", "hsl(268, 75%, 9%)");
      root.style.setProperty("--main-text-color", "hsl(52, 100%, 62%)");
      root.style.setProperty("--result-box-bg-color", "hsl(268, 71%, 12%)");
      root.style.setProperty("--main-calculator-color", "hsl(268, 71%, 12%)");
      root.style.setProperty(
        "--number-buttons-text-color",
        "hsl(52, 100%, 62%)"
      );
      root.style.setProperty("--number-buttons-bg-color", "hsl(268, 47%, 21%)");
      root.style.setProperty(
        "--main-buttons-shadow-color",
        "hsl(285, 91%, 52%)"
      );
      root.style.setProperty(
        "--reset-delete-button-main-color",
        "hsl(281, 89%, 26%)"
      );
      root.style.setProperty(
        "--reset-delete-button-shadow-color",
        "hsl(285, 91%, 52%)"
      );
      root.style.setProperty(
        "--equals-buttom-main-color",
        "hsl(176, 100%, 44%)"
      );
      root.style.setProperty(
        "--equals-button-shadow-color",
        "hsl(177, 92%, 70%)"
      );
      break;
  }
});
//test to commit