"""Prepara una pose de El Estratega para la plantilla de poses: reduce al personaje (0.88) y extiende el fondo
con una versión desenfocada, para que el salto y el balanceo no muestren bordes.
Uso: python3 extender_fondo.py pose_1080x1916.png salida.png"""
import sys
from PIL import Image, ImageFilter, ImageDraw
W,H=1240,2200; ox,oy=80,140; S=0.88
im=Image.open(sys.argv[1]).convert('RGB').resize((1080,1916))
bg=im.resize((W,H)).filter(ImageFilter.GaussianBlur(60))
sw,sh=int(1080*S),int(1916*S); sc=im.resize((sw,sh),Image.LANCZOS)
m=Image.new('L',(sw,sh),0); ImageDraw.Draw(m).rectangle((60,60,sw-60,sh-60),fill=255); m=m.filter(ImageFilter.GaussianBlur(40))
bg.paste(sc,(ox+(1080-sw)//2, oy+1585-int(1545*S)),m); bg.save(sys.argv[2])
