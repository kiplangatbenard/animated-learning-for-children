function startLesson() {
  const container = document.getElementById("animationContainer");
  container.innerHTML = ""; // Clear previous animations

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numbers.forEach((num, index) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.style.fontSize = "50px";
      div.style.margin = "20px";
      div.innerText = num;
      container.appendChild(div);

      // Animate the number
      div.animate([{ transform: "scale(0)" }, { transform: "scale(1)" }], {
        duration: 500,
        iterations: 1,
        fill: "forwards",
      });
    }, index * 1000);
  });
}
