n = 10  # 버섯의 개수는 항상 10개입니다.
mushrooms = [int(input()) for _ in range(n)]

total = 0
for i in range(n):
    # 현재 버섯을 먹은 경우의 점수를 계산
    if abs(100 - total) >= abs(100 - (total + mushrooms[i])):
        total += mushrooms[i]
    else:
        break

print(total)
