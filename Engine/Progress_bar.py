from pySmartDL import *
from pySmartDL.utils import progress_bar
import time
import os
import sys

url = "https://fvs.io/redirector?token=a1I2V2Z2TWtnOWUrS0xOK0JpK1FxNGo5UStjYlRmTXBFMWR1aXJSbWhHSmFxNGZ4S0ZKVGpWN291YnN4N0lvMkJCZFBHV1ZsakEzak5FSGpjaUVibkhRakxyTit6bERkWjdZcmFtajB2d29IN3JjU2ZYMUI5eGFpU3ZBQnY4eG9xSUMydDVoN2RmcjJvSVhDTG5HNFdrcjNaRmFZWDdROWt2Q0Q6SWF6WmcwbkhvK1BWSElGNnhXMDhHZz09"

dest = r'C:\Users\dgexi\OneDrive\Documents\Adobe'

obj = SmartDL(url, progress_bar=False, dest=dest)
obj.start(blocking=False)

while not obj.isFinished():
    pro = obj.get_progress()*100
    print("Progress: %d%%" % pro)
    os.system("cls")


if obj.isSuccessful():
    print("downloaded file to '%s'" % obj.get_dest())
    print("download task took %ss" % obj.get_dl_time(human=True))
    print("File hashes:")
    print(" * MD5: %s" % obj.get_data_hash('md5'))
    print(" * SHA1: %s" % obj.get_data_hash('sha1'))
    print(" * SHA256: %s" % obj.get_data_hash('sha256'))
