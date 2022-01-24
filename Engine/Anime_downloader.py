
from sys import argv, stdout
import sys
from typing import final
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import re
from pySmartDL import *
from tkinter import filedialog
import os
import tkinter
import re
## THis shit better work

## https://anitop.vercel.app/api/v1/top-anime 
## use the above link for trending anime display

## Test for Repo

def start(url):
    #### Scrapper phase 1
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()

    soup = BeautifulSoup(webpage, "lxml")

    links = []
    top = tkinter.Tk()
    currdir = os.getcwd()
    top.withdraw()
    downdir = filedialog.askdirectory(parent=top, initialdir=currdir, title='Choose Download location Bitch')
    for link in soup.findAll('a'):
        links.append(link.get('href'))

        ## Episode Filter
    def Filter(datalist):
            return [val for val in datalist
                if re.search(r'episode', val)]
        #Download Link Filter
    def Filter2(datalist2):
            return [val2 for val2 in datalist2
            if re.search(r'gogo', val2)]
        #Mp4 Filter
    def Filter3(datalist3):
             return [val3 for val3 in datalist3
             if re.search('.mp4', val3)]

        ## This shit took me hourssssssss ffs
    for episode in Filter(links):
            # Download eps with specfic character Filter
        episodes = (f"https://animekisa.tv/{episode}")
        req2 = Request(episodes, headers={'User-Agent': 'Mozilla/5.0'})
        webpage2 = urlopen(req2).read()

        soup2 = BeautifulSoup(webpage2,"lxml")

        results2 = re.findall("https.*",str(soup2))

        low2 = Filter2(results2)
        s1=re.sub("[[;']","",str(low2))
        s2=re.sub('[]"]','',s1)

        try:
            req3 = Request(s2, headers={'User-Agent': 'Mozilla/5.0'})
            webpage3=urlopen(req3).read()

            soup3= BeautifulSoup(webpage3,"lxml")

            results3 = re.findall("https.*",str(soup3))

            low3=Filter3(results3)
            for x in low3:
                rel = re.findall("^https://storage.*mp4'",x)
                rel2 = Filter3(rel)
                s3=re.sub("[[;']","",str(rel2))
                s4=re.sub('[]"]','',s3)
                f1=re.findall("^http.*label:",s4)
                f2=re.findall("https://storage.*mp4",str(f1))
                f3=re.sub("[]'[]","",str(f2))
                
                   
 
                dest = downdir
                url= f3
                obj = SmartDL(url,dest)
                obj.start()
        except ValueError:
            pass

java_link = sys.argv[1]


start(url=java_link)
       
sys.stdout.flush()

