#Entrada de dados
nota1 = float(input("digite sua primeira nota:"))
nota2 = float(input('digite sua segunda nota:'))
nota3 = float(input('digite sua terceira nota:'))
nota4 = float(input('digite sua quarta nota:'))

#Processamento dos dados
media = (nota1 + nota2 + nota3 + nota4) /4 

#saida 
print("A nota final é:",media)
if media < 60:
    print('O aluno esta REPROVADO!')
elif media < 70:
    print('O aluno teve um resultado MEDIANO!')
elif media < 80:
    print('O aluno teve um resultado MUITO BOM!')
else:
    print('O aluno foi EXECELENTE!')
