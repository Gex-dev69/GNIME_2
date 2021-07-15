from pySmartDL import *
from pySmartDL.utils import progress_bar
import time
import os
import sys

url = "https://stackoverflow.com/questions/50789873/electron-javascript-detect-when-window-is-un-maximized"

dest = r'C:\Users\dgexi\OneDrive\Documents\Adobe'

obj = SmartDL(url, progress_bar=False, dest=dest)
obj.start(blocking=False)

while not obj.isFinished():
    pro = obj.get_progress()*100
    print("Progress: %d%%" % pro)



sys.stdout.flush()

