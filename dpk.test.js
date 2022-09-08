const { deterministicPartitionKey } = require("./dpk");

const eventPartitionKey = "976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127";
const eventPartitionKeyOverMax = "976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127976b451818634a1e2acba682da3fd6efa72adf8a7a08d7939550c244b237c72c7d42367544e826c0c83fe5c02f97c0373b6b1386cc794bf0d21d2df01bb9c08a:2613516180127";
const eventPartitionAsObject = {
  "title": "example glossary",
  "GlossDiv": {
    "title": "S",
    "GlossList": {
      "GlossEntry": {
        "ID": "SGML",
        "SortAs": "SGML",
        "GlossTerm": "Standard Generalized Markup Language",
        "Acronym": "SGML",
        "Abbrev": "ISO 8879:1986",
        "GlossDef": {
            "para": "A meta-markup language, used to create markup languages such as DocBook.",
            "GlossSeeAlso": ["GML", "XML"]
        },
        "GlossSee": "markup"
      }
    }
  }
}
describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns event?.partitionKey when given valid event", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: eventPartitionKey
    });
    expect(trivialKey).toBe(eventPartitionKey);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns event?.partitionKey when given valid event with partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: eventPartitionKey
    });
    expect(trivialKey != '0').toBe(true);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns new partitionKey when given valid event with partition key over MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: eventPartitionKeyOverMax
    });
    expect(trivialKey == eventPartitionKeyOverMax).toBe(false);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns new partitionKey generated from create hash of eventObject when given valid event with partition key as json object", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: eventPartitionAsObject
    });
    expect(trivialKey != null && trivialKey != undefined && trivialKey != '0').toBe(true);
  });
});
