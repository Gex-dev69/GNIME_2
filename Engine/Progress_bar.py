from pySmartDL import *
from pySmartDL.utils import progress_bar
import time
import os

url = "https://fvs.io/redirector?token=ZE5pYXRrdHBqUVJzNUF2RkRPclVtSjJ2TXEzVE92VytuQlNVZ0dWZ1dNK3lyTm1obzdDY3RFZDBzZjFtL1BhY3RoQVVWYzB1RUp1cWZjUStRc0d6ZUVrUldhM09QcnE5dnFOM2dYTEJQd2JXVVpqNkJMVldkbWZPMlBpcUV3V1VvQVIzZmNvNHJHMis0Sld6U2hqZ0xFSFp4STBsdXVJT25RPT06OXhHQ09KNi81Q0dRUTBHLzYwZTVPZz09"

dest = r'C:\Users\dgexi\OneDrive\Documents\Adobe'

obj = SmartDL(url, progress_bar=False, dest=dest)
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
