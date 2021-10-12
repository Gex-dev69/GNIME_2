from pytube import YouTube
from tkinter import filedialog
import tkinter
import os

class downloader():
    def get_path():
        top = tkinter.Tk()
        currdir = os.getcwd()
        top.withdraw()
        downdir = filedialog.askdirectory(parent=top, initialdir=currdir, title='Choose Download location Bitch')
        return downdir
    def start(link):
        yt=YouTube(str(link))
        yt.__init__(link)




downloader.start("https://www.youtube.com/watch?v=6ig2pUHw__0&ab_channel=cjaiye")

