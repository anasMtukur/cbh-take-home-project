const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  
  let candidate = getEventCandidate(event);

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};

function getEventCandidate(event) {
  const TRIVIAL_PARTITION_KEY = "0";

  if(!event) return TRIVIAL_PARTITION_KEY;

  if (event?.partitionKey) {
    return event?.partitionKey;
  }
    
  const data = JSON.stringify(event);
  return crypto.createHash("sha3-512").update(data).digest("hex");
}