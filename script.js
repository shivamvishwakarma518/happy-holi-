const text = "Happy Holi! 🎨🎉";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("holiText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 300);
    }
}

typeText();
