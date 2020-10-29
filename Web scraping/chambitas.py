from bs4 import BeautifulSoup
import requests
import json
import re

def write_json(data, filename='trabajos.json'): 
    with open(filename,'w') as f: 
        json.dump(data, f, indent=4, ensure_ascii=False) 
      
      
with open('trabajos.json') as json_file: 
    data = json.load(json_file) 
    temp = data['trabajos'] 

#Enlace para obtener trabajos
source = requests.get('https://www.computrabajo.com.pe/empleos-en-arequipa-jornada-medio-tiempo').text

soup = BeautifulSoup(source, 'lxml')

#file1 = open('dochtml.txt','w')
#file1.write(soup.body.prettify())
#file1.close()

#obtener url de trabajo
cajas = soup.find_all('div', class_='bRS')

#trabajos de manera individual
#caja = cajas[1]
for caja in cajas:
    url_id=caja.find("a")["href"]
    url_trabajo = 'https://www.computrabajo.com.pe' + url_id

    t_pagina = requests.get(url_trabajo).text
    trab_soup = BeautifulSoup(t_pagina, 'lxml')

    #caja de resumen
    #####resumen_t = trab_soup.find('section', class_='box_r').find_all('li')
    resumen_t = trab_soup.find('section', class_='box_r').find('ul')
    ####titulo_t = resumen_t[0].p.text.strip()
    titulo_t = resumen_t.find_all('li')[0].p.text.strip()
    ####empresa_t = resumen_t[1].p.a.text.strip()
    try:
        empresa_t = resumen_t.find("h3", string=re.compile("Empresa")).find_next_siblings()[0].a.text
    except Exception as e:
        empresa_t = "No especifica"

    ####contrato_t = resumen_t[4].p.text.strip()
    contrato_t = resumen_t.find("h3", string=re.compile("Tipo de contrato")).find_next_siblings()[0].text.strip()
    ####salario_t = resumen_t[5].p.text.strip()
    salario_t = resumen_t.find("h3", string=re.compile("Salario")).find_next_siblings()[0].text.strip()

    #detalles y requisitos
    detalles_t = trab_soup.find('div', class_='bWord').find('ul')
    descrip_t = detalles_t.find_all('li')[1].get_text(separator="\n").strip()
    req_t = detalles_t.select("h3 ~ li")
    req_ed = req_t[0].text
    req_exp = req_t[1].text

    #formato json
    tr_json = {
                    "nombre":titulo_t,
                    "empresa":empresa_t,
                    "tipo":contrato_t,
                    "salario":salario_t,
                    "requisitos":{
                    "educacion":req_ed,
                    "experiencia":req_exp},
                    "descripcion":descrip_t
                }
    print(tr_json)
    temp.append(tr_json)


write_json(data)
print("TERMINADO CON EXITO")
