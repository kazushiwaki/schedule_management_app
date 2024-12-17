document.addEventListener("DOMContentLoaded", () => {
  if (window.location.search.includes('clear_flash=true')) {
    delete window.flash;
  }

  const modal = document.getElementById("delete-modal");
  const cancelButton = document.getElementById("cancel-button");
  const confirmDeleteLink = document.getElementById("confirm-delete-link");
  let deleteUrl = "";

  // 各削除リンクにクリックイベントを追加
  document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-link")) {
      event.preventDefault();
      deleteUrl = event.target.dataset.url; 
      modal.classList.remove("hidden");
    }
  });

  // キャンセルボタンでモーダルを閉じる
  cancelButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    deleteUrl = ""; // URLをクリア
  });

  // 削除ボタンがクリックされたら削除処理を実行
  confirmDeleteLink.addEventListener("click", () => {
    if (deleteUrl) {
      fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
        }
      })
        .then(response => {
          if (response.ok) {
            window.location.reload();
          }
        })
        .catch(() => alert("エラーが発生しました。"));

      modal.classList.add("hidden"); // モーダルを閉じる
    }
  });
});
