
# set1 = {1,2,4,5,6,3}

# sets are simpler to list but they wont allowed duplicate if there is some duplicate value present then that is ignored

# print(set1)

# add a number to sets

# set1.add(7)

# print(set1)

# to remove a number from sets 

# set1.remove(number that you wanted to remove from sets)

# set1.remove(3)
# print(set1)

# this can also be done with the keyword discard

# set1.discard(value)

# in this we can also perform all sets operation like union intersection and etc

set2 = {1,2,4,5,6,3}
set3 = {3,2,13,2,42,1,6,4}

print(set2)
print(set3)

print(set2.intersection(set3))
#intersection can also be written as :
print(set2 & set3)

print(set2.union(set3))

# set difference

print(set2.difference(set3))



