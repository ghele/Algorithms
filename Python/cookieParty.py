// This problem was proposed a the Week of Code 22 contest (https://www.hackerrank.com/contests/w22/challenges/cookie-party).


#!/bin/python
import sys
import math

def checkCookies(guests, cookies):
    if((guests >= 1 and guests <= math.pow(10, 9)) and (cookies >= 1 and cookies <= math.pow(10, 9))):
        if(guests == cookies):   # check if the number of cookies/number of attending people ratio
            return 0;
        if(guests < cookies):
            if(cookies%guests==0):
                return 0;
            else:
                number = math.ceil(cookies / guests)
                return int(number * guests - cookies)
        if(guests > cookies):
            return guests - cookies
    else:
        return 0;

n,m = raw_input().strip().split(' ')
n,m = [int(n),int(m)]
print checkCookies(n, m)
