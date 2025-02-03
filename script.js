function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = "Đã sao chép!";
        setTimeout(() => { button.textContent = "Copy"; }, 2000);
    }).catch(err => {
        console.error("Lỗi sao chép: ", err);
    });
}
