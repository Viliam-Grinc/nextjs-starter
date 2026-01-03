/* eslint-disable */
/* Patch generated request.ts to encode array query params as CSV (explode=false) */
const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', 'src', 'lib', 'api', 'core', 'request.ts');

try {
  let src = fs.readFileSync(file, 'utf8');

  const from = /if \(Array\.isArray\(value\)\) \{[\s\S]*?\} else if \(typeof value === 'object'\) \{/;
  const replacement = `if (Array.isArray(value)) {
                // Encode arrays as a single comma-separated value (CSV)
                const flat = value
                    .filter(v => isDefined(v))
                    .map(v => String(v))
                    .join(',');
                if (flat.length > 0) {
                    append(key, flat);
                }
            } else if (typeof value === 'object') {`;

  if (from.test(src)) {
    src = src.replace(from, replacement);
    fs.writeFileSync(file, src, 'utf8');
    console.log('postgen-fix-csv: Patched array serialization to CSV.');
  } else {
    console.warn('postgen-fix-csv: Pattern not found, no changes applied.');
  }
} catch (e) {
  console.error('postgen-fix-csv: Failed to patch request.ts', e);
  process.exit(1);
}
