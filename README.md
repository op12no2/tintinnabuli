# Tintinnabuli

Generate very simple mostly-random Tintinnabuli melodies.

## furalina_to_midifile.js

A [Node.js](https://nodejs.org/en) script that creates a MIDI file containing a Tintinnabuli melody rhythmically shaped around Für Alina. Each execution creates a different melody. The file can be imported into a DAW for example. Use:-

```
npm install midi-writer-js
node furalina_to_midifile.js > tintin.mid
```

The velocity and rhythm have little random values added for a bit of variation. For an example download ```furalina_to_midifile.mp3```.
