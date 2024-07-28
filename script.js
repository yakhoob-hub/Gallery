function openModal(element) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalImage').src = element.src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
