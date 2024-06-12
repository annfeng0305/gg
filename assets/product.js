document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating');
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            ratingValue.textContent = selectedRating;
            updateStars(selectedRating);
        });

        star.addEventListener('mouseover', () => {
            const hoverValue = star.getAttribute('data-value');
            updateStars(hoverValue);
        });

        star.addEventListener('mouseout', () => {
            updateStars(selectedRating);
        });
    });

    function updateStars(value) {
        stars.forEach((s, i) => {
            if (i < value) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
    }

    const commentForm = document.getElementById('commentForm');
    const commentsDiv = document.getElementById('comments');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const textarea = commentForm.querySelector('textarea');
        const commentText = textarea.value.trim();

        if (commentText) {
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.textContent = commentText;

            commentsDiv.appendChild(comment);
            textarea.value = '';
        }
    });
});