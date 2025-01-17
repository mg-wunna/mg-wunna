import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

// prettier-ignore
const ignoreKeywords = [
  // Articles
  'a', 'an', 'the',
  
  // Pronouns
  'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they',
  'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their',
  
  // Prepositions
  'in', 'on', 'at', 'to', 'for', 'with', 'by', 'from', 'up', 'down', 'into', 'onto',
  'of', 'about', 'over', 'after', 'before', 'during', 'under', 'within', 'without',
  
  // Conjunctions
  'and', 'or', 'but', 'nor', 'so', 'yet', 'because', 'while', 'if', 'unless',
  
  // Auxiliary verbs
  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
  'do', 'does', 'did', 'will', 'would', 'shall', 'should', 'may', 'might',
  'must', 'can', 'could',
  
  // Common adverbs
  'very', 'really', 'just', 'now', 'then', 'here', 'there', 'when', 'where',
  'why', 'how', 'again', 'ever', 'too', 'also', 'only',
  
  // Other common words
  'as', 'not', 'no', 'yes', 'all', 'any', 'each', 'few', 'many', 'some',
  'such', 'what', 'who', 'whom', 'whose', 'which', 'more', 'most', 'other',
  'another', 'than',
  
  // Negations and their variations
  'not', 'cannot', 'cant', 'wont', 'wouldnt', 'shouldnt', 'couldnt', 'didnt',
  'doesnt', 'dont', 'hadnt', 'hasnt', 'havent', 'isnt', 'mustnt', 'shant',
  'wasnt', 'werent',
  
  // Modal verbs and variations
  'would', 'could', 'should', 'shall', 'will', 'can', 'must', 'may', 'might',
  
  // Common verb forms
  'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'having',
  'do', 'does', 'did', 'doing'
];

// Add common contractions and their variations
const contractions: Record<string, string> = {
  "aren't": 'are not',
  "can't": 'cannot',
  "couldn't": 'could not',
  "didn't": 'did not',
  "doesn't": 'does not',
  "don't": 'do not',
  "hadn't": 'had not',
  "hasn't": 'has not',
  "haven't": 'have not',
  "he'd": 'he would',
  "he'll": 'he will',
  "he's": 'he is',
  "i'd": 'i would',
  "i'll": 'i will',
  "i'm": 'i am',
  "i've": 'i have',
  "isn't": 'is not',
  "it's": 'it is',
  "let's": 'let us',
  "mustn't": 'must not',
  "shan't": 'shall not',
  "she'd": 'she would',
  "she'll": 'she will',
  "she's": 'she is',
  "shouldn't": 'should not',
  "that's": 'that is',
  "there's": 'there is',
  "they'd": 'they would',
  "they'll": 'they will',
  "they're": 'they are',
  "they've": 'they have',
  "we'd": 'we would',
  "we're": 'we are',
  "we've": 'we have',
  "weren't": 'were not',
  "what'll": 'what will',
  "what're": 'what are',
  "what's": 'what is',
  "what've": 'what have',
  "where's": 'where is',
  "who'd": 'who would',
  "who'll": 'who will',
  "who're": 'who are',
  "who's": 'who is',
  "who've": 'who have',
  "won't": 'will not',
  "wouldn't": 'would not',
  "you'd": 'you would',
  "you'll": 'you will',
  "you're": 'you are',
  "you've": 'you have',
};

function generateKeywords(content: string) {
  // First clean and normalize the content
  let cleanContent = content
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`[^`]*`/g, '')
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove Image
    .replace(/!\[.*\]\((.*)\)/g, '')
    // Remove URLs
    .replace(/https?:\/\/[^\s]+/g, '')
    // Convert to lowercase
    .toLowerCase();

  // Handle contractions
  Object.entries(contractions).forEach(([contraction, expansion]) => {
    cleanContent = cleanContent.replace(
      new RegExp(contraction, 'gi'),
      expansion
    );
  });

  cleanContent = cleanContent
    // Remove special characters but keep hyphens for compound words
    .replace(/[^\w\s-]/g, ' ')
    // Replace multiple spaces and newlines with single space
    .replace(/\s+/g, ' ')
    // Split hyphenated words
    .replace(/-/g, ' ');

  // Split into words and process
  const keywords = cleanContent
    .split(' ')
    .filter((keyword) => {
      // Basic filtering
      if (!keyword || keyword.length <= 2) return false;
      if (ignoreKeywords.includes(keyword)) return false;
      if (isNaN(Number(keyword)) === false) return false;

      // Remove common file extensions
      if (/\.(js|ts|jsx|tsx|md|html|css|json)$/.test(keyword)) return false;

      // Remove common programming terms if too generic
      if (
        /^(var|let|const|function|class|interface|type|import|export)$/.test(
          keyword
        )
      )
        return false;

      return true;
    })
    // Remove duplicates
    .filter((keyword, index, self) => self.indexOf(keyword) === index)
    // Sort by length (optional)
    .sort((a, b) => b.length - a.length);

  // Group similar keywords (e.g., singular/plural forms)
  const groupedKeywords = new Map<string, string[]>();
  keywords.forEach((keyword) => {
    const base = keyword.replace(/s$/, ''); // Simple singular form
    if (!groupedKeywords.has(base)) {
      groupedKeywords.set(base, []);
    }
    groupedKeywords.get(base)?.push(keyword);
  });

  // Take the most common form from each group
  const finalKeywords = Array.from(groupedKeywords.values()).map(
    (group) => group.sort((a, b) => b.length - a.length)[0]
  );

  return finalKeywords;
}

async function setupKeywordData(type: 'blogs' | 'projects') {
  console.log(
    `\x1b[36m🚀 Starting keyword generation for all ${type}...\x1b[0m`
  );
  const list = fs.readdirSync(path.join(__dirname, 'public', type));
  console.log(`\x1b[32m📚 Found ${list.length} ${type} to process\x1b[0m`);

  for (const item of list) {
    console.log(`\n\x1b[34m📝 Processing ${type}: ${item}\x1b[0m`);

    const content = fs.readFileSync(
      path.join(__dirname, 'public', type, item, 'content.md'),
      'utf8'
    );
    console.log(`\x1b[32m📖 Successfully read ${type} content\x1b[0m`);

    const keywords = generateKeywords(content);
    console.log(`\x1b[33m🔑 Generated ${keywords.length} keywords\x1b[0m`);

    const metaData = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, 'public', type, item, 'meta.json'),
        'utf8'
      )
    );
    console.log('\x1b[32m📋 Successfully read meta.json\x1b[0m');

    metaData.keywords = keywords.join(' ');
    console.log('\x1b[35m✍️  Updated keywords in metadata\x1b[0m');

    fs.writeFileSync(
      path.join(__dirname, 'public', type, item, 'meta.json'),
      JSON.stringify(metaData, null, 2)
    );
    console.log('\x1b[32m💾 Successfully wrote updated meta.json\x1b[0m');
  }

  console.log(
    `\n\x1b[36m✨ Finished processing all ${type} successfully! ✨\x1b[0m`
  );
}

setupKeywordData('blogs');
setupKeywordData('projects');
