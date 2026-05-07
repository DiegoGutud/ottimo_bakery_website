const fs = require('fs');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports if missing
  if (!content.includes('lucide-react')) {
    content = `import { Star, MapPin, Clock, Package, CreditCard, Smartphone, Camera, Utensils, Lightbulb, Croissant, Pizza, CakeSlice, Info } from 'lucide-react';\n` + content;
  }

  // Hero
  content = content.replace(/Hecho a mano 🇮🇹/g, 'Hecho a mano <MapPin size={12} style={{display:"inline", marginLeft:"4px", verticalAlign:"middle"}} />');
  
  // Stats
  content = content.replace(/⭐⭐⭐⭐⭐/g, '<span style={{display:"inline-flex", gap:"2px", marginLeft:"4px"}}><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></span>');
  content = content.replace(/★5/g, '<Star size={24} fill="currentColor" style={{display:"inline", marginBottom:"-4px"}}/> 5');
  content = content.replace(/★★★★★/g, '<Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/>');
  
  // Carta Preview
  content = content.replace(/<div className="carta-icon">🥐<\/div>/g, '<div className="carta-icon"><Croissant size={32} /></div>');
  content = content.replace(/<div className="carta-icon">🫓<\/div>/g, '<div className="carta-icon"><Pizza size={32} /></div>');
  content = content.replace(/<div className="carta-icon">🎂<\/div>/g, '<div className="carta-icon"><CakeSlice size={32} /></div>');

  // Proceso
  content = content.replace(/<div className="proceso-step-icon">🍽️<\/div>/g, '<div className="proceso-step-icon"><Utensils size={32} /></div>');
  content = content.replace(/<div className="proceso-step-icon">📱<\/div>/g, '<div className="proceso-step-icon"><Smartphone size={32} /></div>');
  content = content.replace(/<div className="proceso-step-icon">📦<\/div>/g, '<div className="proceso-step-icon"><Package size={32} /></div>');
  content = content.replace(/<span className="proceso-note-icon">💡<\/span>/g, '<span className="proceso-note-icon"><Lightbulb size={20} /></span>');
  
  // Local
  content = content.replace(/<div className="local-icon">📍<\/div>/g, '<div className="local-icon"><MapPin size={20} /></div>');
  content = content.replace(/<div className="local-icon">🕐<\/div>/g, '<div className="local-icon"><Clock size={20} /></div>');
  content = content.replace(/<div className="local-icon">📦<\/div>/g, '<div className="local-icon"><Package size={20} /></div>');
  content = content.replace(/<div className="local-icon">💳<\/div>/g, '<div className="local-icon"><CreditCard size={20} /></div>');

  // CTA / Footer
  content = content.replace(/📱 /g, '<Smartphone size={16} style={{marginRight:"6px", display:"inline", verticalAlign:"text-bottom"}} /> ');
  content = content.replace(/📸 /g, '<Camera size={16} style={{marginRight:"6px", display:"inline", verticalAlign:"text-bottom"}} /> ');
  content = content.replace(/📍 /g, '<MapPin size={16} style={{marginRight:"6px", display:"inline", verticalAlign:"text-bottom"}} /> ');
  content = content.replace(/>📸</g, '><Camera size={16} /><');
  content = content.replace(/>📱</g, '><Smartphone size={16} /><');
  content = content.replace(/>📍</g, '><MapPin size={16} /><');

  // Carta specific emojis
  content = content.replace(/<div className="mini-icon">🥐<\/div>/g, '<div className="mini-icon"><Croissant size={28} /></div>');
  content = content.replace(/<div className="mini-icon">🫓<\/div>/g, '<div className="mini-icon"><Pizza size={28} /></div>');
  content = content.replace(/<div className="mini-icon">🎂<\/div>/g, '<div className="mini-icon"><CakeSlice size={28} /></div>');
  content = content.replace(/<span className="proceso-note-icon">ℹ️<\/span>/g, '<span className="proceso-note-icon"><Info size={20} /></span>');
  content = content.replace(/<span className="proceso-note-icon">🚙<\/span>/g, '<span className="proceso-note-icon"><Package size={20} /></span>');

  fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('src/components/Sections.jsx');
replaceInFile('src/components/CartaSections.jsx');
