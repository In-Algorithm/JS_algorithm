def counting_star(N):
    matrix = []
    for i in range(3 * len(N)):
        if i // len(N) == 1:
            matrix.append(N[i % len(N)] + " " * len(N) + N[i % len(N)])
        else:
            matrix.append(N[i % len(N)] * 3)
    return list(matrix)


star = ["***", "* *", "***"]
N = int(input())
k = 0

while N != 3:
    N = int(N / 3)
    k += 1

for i in range(k):
    star = counting_star(star)

for i in star:
    print(i)
