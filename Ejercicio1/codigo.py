# las propiedades de números perfecto, defectivo y abundante son solo aplicables a naturales
# por ello lo primero que haremos será exigir tal condición
# si en la lista hay algun número que no sea entero, el programa dará error
# en el caso del 0 o de negativos, el programa indicará que tales números no son naturales

def tipo_num(lista):
    for i in lista:
        divisores=[]
        sumdiv=0
        if i<1:
            print (i,'no es natural')
        else: 
            for k in range(1,i-1): 
                if i%k==0:
                    divisores.append(k)
            for d in divisores:
                sumdiv+=d
            if i>sumdiv: print (i,'es defectivo')
            elif i<sumdiv: print (i,'es abundante')
            else: print (i, 'es perfecto')
