
# http_requests = 200

# match http_requests :
#     case 200  | 201:
#         print("Success")
#     case 400 :
#         print("Bad Requests")
#     case 500 :
#         print("Server Error")
#     case _ :
#         print("Unknow")


# str = "Lopping"

# for i in str :
#     print(i)
    
# l = [212,"Mukul",'a',3.121,"Dahiya"]

# for index,item in enumerate(l) :
#     print(index,item)

import time


start_time = time.time()

l = [212,"Mukul",'a',3.121,"Dahiya"]

for index,item in enumerate(l) :
    print(index,item)
    
print(round((time.time() - start_time),4))