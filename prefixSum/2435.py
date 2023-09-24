n, k = map(int, input().split())
temps = list(map(int, input().split()))

# 연속된 k일 동안의 기온 합을 계산
sums = [sum(temps[i : i + k]) for i in range(n - k + 1)]

print(max(sums))
