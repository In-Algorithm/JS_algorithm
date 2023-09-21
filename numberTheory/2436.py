a, b = map(int, input().split())


def _gcd(a, b):
    while a % b != 0:
        temp = a % b
        a = b
        b = temp
    return b


def _lcm(a, b):
    return a * b // _gcd(a, b)


print(b // a)
