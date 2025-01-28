const books = [
    'genesis', 
    'exodus',
    'leviticus',
    'numbers',
    'deuteronomy',
    'joshua',
    'judges',
    'ruth',
    '1samuel',
    '2samuel',
    '1kings',
    '2kings',
    '1chronicles',
    '2chronicles',
    'ezra',
    'nehemiah',
    'esther',
    'job',
    'psalms', 
    'proverbs',
    'ecclesiastes',
    'songofsolomon',
    'isaiah',
    'jeremiah',
    'lamentations',
    'ezekiel',
    'daniel',
    'hosea',
    'joel',
    'amos',
    'obadiah',
    'jonah',
    'micah',
    'nahum',
    'habakkuk',
    'zephaniah',
    'haggai',
    'zechariah',
    'malachi',
    'matthew', 
    'mark',
    'luke',
    'john',
    'acts',
    'romans',
    '1corinthians',
    '2corinthians',
    'galatians',
    'ephesians',
    'philippians',
    'colossians',
    '1thessalonians',
    '2thessalonians',
    '1timothy',
    '2timothy',
    'titus',
    'philemon',
    'hebrews',
    'james',
    '1peter',
    '2peter',
    '1john',
    '2john',
    '3john',
    'jude',
    'revelation',
];

const bookIndex = Math.floor(Math.random() * books.length);
const bookID = books[bookIndex];
console.log(bookID)

async function getData(bookID) {
    const output = document.getElementById("verse")
    try {
      const response = await fetch('https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/'+bookID+'/chapters/1/verses/1.json');
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      const verse = json.text

      output.innerText = verse;

    } catch (error) {
      console.error(error.message);
      return;
    }
  }

getData(bookID)