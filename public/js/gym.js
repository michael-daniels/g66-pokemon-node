document.getElementById('battleButton').addEventListener('click', () => {
  let winner1 = document.getElementById('winner1');
  let winner2 = document.getElementById('winner2');
  if (winner1 === null) {
    winner2.style.display = "block";
  } else {
    winner1.style.display = "block";
  }
});
