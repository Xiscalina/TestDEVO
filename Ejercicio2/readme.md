Dados 3 juegos de datos, se solicita que se cree una página web que mediante ajax lea las 3 fuentes de datos y muestre 2 gráficas de highcharts, una gráfica de líneas con la fecha en eje x y tantas series como categorías, y un pie chart por categoría agrupando los datos totales (sumatorio de los valores de cada categoría).
Las fuentes tienen información temporal una fecha, categoría y un valor. Se deben combinar las series de tal modo que si en más de una serie para una misma fecha y categoría hay datos estos se sumarán. Las categorías deberán normalizarse para que todas estén en mayúsculas, “Cat 1” y “cat 1” son equivalentes a “CAT 1”
La serie 1 tiene datos en el siguiente formato:
{"d":1435708800000,"cat":"Cat 1","value":832.803815816826}
donde d es la fecha en milisegundos, cat es la categoría y value el valor Está accesible en http://s3.amazonaws.com/logtrust-static/test/test/data1.json
La serie 2 tiene datos en el siguiente formato:
{"myDate":"2015-06-02","categ":"CAT 1","val":46.300059172697175}
donde mydate es fecha en formato YYYY-MM-DD categ es la categoría y val el valor Está accesible en http://s3.amazonaws.com/logtrust-static/test/test/data2.json
La serie 3 tiene datos en el siguiente formato:
{"raw":"9OHbc9 O1 WHTxiBPa auwZIVD6 j8jMWWVH UdB6hy 2015-06-18 XF 5xhcx15DD sbYFRPn dyoH1OOIF 6meHw pANknwa2h T imhs24gR5 #cat 1#","val":39.38690127513058}
donde raw contiene datos en raw con palabras la fecha en formato YYYY-MM-DD y la categoría entre #, se deberá hacer un procesado del raw para sacar la categoría y la fecha. val es el valor. En el ejemplo la fecha sería 2015-06-18 y categoría normalizada CAT 1. Está accesible en http://s3.amazonaws.com/logtrust-static/test/test/data3.json
Se permite el uso de librerías para la resolución del problema.
