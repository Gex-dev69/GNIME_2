from sys import argv, stdout
import sys
from urllib import request
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from pySmartDL import *
import re




def search(Ani):
    Search = (f"https://animekisa.tv/search?q={Ani}")
    req = Request(Search, headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()

    soup = BeautifulSoup(webpage,'lxml')

    images = soup.find_all('img',attrs={'src':True})

    for search in images:
        image_source=(f"https://animekisa.tv{search.attrs['src']}")
        Anime_names = image_source[35:].split(".",1)
        Anime_link = (f"https://animekisa.tv/{Anime_names[0]}")
        ### fuck regex
        s1=re.sub("[[;,']","",str(Anime_names))
        s2=s1.replace(" png.webp?117]","")
        s3=s2.replace("jpg.webp?117]","")
        s4=s3.replace("-"," ")
        s5=s4.replace("jpg?117]","")
        s6=s5.replace("png?117]","")
        s7=s6.replace("  "," ")
        #### pls some1...make dis shorter with regex
        print(s7)
  
        

search(Ani="naruto")
sys.stdout.flush()