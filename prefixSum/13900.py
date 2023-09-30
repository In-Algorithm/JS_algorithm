n = int(input())
nums = list(map(int, input().split()))

total = sum(nums)
result = 0

for num in nums:
    total -= num
    result += num * total

print(result)
