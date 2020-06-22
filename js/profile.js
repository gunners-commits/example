"use strict"

const maxLen = 25;

focusName.addEventListener('input', e => {
    // console.dir(focusName.innerText.length)
  if(focusName.innerText.length > maxLen)
    focusName.innerHTML = focusName.innerHTML.substr(15, maxLen );
});

focusEmail.addEventListener('input', e => {
  // console.dir(focusName.innerText.length)
if(focusEmail.innerText.length > maxLen)
focusEmail.innerHTML = focusEmail.innerHTML.substr(15, maxLen );
});