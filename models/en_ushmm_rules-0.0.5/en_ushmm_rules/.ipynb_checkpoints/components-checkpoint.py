import spacy
from spacy.util import filter_spans
from spacy.tokens import Span
from spacy.language import Language
import re
import pandas as pd

ships_pattern = r"((S.S. |SS |The )*(Lieutenant Colonel James Barker|General Hosey|Pan Crescent|Marilyn Marlene|Winnipeg|Ile de France|Scythia|Aquitania|Empress of Britain|General A. W. Greely|General J. H. McRae|Empress of Scotland|General T. H. Bliss|New Amsterdam|Niagara|Henry Gibbs|Serpa Pinto|Mauretania|Cabo de Hornos|Julius Caesar|Ben Hecht|Sțrumah|Strumah|General Harry Taylor|General W.P. Richardson|Marine Jumper|Simon Bolivar|Pan York|Mauretania|Orduña|Wilhelm Gustloff|Orduna|General W.H. Gordon|Rakuyō Maru|Rakuyo Maru|Mouzinho|Saturnia|St. Louis|Saint Louis|Nyassa|Simon Bolivar|Queen Elizabeth|Exodus 1947|Dunera|Cap Arcona|Ernie Pyle|Hayim Arlozorov|Patria))"
@Language.component("find_ships")
def find_ships(doc):
    text = doc.text
    new_ents = []
    original_ents = list(doc.ents)
    nautical = ["ship", "boat", "sail", "captain", "sea", "harbor", "aboard", "adamiral", "liner"]
    for match in re.finditer(ships_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        context = text[start-100:end+100]
        if any(term in context.lower() for term in nautical):
            if span is not None:
                new_ents.append((span.start, span.end, span.text))
            else:
                span = doc.char_span(start, end-1)
                if span is not None:
                    new_ents.append((span.start, span.end-1, span.text))
    for ent in new_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="SHIP")
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)



###GHETTO###
ghetto_pattern = r"(Anykščiai|Arad|Ashmiany|Babruĭsk|Balassagyarmat|Baranavichy|Barysaŭ|Będzin|Bełżyce|Berdychiv|Berehove|Berestechko|Berezdiv|Berezhany|Berezne|Bershad'|Biała Podlaska|Birkenau|Biała Rawska|Białystok|Biaroza|Bibrka|Bielsko-Biała|Biržai|Bitola|Blazhiv|Bobowa|Bochnia|Bolekhiv|Borshchuv|Boryslav|Boskovice|Brańsk|Bratslav|Brody|Brzesko|Buczacz|Budapest|Bus'k|Bychawa|Chashniki|Chrzanów|Ciechanów|Cieszanów|Cristuru Secuiesc|Czernowitz|Częstochowa|Czortków|Dąbrowa Górnicza|Dąbrowa Tarnowska|Damashėvichy|Daugavpils|Dokshytsy|Dombóvár|Dombrowa|Drohobycz|Drzewica|Dubrovytsia|Dzialoszyce|Dziarechyn|Dziatlava|Glebokie|Gol'shany|Góra Kalwaria|Gorodnaia|Gostynin|Gyöngyös|Hajdúszoboszló|Halushchyntsi|Halych|Hantsavichy|Haradnaia|Hatvan|Hlusk|Hlyniany|Homel'|Horodenka|Horokhiv|Hradzianka|Hrodna|Hvizdets'|Iaktoriv|Izbica Lubelska|Józefów|Kalisz|Kałuszyn|Kam'iane Pole|Kamin'-Kashyrs'kyĭ|Katowice|Kecskemét|Kelme|Kharkiv|Khmel'nyts'ka oblast'|Khmel'nyts'kyĭ|Khust|Kielce|Kisvárda|Kletsk|Kobryn|Kolbuszowa|Kolozsvár|Komarów-Osada|Kopychyntsi|Korets'|Košice|Kőszeg|Kovel'|Kozienice|Kraków|Kraśnik|Kretinga|Krośniewice|Krymne|Kryzhopil'|Kul'chyny|Kunhegyes|Kutno|Kysylyn|Ladyzhyn|Lakhva|Lask|Lęczyca|Lesko|Lida|Liepāja|Lipinki|Lithakia|Litin|Litzmannstadt|Liubavichi|Łomża|Lubaczów|Lubartów|Lublin|Łuck|Lwów|Lyubcha|Mahiliou|Maków Mazowiecki|Marcinkonys|Matejovce nad Hornádom|Mátészalka|Miechów|Międzyrzec Podlaski|Minsk|Mir|Miskolc|Modliborzyce|Mogilev|Monastyrok|Monor|Munkács|Nadvirna|Nagyvárad|Navahrudak|Novomyrhorod|Nowy Sącz|Nyíregyháza|Odessa|Oleyëvo-Korolëvka|Opatów|Opoczno|Opole|Opole Lubelskie|Orla|Orsha|Ostroh|Ostrowiec Świętokrzyski|Otwock|Ozarintsy|Ozorków|Pabianice|Papul|Parichi|Pechera|Pinsk|Piotrków Trybunalski|Płaszów|Płock|Plońsk|Praszka|Prienai|Prużana|Pruzhany|Przemyśl|Pułtusk|Radom|Radomyśl Wielki|Radun'|Rava-Rus'ka|Rawa Mazowiecka|Reghin|Ribnița|Riga|Rohatyn|Romanove Selo|Rozhyshche|Rudky|Rudnik nad Sanem|Rzeszów|Saharna|Šahy|Salgótarján|Sarny|Sátoraljaújhely|Schwientochlowitz|Senkevychivka|Sernyky|Sharhorod|Shchyrets'|Shepetivka|Shpola|Shumilino|Šiauliai|Siedlce|Siedliszcze|Sieradz|Sighetu Marmației|Skalat|Slobodka|Slonim|Slutsk|Smolensk|Sokołów Podlaski|Sokyrnytsia|Solotvyno|Soroca|Sosnowiec|Stalovichy|Stanislav|Stara Mohylʹnytsia|Starachowice|Starokostiantyniv|Stary Sącz|Stepan'|Stoczek Lukowski|Stolbëisy|Stolin|Sucha|Suchowola|Surazh|Švenčionys|Szarvas|Szczebrzeszyn|Szeged|Szolnok|Tarnogród|Tarnów|Telšiai|Terebovlia|Ternopol|Theresienstadt|Thessalonike|Timkovichi|Tlumach|Tolna|Tomaszów Mazowiecki|Torchyn|Trakai|Trebíč|Trnava|Tul'chyn|Tuliszków|Tyvriv|Uzda|Uzhhorod|Vác|Valozhyn|Velizh|Velykyĭ Bereznyĭ|Vilna|Vinnytsia|Vlonia|Volodymyr-Volyns'kyi|Vysokovskiy Rayon|Warka|Warsaw|Wisznice|Wrocław|Žagarė|Zamość|Zarichne|Zboriv|Zduńska Wola|Zhmerinka|Zhytomyr|Žiežmariai|Anyksciai|Arad|Ashmiany|Babruisk|Balassagyarmat|Baranavichy|Barysau|Bedzin|Bełzyce|Berdychiv|Berehove|Berestechko|Berezdiv|Berezhany|Berezne|Bershad'|Biała Podlaska|Biała Rawska|Białystok|Biaroza|Bibrka|Bielsko-Biała|Birzai|Bitola|Blazhiv|Bobowa|Bochnia|Bolekhiv|Borshchuv|Boryslav|Boskovice|Bransk|Bratslav|Brody|Brzesko|Buczacz|Budapest|Bus'k|Bychawa|Chashniki|Chrzanow|Ciechanow|Cieszanow|Cristuru Secuiesc|Czernowitz|Czestochowa|Czortkow|Dabrowa Gornicza|Dabrowa Tarnowska|Damashevichy|Daugavpils|Dokshytsy|Dombovar|Dombrowa|Drohobycz|Drzewica|Dubrovytsia|Dzialoszyce|Dziarechyn|Dziatlava|Glebokie|Gol'shany|Gora Kalwaria|Gorodnaia|Gostynin|Gyongyos|Hajduszoboszlo|Halushchyntsi|Halych|Hantsavichy|Haradnaia|Hatvan|Hlusk|Hlyniany|Homel'|Horodenka|Horokhiv|Hradzianka|Hrodna|Hvizdets'|Iaktoriv|Izbica Lubelska|Jozefow|Kalisz|Kałuszyn|Kam'iane Pole|Kamin'-Kashyrs'kyi|Katowice|Kecskemet|Kelme|Kharkiv|Khmel'nyts'ka oblast'|Khmel'nyts'kyi|Khust|Kielce|Kisvarda|Kletsk|Kobryn|Kolbuszowa|Kolozsvar|Komarow-Osada|Kopychyntsi|Korets'|Kosice|Koszeg|Kovel'|Kozienice|Krakow|Krasnik|Kretinga|Krosniewice|Krymne|Kryzhopil'|Kul'chyny|Kunhegyes|Kutno|Kysylyn|Ladyzhyn|Lakhva|Lask|Leczyca|Lesko|Lida|Liepaja|Lipinki|Lithakia|Litin|Litzmannstadt|Liubavichi|Łomza|Lubaczow|Lubartow|Lublin|Łuck|Lwow|Lyubcha|Mahiliou|Makow Mazowiecki|Marcinkonys|Matejovce nad Hornadom|Mateszalka|Miechow|Miedzyrzec Podlaski|Minsk|Mir|Miskolc|Modliborzyce|Mogilev|Monastyrok|Monor|Munkacs|Nadvirna|Nagyvarad|Navahrudak|Novomyrhorod|Nowy Sacz|Nyiregyhaza|Odessa|Oleyevo-Korolevka|Opatow|Opoczno|Opole|Opole Lubelskie|Orla|Orsha|Ostroh|Ostrowiec Swietokrzyski|Otwock|Ozarintsy|Ozorkow|Pabianice|Papul|Parichi|Pechera|Pinsk|Piotrkow Trybunalski|Płaszow|Płock|Plonsk|Praszka|Prienai|Pruzana|Pruzhany|Przemysl|Pułtusk|Radom|Radomysl Wielki|Radun'|Rava-Rus'ka|Rawa Mazowiecka|Reghin|Ribnita|Riga|Rohatyn|Romanove Selo|Rozhyshche|Rudky|Rudnik nad Sanem|Rzeszow|Saharna|Sahy|Salgotarjan|Sarny|Satoraljaujhely|Senkevychivka|Sernyky|Sharhorod|Shchyrets'|Shepetivka|Shpola|Shumilino|Siauliai|Siedlce|Siedliszcze|Sieradz|Sighetu Marmatiei|Skalat|Slobodka|Slonim|Slutsk|Smolensk|Sokołow Podlaski|Sokyrnytsia|Solotvyno|Soroca|Sosnowiec|Stalovichy|Stanislav|Stara Mohylʹnytsia|Starachowice|Starokostiantyniv|Stary Sacz|Stepan'|Stoczek Lukowski|Stolbeisy|Stolin|Sucha|Suchowola|Surazh|Svencionys|Szarvas|Szczebrzeszyn|Szeged|Szolnok|Tarnogrod|Tarnow|Telsiai|Terebovlia|Ternopol|Theresienstadt|Thessalonike|Timkovichi|Tlumach|Tolna|Tomaszow Mazowiecki|Torchyn|Trakai|Trebic|Trnava|Tul'chyn|Tuliszkow|Tyvriv|Uzda|Uzhhorod|Vac|Valozhyn|Velizh|Velykyi Bereznyi|Vilna|Vinnytsia|Vlonia|Volodymyr-Volyns'kyi|Vysokovskiy Rayon|Warka|Warsaw|Wisznice|Wrocław|Zagare|Zamosc|Zarichne|Zboriv|Zdunska Wola|Zhmerinka|Zhytomyr|Ziezmariai)"
@Language.component("find_ghettos")
def find_ghettos(doc):
    text = doc.text
    ghetto_ents = []
    gpe_ents = []
    original_ents = list(doc.ents)
    for match in re.finditer(ghetto_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        context = text[start-25:end+25]
        if "ghetto" in context.lower():
            if span is not None:
                ghetto_ents.append((span.start, span.end, span.text))
                
        else:
            if span is not None:
                gpe_ents.append((span.start, span.end, span.text))
    for ent in ghetto_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="GHETTO")
        original_ents.append(per_ent)
    for ent in gpe_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="GPE")
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)

###PERSON###
people_pattern = r"((((Mr|Mrs|Miss|Dr|Col|Adm|Lt|Cap|Cpt|Fr|Cl|Cln|Sgt)\.)|(President|Rabbi|Queen|Prince|Princess|Pope|Father|Bishop|King|Cardinal|General|Liutenant|Colonel|Lieutenant Colonel|Private|Admiral|Captain|Sergeant|Sergeant First Class|Staff Sergeant|Sergeant Major|Corp Sergeant Major|Field Sergeant|Technical Sergeant|Corporal|Lance Corporal|Ensign|2nd Lieutenant|1st Lieutenant|Major|Hauptmann|Staff Captain|Oberst|Oberstlieutenant)) (?:[A-Z]\w+[ -]?)+)(the [A-Z]\w*|I\w*|X\w*|v\w*)*"
@Language.component("find_people")
def find_people(doc):
    text = doc.text
    match_ents = []
    original_ents = list(doc.ents)
    for match in re.finditer(people_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        if span is not None:
            match_ents.append((span.start, span.end, span.text))
                
        else:
            span = doc.char_span(start, end-1)
            if span is not None:
                match_ents.append((span.start, span.end, span.text))

    for ent in match_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="PERSON")
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)

###SPOUSAL###
spousal_pattern = r"((Mr|Mrs|Miss|Dr)(\.)* and (Mr|Mrs|Miss|Dr)(\.)* (?:[A-Z]\w+[ -]?)+)"
@Language.component("find_spousal")
def find_spousal(doc):
    text = doc.text
    new_ents = []
    original_ents = list(doc.ents)
    for match in re.finditer(spousal_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        if span is not None:
            new_ents.append((span.start, span.end, span.text))
        else:
            span = doc.char_span(start, end-1)
            if span is not None:
                new_ents.append((span.start, span.end-1, span.text))
    for ent in new_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="SPOUSAL")
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)

###CAMP GETTERS###
def subcamp_getter(hit):
    hit = hit.text
    df = pd.read_csv("data/hgc_data.csv")
    subcamps = df.Main.tolist()
    camps = df.SubcampMattingly.tolist()
    i=0
    potential = []
    for c in camps:
        
        try:
            all_c = c.split("^")
            for c in all_c:
                c = c.replace("\(", "(").replace("\)", ")")
#                 if c == "Buna-Monowitz (Auschwitz III)":
#                     print (c)
                if hit.strip() == c.strip():
#                     print (hit, c)
                    if subcamps[i] not in potential:
                        potential.append(subcamps[i])
        except:
            AttributeError
        i=i+1
    return (potential)

def date_open_getter(hit):
    hit = hit.text
    df = pd.read_csv("data/hgc_data.csv")
    dates = df.Date_Open.tolist()
    camps = df.SubcampMattingly.tolist()
    i=0
    potential = []
    for c in camps:
        
        try:
            all_c = c.split("^")
            for c in all_c:
                if hit == c:
                    if dates[i] not in potential:
                        potential.append(dates[i])
        except:
            AttributeError
        i=i+1
    return (potential)

def date_closed_getter(hit):
    hit = hit.text
    df = pd.read_csv("data/hgc_data.csv")
    dates = df.Date_Close.tolist()
    camps = df.SubcampMattingly.tolist()
    i=0
    potential = []
    for c in camps:
        try:
            all_c = c.split("^")
            for c in all_c:
                if hit == c:
                    if dates[i] not in potential:
                        potential.append(dates[i])
        except:
            AttributeError
        i=i+1
    return (potential)

def latlong_getter(hit):
    hit = hit.text
    df = pd.read_csv("data/hgc_data.csv")
    lats = df.LAT.tolist()
    longs = df.LONG.tolist()
    camps = df.SubcampMattingly.tolist()
    i=0
    potential = []
    for c in camps:
        
        try:
            all_c = c.split("^")
            for c in all_c:
                if hit == c:
                    if lats[i] not in potential:
                        potential.append((lats[i], longs[i]))
        except:
            AttributeError
        i=i+1
    return (potential)

def hgc_id_getter(hit):
    hit = hit.text
    df = pd.read_csv("data/hgc_data.csv")
    ids = df.HGC_ID.tolist()
    camps = df.SubcampMattingly.tolist()
    i=0
    potential = []
    for c in camps:
        
        try:
            all_c = c.split("^")
            for c in all_c:
                if hit == c:
                    if ids[i] not in potential:
                        potential.append(ids[i])
        except:
            AttributeError
        i=i+1
    return (potential)

###CAMP##
df = pd.read_csv("data/hgc_data.csv")
camps = df.SubcampMattingly.tolist()
subcamps = df.Main.tolist()
i=0
final_camps = []
for c in camps:
    if c != "nan" and c != "FALSE":
        if subcamps[i] != "nan" and subcamps[i] != "FALSE":
            try:
                if c.split()[0] != "":
                    c=c.replace("*", "")
                    for item in c.split("^"):
                        final_camps.append(item.replace("(", "\(").replace(")", "\)").strip())
            except:
                AttributeError
    i=i+1
    
final_camps.sort(key=len, reverse=True)
final_list = "|".join(final_camps)
strict_camps_pattern = r"("+final_list+")"
# print (strict_camps_pattern)
@Language.component("find_camps_strict")
def find_camps_strict(doc):
    text = doc.text
    camp_ents = []
    original_ents = list(doc.ents)
    context_terms = ["camp", "concentration", "labor", "forced"]
    for match in re.finditer(strict_camps_pattern, doc.text):
#         print (match)
        start, end = match.span()
        span = doc.char_span(start, end)
        context = text[start-100:end+100]
        if any(term in context.lower() for term in context_terms):
            if span is not None:
#                 print (span)
                camp_ents.append((span.start, span.end, span.text))
    for ent in camp_ents:
#         print (ent)
        start, end, name = ent
        per_ent = Span(doc, start, end, label="CAMP")
        per_ent.set_extension("subcamp", getter=subcamp_getter, force=True)
        per_ent.set_extension("date_open", getter=date_open_getter, force=True)
        per_ent.set_extension("date_closed", getter=date_closed_getter, force=True)
        per_ent.set_extension("latlong", getter=latlong_getter, force=True)
        per_ent.set_extension("hgc_id", getter=hgc_id_getter, force=True)
        
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)

###REVOLTUIONARY GROUPS###
groups_pattern = r"(Ethnikon Apeleutherotikon Metopon|Weisse Rose|Rote Kapelle|Affiche rouge|Edelweisspiraten|White Rose|Bielski|Nekamah|Voroshilov|OEuvre de secours aux enfants|Union des juifs pour la résistance et l'entraide|Zorin Unit|Komsomolski|Fareynikte|Korzh|Zhukov|Budenny|Parkhomenko|Sixième)((-)*[A-Z]\S+)*( (Brigade|brothers|group))*"
@Language.component("find_groups")
def find_groups(doc):
    text = doc.text
    camp_ents = []
    original_ents = list(doc.ents)
    for match in re.finditer(groups_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        if span is not None:
            camp_ents.append((span.start, span.end, span.text))
    for ent in camp_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="GROUP")
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)

###PLACE###
city_pattern = r"(?:[A-Z]\w+[ -]?)+, (Germany|Poland|England|Russia|Italy|USA|U.S.A.|United States|United States of America|America|United Kingdom|France|Spain|Ukraine|Romania|Netherlands|Belgium|Greece|Portugal|Sweden|Hungary|Austria|Belarus|Serbia|Switzerland|Bulgaria|Denmark|Finland|Slovakia|Norway|Ireland|Croatia|Moldova|Bosnia|Albania|Estonia|Malta|Iceland|Andorra|Luxembourg|Montenegro|Macedonia|San Marino|Lichtenstein|Monaco)"
country_pattern = r"(Germany|Poland|England|Russia|Italy|USA|U.S.A.|United States|United States of America|America|United Kingdom|France|Spain|Ukraine|Romania|Netherlands|Belgium|Greece|Portugal|Sweden|Hungary|Austria|Belarus|Serbia|Switzerland|Bulgaria|Denmark|Finland|Slovakia|Norway|Ireland|Croatia|Moldova|Bosnia|Albania|Estonia|Malta|Iceland|Andorra|Luxembourg|Montenegro|Macedonia|San Marino|Lichtenstein|Monaco)"
@Language.component("find_places")
def find_places(doc):
    text = doc.text
    new_ents = []
    original_ents = list(doc.ents)
    for match in re.finditer(city_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        if span is not None:
            new_ents.append((span.start, span.end, span.text))
        else:
            span = doc.char_span(start, end-1)
            if span is not None:
                new_ents.append((span.start, span.end-1, span.text))
    for ent in new_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="CITY")
        if per_ent.text.split(",")[0] not in city_pattern:
            original_ents.append(per_ent)
            
    for match in re.finditer(country_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        if span is not None:
            new_ents.append((span.start, span.end, span.text))
        else:
            span = doc.char_span(start, end-1)
            if span is not None:
                new_ents.append((span.start, span.end-1, span.text))
    for ent in new_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="COUNTRY")
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)

###GEOGRAPHY###
general_pattern = r"([A-Z]\w+) (River|Mountain|Mountains|Forest|Forests|Sea|Ocean)*"
river_pattern = "(the|The) (Rhone|Volga|Danube|Ural|Dnieper|Don|Pechora|Kama|Oka|Belaya|Dniester|Rhine|Desna|Elbe|Donets|Vistula|Tagus|Daugava|Loire|Tisza|Ebro|Prut|Neman|Sava|Meuse|Kuban River|Douro|Mezen|Oder|Guadiana|Rhône|Kuma|Warta|Seine|Mureș|Northern Dvina|Vychegda|Drava|Po|Guadalquivir|Bolshoy Uzen|Siret|Maly Uzen|Terek|Olt|Vashka|Glomma|Garonne|Usa|Kemijoki|Great Morava|Moselle|Main 525|Torne|Dalälven|Inn|Maritsa|Marne|Neris|Júcar|Dordogne|Saône|Ume|Mur|Ångerman|Klarälven|Lule|Gauja|Weser|Kalix|Vindel River|Ljusnan|Indalsälven|Vltava|Ponoy|Ialomița|Onega|Somes|Struma|Adige|Skellefte|Tiber|Vah|Pite|Faxälven|Vardar|Shannon|Charente|Iskar|Tundzha|Ems|Tana|Scheldt|Timiș|Genil|Severn|Morava|Luga|Argeș|Ljungan|Minho|Venta|Thames|Drina|Jiu|Drin|Segura|Torne|Osam|Arda|Yantra|Kamchiya|Mesta)"
@Language.component("find_geography")
def find_geography(doc):
    text = doc.text
    river_ents = []
    general_ents = []
    original_ents = list(doc.ents)
    for match in re.finditer(river_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        if span is not None:
            river_ents.append((span.start, span.end, span.text))
    for match in re.finditer(general_pattern, doc.text):
        start, end = match.span()
        span = doc.char_span(start, end)
        if span is not None:
            general_ents.append((span.start, span.end, span.text))       
            
#     all_ents = river_ents+general_ents       
    for ent in river_ents:
        start, end, name = ent
        per_ent = Span(doc, start, end, label="RIVER")
        original_ents.append(per_ent)
        
    for ent in general_ents:
        start, end, name = ent
        if "River" in name:
            per_ent = Span(doc, start, end, label="RIVER")
        elif "Mountain" in name:
            per_ent = Span(doc, start, end, label="MOUNTAIN")
        elif "Sea" in name:
            per_ent = Span(doc, start, end, label="SEA-OCEAN")
        elif "Forest" in name:
            per_ent = Span(doc, start, end, label="FOREST")
        original_ents.append(per_ent)
    filtered = filter_spans(original_ents)
    doc.ents = filtered
    return (doc)
