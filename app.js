var notes = ['C major', 'G major', 'D major', 'A major', 'E major', 'B major', 'F major']

document.addEventListener('click', function () {
  document.getElementById('note').innerHTML = getNote()
})

var prevNote = 0

function getNote() {
  var note = Math.floor(Math.random() * notes.length)
  if (note !== prevNote) {
    prevNote = note
    return notes[note]
  }
  return getNote()
}
