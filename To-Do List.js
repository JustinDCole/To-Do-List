const buttton = document.getElementById('clickster')
buttton.addEventListener('submit', myFunction())
function myFunction (outputt, listicle, entry, layout) {
  layout = []
  outputt = document.getElementById('markdown').value.innerText
  listicle = document.createElement('p')
  entry = document.createTextNode(outputt)
  if (outputt) {
    layout.push(outputt)
  }
  listicle.appendChild(entry)
}
