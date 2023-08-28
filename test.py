import time
start_time = time.time()
answer= 0
for i in range(1,11):
    answer+=i

print(answer)

end_time = time.time()
print(end_time-start_time)