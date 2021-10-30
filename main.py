import fandom

with open('list501', 'r') as l:
    pages_already = set(l.read().split(';'))


pages = list()
i = 0
while (i < 1000):
    for val in list(map(lambda x: x[0], fandom.random(10, "newworld", "en"))):
        pages.append(val)
    print(i)
    i = i + 1

pages = set(pages)
pages_final = pages.union(pages_already)
with open('list' + str(i), 'w') as f:
    list_of_strings = [str(s) for s in pages_final]
    joined_string = ";".join(list_of_strings)
    f.write(joined_string)
