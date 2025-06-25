import React, { useEffect } from 'react'

const TranslateBtn = () => {
      useEffect(() => {
    window.googleTranslateElementInit = () => {
      const translateElement = document.getElementById(
        "google_translate_element"
      );
      if (translateElement) {
        translateElement.innerHTML = "";
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,zh-CN,ja",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      const script = document.querySelector("#google-translate-script");
      if (script) {
        script.remove();
      }
      delete window.googleTranslateElementInit;

      const widgets = document.querySelectorAll(".skiptranslate");
      widgets.forEach((widget) => widget.remove());
    };
  }, []);
  return (
    <button id="google_translate_element"></button>
  )
}

export default TranslateBtn