// Script para empaquetar las extensiones Firefox y Chromium
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

// Empaquetar Firefox con web-ext
console.log('Empaquetando Firefox...');
execSync('npx web-ext build --overwrite-dest --artifacts-dir ../dist', { cwd: path.join(__dirname, 'firefox'), stdio: 'inherit' });
const xpi = fs.readdirSync(distDir).find(f => f.endsWith('.xpi'));
if (xpi) {
    fs.renameSync(path.join(distDir, xpi), path.join(distDir, 'kreaUncensuredFirefox.xpi'));
}

// Empaquetar Chromium como zip
console.log('Empaquetando Chromium...');
const chromiumDir = path.join(__dirname, 'chromium');
const output = fs.createWriteStream(path.join(distDir, 'kreaUncensuredChromium.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => console.log('Chromium empaquetado.'));
archive.on('error', err => { throw err; });
archive.pipe(output);
archive.directory(chromiumDir + '/', false);
archive.finalize();
