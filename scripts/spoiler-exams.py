"""Transforma os blocos <details class="exam"> dos mapas: a questão (e as alternativas)
ficam visíveis e só a resposta fica escondida atrás de um "+ Ver resposta". Idempotente."""
import re, sys

CSS = r"""
  .exam{border:1px dashed var(--line); border-radius:10px; padding:16px 18px; margin:20px 0; background:var(--paper-2);}
  .exam .exam-label{display:flex; align-items:center; gap:8px; font-family:var(--font-mono); font-size:calc(12px * var(--fs,1)); text-transform:uppercase; letter-spacing:.05em; color:var(--ink-faint); font-weight:600;}
  .exam .q{margin-top:12px; font-size:.96rem; font-weight:600;}
  .exam .opts{margin:10px 0 0; padding-left:1.4em; font-size:.9rem; color:var(--ink-soft);}
  .exam .opts li{margin-bottom:3px;}
  details.ans{margin-top:14px; padding-top:12px; border-top:1px solid var(--line-soft);}
  details.ans summary{cursor:pointer; list-style:none; display:inline-flex; align-items:center; gap:8px; font-family:var(--font-mono); font-size:calc(12px * var(--fs,1)); text-transform:uppercase; letter-spacing:.05em; color:var(--accent); font-weight:700;}
  details.ans summary::-webkit-details-marker{display:none;}
  details.ans summary::before{content:"+"; display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border:1px solid var(--accent); border-radius:50%; font-size:calc(13px * var(--fs,1)); line-height:1;}
  details.ans[open] summary::before{content:"\2013";}
  details.ans .a{margin-top:12px; font-size:.92rem; color:var(--ink-soft);}
  details.ans .a .verdict{font-family:var(--font-mono); color:var(--accent); font-weight:700;}
  details.ans .a ul{margin:8px 0 0; padding-left:1.1em;}
  details.ans .a li{margin-bottom:4px;}
"""

PAT = re.compile(r'<details class="exam"[^>]*>\s*<summary>(.*?)</summary>(.*?)</details>', re.S)


def repl(m):
    label, body = m.group(1), m.group(2)
    i = body.find('<div class="a"')
    if i == -1:
        return f'<div class="exam"><div class="exam-label">{label}</div>{body}</div>'
    before, answer = body[:i], body[i:]
    return (f'<div class="exam"><div class="exam-label">{label}</div>{before}'
            f'<details class="ans"><summary>Ver resposta</summary>{answer}</details></div>')


for path in sys.argv[1:]:
    s = open(path, encoding='utf-8').read()
    n = len(PAT.findall(s))
    if n == 0:
        print('sem blocos:', path)
        continue
    s = PAT.sub(repl, s)
    if 'details.ans summary' not in s:
        s = s.replace('</style>', CSS + '</style>', 1)
    open(path, 'w', encoding='utf-8').write(s)
    print(f'{n} questões:', path)
