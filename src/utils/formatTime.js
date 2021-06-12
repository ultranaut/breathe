const formatTime = (milliseconds) => {
  const elapsed = milliseconds / 1000;
  const mins = Math.floor(elapsed / 60);
  const secs = Math.floor(elapsed % 60);
  const decs = Math.round((elapsed - Math.floor(elapsed)) * 10);

  let formatted = mins.toString().padStart(1, 0) + ':';
  formatted += secs.toString().padStart(2, 0) + '.';
  formatted += decs.toString().slice(0, 1);
  return formatted;
};

export default formatTime;
