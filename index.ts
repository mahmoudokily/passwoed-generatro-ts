const letters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXY",
  lowercase: "abcdefghijklmnopqrstuvwxy"
};
const digits = "0123456789";
const symbols = "!$%&()=?*+><:;.-@[]{}";

const getCharacters = (kind = "all") => {
  switch (kind) {
    case "uppercase":
      return letters.uppercase;
    case "lowercase":
      return letters.lowercase;
    case "letters":
      return letters.uppercase + letters.lowercase;
    case "symbols":
      return symbols;
    case "numbers":
      return digits;
    default:
      return letters.uppercase + letters.lowercase + digits + symbols;
  }
};

const create = (chars: string, length: number) => {
  let password = "";
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * chars.length + 1);
    password += chars.charAt(char);
  }
  return password;
};

const shuffle = (str: string) => {
  return str
    .split("")
    .sort((a: string, b: string) => {
      return Math.random() - 0.5;
    })
    .join("");
};

const build = (options?: { [key: string]: boolean }) => {
  let characters = "";
  if (!options || characters.length === 0) {
    characters = getCharacters();
    return shuffle(characters);
  }
  if (options.letters) {
    characters += getCharacters("lowercase");
  }
  if (options.mixed) {
    characters = getCharacters("letters");
  }

  if (options.punctuation) {
    characters += getCharacters("symbols");
  }

  if (options.numbers) {
    characters += getCharacters("numbers");
  }

  return shuffle(characters);
};
type Options = {
  letters?: boolean;
  mixedCase?: boolean;
  punctuation?: boolean;
  numbers?: boolean;
};

const getRandomPassword = (length: number = 8, options?: Options) => {
  return create(build(options), length);
};
console.log(getRandomPassword(5, { letters: true }));
console.log(getRandomPassword(10, { mixedCase: true }));
console.log(getRandomPassword(12, { punctuation: true }));
console.log(getRandomPassword(14, { numbers: true }));
console.log(getRandomPassword(13));
