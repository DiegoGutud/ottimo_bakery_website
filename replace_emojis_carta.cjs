const fs = require('fs');

const filePath = 'src/components/CartaSections.jsx';
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('lucide-react')) {
  content = `import { Croissant, CakeSlice, Truck, Pizza, Cookie, Sparkles } from 'lucide-react';\n` + content;
} else {
  content = content.replace(/import \{ (.*) \} from 'lucide-react';/, "import { $1, Croissant, CakeSlice, Truck, Pizza, Cookie, Sparkles } from 'lucide-react';");
}

content = content.replace(/🥐/g, '<Croissant size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/>');
content = content.replace(/🎂/g, '<CakeSlice size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/>');
content = content.replace(/🚚/g, '<Truck size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/>');
content = content.replace(/🍕/g, '<Pizza size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/>');
content = content.replace(/🍫/g, '<Cookie size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/>');
content = content.replace(/✨/g, '<Sparkles size={24} style={{display:"inline", verticalAlign:"middle", marginRight:"6px"}}/>');

fs.writeFileSync(filePath, content, 'utf8');
