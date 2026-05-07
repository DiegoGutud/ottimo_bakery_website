const fs = require('fs');

let css = fs.readFileSync('src/style.css', 'utf8');

// Remove body cursor:none
css = css.replace(/cursor\s*:\s*none\s*!important;?/g, '');
css = css.replace(/cursor\s*:\s*none\s*;?/g, 'cursor:pointer;');
// For body, we don't want cursor:pointer, let's fix body specifically if it got caught
css = css.replace(/body\s*\{[^}]*cursor:\s*pointer;?/g, match => match.replace('cursor:pointer;', 'cursor:auto;'));
// For h-scroll-wrapper
css = css.replace(/\.h-scroll-wrapper\s*\{[^}]*cursor:\s*pointer;?/g, match => match.replace('cursor:pointer;', 'cursor:grab;'));
css = css.replace(/\.h-scroll-wrapper:active\s*\{[^}]*cursor:\s*pointer;?/g, match => match.replace('cursor:pointer;', 'cursor:grabbing;'));

fs.writeFileSync('src/style.css', css, 'utf8');

// HomePage
let hp = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');
hp = hp.replace(/<CustomCursor \/>/g, '');
hp = hp.replace(/CustomCursor,/g, '');
fs.writeFileSync('src/pages/HomePage.jsx', hp, 'utf8');

// CartaPage
let cp = fs.readFileSync('src/pages/CartaPage.jsx', 'utf8');
cp = cp.replace(/<CustomCursor \/>/g, '');
cp = cp.replace(/import { CustomCursor } from '..\/components\/Sections.jsx';\n?/g, '');
fs.writeFileSync('src/pages/CartaPage.jsx', cp, 'utf8');

