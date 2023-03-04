from ast import Delete


dic1 = { 
        1 : 'coffe',
        3 : 'Tea',
        5 : "Chai",
        'chiza' : "kurkure"
}
# print(dic1)

# If you wanted to modify the data or add new data in the dictionary

# dic1[name of key] = value that you wanted to store in that 

# dic1[6] = "Chai Patti"

# print(dic1)

# delete a key value or properties from dictionary 

# del dic1[key that you wanted to Delete]

# del dic1[5]

# print(dic1)

# traverse in dictionary

# for x in dic1 :
#     print(x,dic1[x],sep=" = ")

# one more for both item and value

for key,value in dic1.items() :
    print(str(key) + " : " + str(value))

