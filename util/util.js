function makeId(length) {
  if (typeof (length) !== "number") {
    throw new Error('ID length needs to be a number.');
  }
  if (length < 0) throw new Error('ID length needs to be positive.');

  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength));
  };

  return id;
}

module.exports.makeId = makeId;