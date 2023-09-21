N = int(input())
checkers = [tuple(map(int, input().split())) for _ in range(N)]

def calculate_distance(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def total_distance(target, checkers):
    return sum(calculate_distance(target, checker) for checker in checkers)

result = []
for k in range(1, N + 1):
    min_distance = float('inf')
    for target in checkers:
        distances = sorted([calculate_distance(target, checker) for checker in checkers])
        min_distance = min(min_distance, sum(distances[:k]))
    result.append(min_distance)

print(" ".join(map(str, result)))
