#!/usr/bin/env node
// Prepara um mapa HTML para uso no app: liga o botão de voltar ao app e
// faz o texto respeitar o seletor de tamanho de fonte (variável --fs).
// Uso: node scripts/prepare-map.mjs public/mapas/*.html   (pode rodar mais de uma vez)
import { readFileSync, writeFileSync } from 'node:fs';

const MARK = '<!--fs-ready-->';
const BOOT =
  '<script>try{var f=parseFloat(localStorage.getItem("mapas-font-scale"));if(f>0.5&&f<3)document.documentElement.style.setProperty("--fs",String(f));}catch(e){}</script>';

for (const file of process.argv.slice(2)) {
  let s = readFileSync(file, 'utf8');
  if (s.includes(MARK)) {
    console.log('já preparado:', file);
    continue;
  }
  s = s.replaceAll('href="index.html"', 'href="/" target="_top"');

  const start = s.indexOf('<style>');
  const end = s.indexOf('</style>');
  if (start === -1 || end === -1) throw new Error(`sem <style> em ${file}`);
  const css = s
    .slice(start, end)
    .split('\n')
    .map((line) =>
      // o diagrama SVG tem a escala própria (viewBox): não mexe nas regras dele
      /mm-|svg|mindmap/.test(line)
        ? line
        : line.replace(/font-size:\s*([\d.]+)px/g, 'font-size:calc($1px * var(--fs,1))'),
    )
    .join('\n');
  s =
    s.slice(0, start) +
    css +
    '\n  html{font-size:calc(100% * var(--fs,1));}\n' +
    s.slice(end);
  s = s.replace('</style>', `</style>\n${MARK}${BOOT}`);
  writeFileSync(file, s);
  console.log('preparado:', file);
}
