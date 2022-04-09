let lastestDisplayIndex = 0;
function load() {
    lastestDisplayIndex = lastestDisplayIndex + 6;
    const items = document.getElementsByClassName("load-more-item");
    if (items && items.length) {
        for (let i = lastestDisplayIndex - 6; i < lastestDisplayIndex; i++) {
            let item = items[i];
            console.log(item);
            item.classList.add("d-block");
        }
    }
}
