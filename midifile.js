
const MidiWriter = require('midi-writer-js');

const reps      = 5;
const duration  = [1,4, 1,1,4, 1,1,1,4, 1,1,1,1,4, 1,1,1,1,1,4, 1,1,1,1,1,1,4, 1,1,1,1,1,1,1,4, 1,1,1,1,1,1,1,4, 1,1,1,1,1,1,4, 1,1,1,1,1,4, 1,1,1,1,4, 1,1,1,4, 1,1,4, 1,4];
const accent    = [1,1, 1,2,1, 1,2,2,1, 1,2,3,2,1, 1,2,3,3,2,1, 1,2,3,4,3,2,1, 1,2,3,4,4,3,2,1, 1,2,3,4,4,3,2,1, 1,2,3,4,3,2,1, 1,2,3,3,2,1, 1,2,3,2,1, 1,2,2,1, 1,2,1, 1,1];
const scale     = [62,64,66,67,69,71,73]; // d maj.
const triad     = [62,66,69];             // d maj.
const moct      = -12;                    
const toct      = -24;
const cres      = 9;
const vol       = 20;

function m2t (m) {

  if (m == triad[0])
    return triad[triad.length-1] - 12;

  for (var i=1; i < triad.length; i++) {
  if (triad[i] == m)
    return triad[i-1];
  }

  for (var i=triad.length-1; i >= 0; i--) {
  if (triad[i] < m)
    return triad[i];
  }

  console.log('oops');
}

function hit(v,a) {
  var r  = Math.trunc((Math.random() * 3)) - 1;
  return v + a + r;
}

function hold(d) {
  var r  = Math.trunc((Math.random() * 3)) - 1;
  var t1 = d * 128;
  var t2 = t1 + r;
  return t2;
}

var mnotes = new MidiWriter.Track();

var len = duration.length * reps;

for (var i=0; i < len; i++) {

  const r = Math.trunc((Math.random() * scale.length));

  const m = scale[r];
  const t = m2t(m);

  const a = accent[(i % duration.length)];
  const v = hit(vol,a*cres);

  const d = duration[(i % duration.length)];
  const h = hold(d);

  //console.log(i,r,m,t,a,v,d,h);

  if (m == t) {
    console.log('oops 2');
  }

  mnotes.addEvent(new MidiWriter.NoteEvent({pitch: [m + moct, t + toct], duration: 'T' + h, velocity: v}));
}

var write = new MidiWriter.Writer(mnotes);

//console.log(write.dataUri());

write.stdout();

module.exports = write;

