
import os
import sys
import tkinter
from tkinter import filedialog
from pySmartDL import SmartDL
from hentai.hentai import Format, Hentai
import time

#java_sauce = sys.argv[1]


def doujin(sauce):
    douji = Hentai(sauce)
    top = tkinter.Tk()
    currdir = os.getcwd()
    top.withdraw()
    downdir = filedialog.askdirectory(
    parent=top, initialdir=currdir, title='Choose Download location Bitch')
    for urls in douji.image_urls:
        links = [urls]
    obj = SmartDL(links, downdir)
    #obj.start()
    print(links)
        

doujin(177013)

sys.stdout.flush()
