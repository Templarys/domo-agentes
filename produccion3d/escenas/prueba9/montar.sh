#!/bin/bash
# Prueba 9: secuencia híbrida = escenas 3D sin títulos + voz de Marto (reutilizada, 0 créditos) + subtítulos + cierre.
set -e
R=$(cd "$(dirname "$0")/../.." && pwd); cd "$R"; T=escenas/prueba9/tmp; mkdir -p $T
seg() { # escena desde duracion nombre
  rm -rf $T/$4; LIMPIO=1 DESDE=$2 node motor/render.js escenas/$1/index.html $3 $T/$4 30 >/dev/null
  ffmpeg -y -loglevel error -framerate 30 -i $T/$4/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 20 $T/$4.mp4; }
seg prueba1 2.0 3.6 s1
seg prueba4 2.0 4.3 s2
seg prueba8 3.2 4.0 s3
seg prueba6 4.0 4.9 s4
# Cierre: logo, frase oficial y WhatsApp sobre fondo oscuro
python3 - <<'PY'
from PIL import Image, ImageDraw, ImageFont
W,H=1080,1920; im=Image.new('RGB',(W,H),(11,24,48)); d=ImageDraw.Draw(im)
logo=Image.open('assets/marca/domo-politico-blanco.png').convert('RGBA'); s=620/logo.width; logo=logo.resize((620,int(logo.height*s)))
im.paste(logo,((W-620)//2,640),logo)
fb=ImageFont.truetype('assets/tipografia/nexa-bold.otf',48); fl=ImageFont.truetype('assets/tipografia/nexa-light.otf',40)
for y,t,f,c in [(1010,'Consultoría política e inteligencia',fl,(245,241,232)),(1062,'jurídico-electoral',fl,(245,241,232)),(1190,'WhatsApp 951 440 2226',fb,(255,255,255)),(1270,'#DomoPolítico',fl,(245,241,232))]:
    w=d.textlength(t,font=f); d.text(((W-w)/2,y),t,font=f,fill=c)
im.save('escenas/prueba9/tmp/cierre.png')
PY
ffmpeg -y -loglevel error -loop 1 -t 2.6 -framerate 30 -i $T/cierre.png -c:v libx264 -pix_fmt yuv420p -crf 20 $T/s5.mp4
printf "file 's1.mp4'\nfile 's2.mp4'\nfile 's3.mp4'\nfile 's4.mp4'\nfile 's5.mp4'\n" > $T/lista.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i $T/lista.txt -c copy $T/video.mp4
# Subtítulos (mismos cortes que la voz)
F=assets/tipografia/nexa-bold.otf
sub() { echo "drawtext=fontfile=$F:text='$3':fontsize=54:fontcolor=white:box=1:boxcolor=0x0b1830@0.78:boxborderw=18:x=(w-text_w)/2:y=1430:enable='between(t,$1,$2)'"; }
FILTRO=$(IFS=,; echo "$(sub 0.2 3.6 '¿Y si toda tu campaña cupiera'),$(sub 0.2 3.6 '' | sed 's/y=1430/y=1510/'),$(sub 3.83 5.0 'Del mapa de México…'),$(sub 5.0 6.75 '…a cada sección electoral,'),$(sub 6.75 7.9 'en segundos.'),$(sub 8.04 8.8 'Cómo votó,'),$(sub 8.8 10.2 'dónde se cruzó el voto'),$(sub 10.2 11.9 'y qué edades salieron a votar.'),$(sub 12.06 13.4 'Tu estructura territorial:'),$(sub 13.4 15.0 'metas, avance y huecos,'),$(sub 15.0 16.75 'sección por sección.')")
FILTRO=$(echo "$FILTRO" | sed "s/text='':/text='en una sola pantalla?':/")
ffmpeg -y -loglevel error -i $T/video.mp4 -i escenas/demo_plataforma/voz_marto.mp3 -filter_complex "[0:v]$FILTRO[v];[1:a]atrim=0:16.9,afade=t=out:st=16.5:d=0.4,apad[a]" -map "[v]" -map "[a]" -t 19.4 -c:v libx264 -pix_fmt yuv420p -crf 21 -c:a aac -b:a 160k "$1"
echo listo
