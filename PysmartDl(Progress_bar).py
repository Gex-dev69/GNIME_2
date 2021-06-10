from pySmartDL import *
from pySmartDL.utils import progress_bar
import time
import os

url = 'https://storage.googleapis.com/probable-maker-315004/H672SY2H3J_L/22a_1623308493_163041.mp4'

dest= r'C:\Users\dgexi\OneDrive\Documents\Adobe'

obj = SmartDL(url, progress_bar=False,dest=dest)
obj.start(blocking=False)

while not obj.isFinished():
        print("Speed: %s" % obj.get_speed(human=True))
        print("Already downloaded: %s" % obj.get_dl_size(human=True))
        print("Eta: %s" % obj.get_eta(human=True))
        pro = obj.get_progress()*100
        print("Progress: %d%%" % pro)
        print("Progress bar: %s" % obj.get_progress_bar())
        print("Status: %s" % obj.get_status())
        print("\n"*2+"="*50+"\n"*2)
        time.sleep(0.2)
        if pro != 100:
                os.system('cls')
        

if obj.isSuccessful():
        print("downloaded file to '%s'" % obj.get_dest())
        print("download task took %ss" % obj.get_dl_time(human=True))
        print("File hashes:")
        print(" * MD5: %s" % obj.get_data_hash('md5'))
        print(" * SHA1: %s" % obj.get_data_hash('sha1'))
        print(" * SHA256: %s" % obj.get_data_hash('sha256'))
else:
        print("There were some errors:")
        for e in obj.get_errors():
                print(str(e))