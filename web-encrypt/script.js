function encrypt() {
  const plaintext = document.getElementById("plaintext").value;
  const ciphertext = btoa(plaintext);
  document.getElementById("ciphertext").value = ciphertext;
}

function decrypt() {
  const ciphertext = document.getElementById("ciphertext").value;
  const decryptedtext = atob(ciphertext);
  document.getElementById("decryptedtext").value = decryptedtext;
}
