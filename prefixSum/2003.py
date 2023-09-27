n, m = map(int, input().split())
nums = list(map(int, input().split()))

start, end = 0, 0
total = 0
count = 0

while True:
    if total >= m:
        total -= nums[start]
        start += 1
    elif end == n:
        break
    else:
        total += nums[end]
        end += 1

    if total == m:
        count += 1

print(count)
