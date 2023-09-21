var sendMessage = (channel, message) => console.log(`${channel}@quickjs ${message}`);
var fetch = async () => {};

console.warn = (...args) => sendMessage('print', `"[JS Runtime: WARN] ${args.map((a) => `${a}`).join(' ')}"`);
console.debug = (...args) => sendMessage('print', `"[JS Runtime: DEBUG] ${args.map((a) => `${a}`).join(' ')}"`);
console.info = (...args) => sendMessage('print', `"[JS Runtime: INFO] ${args.map((a) => `${a}`).join(' ')}"`);
console.error = (...args) => sendMessage('print', `"[JS Runtime: ERROR] ${args.map((a) => `${a}`).join(' ')}"`);
console.trace = (...args) => sendMessage('print', `"[JS Runtime: TRACE] ${args.map((a) => `${a}`).join(' ')}"`);

var setTimeout = os.setTimeout;
var clearTimeout = os.clearTimeout;