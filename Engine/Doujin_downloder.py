import os
from hentai.hentai import Format,Hentai



def doujin(sauce):
    douji = Hentai(sauce)
    print(douji.title(Format.Pretty))
    print(douji.artist)
    print(douji.upload_date)
    print(douji.image_urls)
    douji.download(dest=r"C:\Users\dgexi\OneDrive\Documents\Adobe\New folder",progressbar=True)

doujin(177013)