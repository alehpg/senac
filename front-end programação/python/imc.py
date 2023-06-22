#entrada de dados

altura =  float(input("digite sua altura:"))
peso = float(input("digite seu peso:"))


#processamento de dados
imc = peso / (altura *altura)

#saída
print(imc)

if imc < 15:
    print('Muito magro')
elif imc < 18.5:
    print('Magreza Leve')
elif imc < 24.9:
    print('Peso Normal')
elif imc < 24.9:
    print('Peso Normal')
elif imc < 39.8:
    print('Obesidade I')
elif imc < 40:
    print('Obesidade II')
else:
    print('Obesidade III')