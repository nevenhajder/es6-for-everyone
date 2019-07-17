const heading = document.querySelector('.jump');

heading.innerHTML = spanWrap(heading.textContent);

function spanWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('');
}