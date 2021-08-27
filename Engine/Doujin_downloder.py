
import os
import sys
import tkinter
from tkinter import filedialog

from hentai.hentai import Format, Hentai

java_sauce = sys.argv[1]

def doujin(sauce):
    douji = Hentai(sauce)
    top = tkinter.Tk()
    currdir = os.getcwd()
    top.withdraw()
    downdir = filedialog.askdirectory(parent=top, initialdir=currdir, title='Choose Download location Bitch')
    douji.download(dest=downdir,folder=douji.title(Format.Pretty),progressbar=True)
    print("yo mama")

    





doujin(java_sauce)

sys.stdout.flush()
