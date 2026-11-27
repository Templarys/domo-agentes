#!/bin/bash
# Reel «Radiografía territorial · Santa Cruz Xoxocotlán»: escenas 3D con tiempo global (DESDE) + voz de Marto.
# Uso: bash escenas/xoxo/montar.sh <salida.mp4>
set -e
R=$(cd "$(dirname "$0")/../.." && pwd); cd "$R"; T=escenas/xoxo/tmp; mkdir -p $T
# nombre escena cuadro_inicio cuadro_fin
seg() { rm -rf $T/$1; DESDE=$(python3 -c "print($3/30)") node motor/render.js escenas/xoxo/$2 $(python3 -c "print(($4-$3)/30)") $T/$1 30 >$T/$1.log 2>&1
  ffmpeg -y -loglevel error -framerate 30 -i $T/$1/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 16 -preset slow $T/$1.mp4; }
if [ -z "$SOLO_MONTAJE" ]; then
  ( seg s1 ciudad.html 0 90; seg s2 participacion.html 90 322; seg s3 comparacion.html 322 430; seg s4 secciones.html 430 730 ) &
  ( seg s5 edad.html 730 1017; seg s6 sexo.html 1017 1183; seg s7 jovenes.html 1183 1314; seg s8 ciudad.html 1314 1413; seg s9 cierre.html 1413 1797 ) &
  wait
fi
for i in 1 2 3 4 5 6 7 8 9; do echo "file 's$i.mp4'"; done > $T/lista.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i $T/lista.txt -c copy $T/video.mp4
# Voz: una toma continua, sin recortes; nivel para dejar espacio a música de Meta
ffmpeg -y -loglevel error -i $T/video.mp4 -i escenas/xoxo/voz_marto.mp3 \
  -filter_complex "[1:a]loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000,apad[a]" -map 0:v -map "[a]" -t 59.9 \
  -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -r 30 -c:a aac -b:a 160k -movflags +faststart "$1"
echo listo
