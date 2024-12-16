// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "./delete_modal";

Rails.start()
Turbolinks.start()
ActiveStorage.start()


document.addEventListener("turbolinks:load", function() {
  const rows = document.querySelectorAll(".schedule-row");

  rows.forEach(row => {
    row.addEventListener("click", function() {
      const href = row.dataset.href;
      if (href) {
        window.location.href = href;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const flashMessage = document.getElementById("flash-message");
  if (flashMessage) {
    setTimeout(() => {
      flashMessage.classList.remove("animate-slideIn");
      flashMessage.classList.add("animate-slideOut");

    setTimeout(() => {
      flashMessage.remove();
    }, 500); // スライドアウトアニメーション後にDOMから削除
    }, 4000); // 表示時間を4秒程度に設定
  }
});


document.addEventListener("turbolinks:load", function () {
  const startInput = document.querySelector("#schedule_start_date");
  const endInput = document.querySelector("#schedule_end_date");

  if (startInput) {
    flatpickr(startInput, { dateFormat: "Y/m/d" });
  }

  if (endInput) {
    flatpickr(endInput, { dateFormat: "Y/m/d" });
  }
});

function clearFlashMessages() {
  const flashContainer = document.getElementById("flash-message");
  flashContainer.innerHTML = ""; // フラッシュエリアをクリア
}

