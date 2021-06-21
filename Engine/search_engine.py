from sys import argv, stdout
import sys
from urllib import request
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from pySmartDL import *



java_link = sys.argv[1]

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
        print(image_source)
  
        

search(Ani=java_link)
sys.stdout.flush()