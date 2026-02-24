const synth = new Tone.Synth({
  oscillator: { type: "sine" },
  envelope: { 
    decay: 0.2, 
    sustain: 0.4, 
    release: 0.4,
    wet: 0.4
  }
}).toDestination();

async function playNote(note, el) {
  await Tone.start();
  synth.triggerAttackRelease(note, "8n");

  el.style.filter = "brightness(1.4)";
  setTimeout(() => (el.style.filter = ""), 80);
}

document.querySelectorAll("[data-note]").forEach((el) => {
  el.addEventListener("click", () => {
    playNote(el.dataset.note, el);
  });
});