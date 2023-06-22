preçoAlcool = float(input("Insira o valor do alcool:"))
preçoGasolina = float(input("Insira o valora da gasolina:"))

resultado = preçoAlcool / preçoGasolina
print(resultado)

if resultado > 0.7:
    print("abasteça com gasolina")
else:
    print("Abasteça com alcool")

