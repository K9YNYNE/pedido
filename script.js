document.addEventListener('DOMContentLoaded', (event) => {
    const noBtn = document.getElementById('noBtn');

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton);

    function moveButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        let newLeft = Math.random() * (containerRect.width - buttonRect.width);
        let newTop = Math.random() * (containerRect.height - buttonRect.height);

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newLeft}pxoi`;
        noBtn.style.top = `${newTop}px`;
    }
});
