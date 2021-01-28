Search.setIndex({docnames:["01_01_introduction_to_ner","01_02_introduction_to_spacy","02_rules_based_ner","03_machine_learning_ner","04_01_spaCy_Entity_Ruler","04_02_create_ner_training_set","04_03_train_spacy_ner_model","05_examining_a_spacy_model","06_introduction_to_word_vectors","07_generating_custom_word_vectors","08_loading_custom_word_vectors","09_01_cultivating_concentration_camp_dataset","09_02_cultivating_corpus","10_the_challenges_of_holocaust_ner","11_introduction_to_custom_pipes","README","intro"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["01_01_introduction_to_ner.ipynb","01_02_introduction_to_spacy.ipynb","02_rules_based_ner.ipynb","03_machine_learning_ner.ipynb","04_01_spaCy_Entity_Ruler.ipynb","04_02_create_ner_training_set.ipynb","04_03_train_spacy_ner_model.ipynb","05_examining_a_spacy_model.ipynb","06_introduction_to_word_vectors.ipynb","07_generating_custom_word_vectors.ipynb","08_loading_custom_word_vectors.ipynb","09_01_cultivating_concentration_camp_dataset.ipynb","09_02_cultivating_corpus.ipynb","10_the_challenges_of_holocaust_ner.ipynb","11_introduction_to_custom_pipes.ipynb","README.md","intro.md"],objects:{},objnames:{},objtypes:{},terms:{"000":3,"0005846504":9,"0007":9,"0009963055":8,"002122373":8,"004347025":8,"004459205":8,"0059491103":8,"0059655504":8,"00631089":9,"0063185897":8,"0076305643":8,"009704136":8,"010533272":8,"011256633":8,"012848561":8,"013175516":9,"013374495":8,"013382204":8,"01394376":8,"014696863":8,"015281798":8,"015310492":8,"015334953":8,"015784053":8,"016453728":8,"016458655":9,"017453942":8,"017722093":8,"018486138":8,"018554512":8,"019758822":9,"01_02":4,"020342976":8,"02126528":8,"021542747":8,"023362642":8,"023921987":8,"024006622":8,"025519002":8,"026751317":8,"027235914":9,"027348584":9,"02984228":9,"031974062":8,"03536313":8,"036557104":8,"03897387":8,"039143123":9,"040194467":8,"041860744":8,"04241912":8,"04283724":8,"04467735":8,"04535578":8,"046630684":9,"04697837":8,"04708015":8,"04708992":8,"048353776":8,"049084224":8,"04936823":8,"051096343":8,"051914077":8,"05258381":8,"05281015":8,"05295286":8,"05530072":8,"055799782":8,"057455678":8,"057939123":8,"061046753":8,"061260436":8,"06265491":8,"06319317":8,"06380113":8,"0660652":8,"066147":8,"069224015":8,"06926512":8,"07079664":8,"07166888":8,"0729958":8,"07359381":8,"074051596":8,"07422618":8,"074456714":8,"07527494":8,"07684872":8,"07696586":8,"07740813":8,"07915035":8,"07924239":8,"081884995":8,"084006436":8,"0849124":8,"085253105":8,"08585547":8,"08594837":8,"08780184":8,"08794056":8,"08803728":8,"08877125":8,"089302294":8,"09106963":8,"091146186":8,"09303968":8,"09483505":8,"09494446":8,"095453635":8,"095964395":8,"09619415":8,"0987916":8,"0x000001a207e00580":14,"0x000001a20bd97700":14,"0x000001a20fadca00":14,"0x000001a212600fa0":14,"100":3,"10000":9,"102198474":8,"1028471":8,"10318089":8,"10374063":8,"10403373":8,"105219565":8,"10684048":8,"10789692":8,"10878109":8,"109912336":8,"11038961":8,"112367705":8,"116130605":8,"11771541":8,"12181527":8,"123247474":8,"12381973":8,"12467103":8,"12481717":8,"1257589":8,"12699558":8,"12741785":8,"12800062":8,"13323267":8,"13361925":8,"13367777":8,"13474767":8,"13548143":8,"13625076":8,"14191462":8,"14618908":8,"14669564":8,"14741589":8,"1478078":8,"14816307":8,"14876273":8,"151291":8,"15373217":8,"15373677":8,"15486309":8,"15488827":8,"15554792":8,"15815939":8,"15926014":8,"16128318":8,"16149549":8,"16164272":8,"16214448":8,"16330549":8,"1656344":8,"16563527":8,"17310189":8,"17346472":8,"17393902":8,"17778987":8,"17877163":8,"18029206":8,"18069582":8,"18330036":8,"18349588":8,"1844036":8,"18460844":8,"18478563":8,"18796602":8,"190906":8,"1920163":8,"19579992":8,"19670585":8,"19911548":8,"19970295":8,"1l3v2zcgb3":14,"1st":2,"20008522":8,"20074937":8,"20121849":8,"2021":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"2022":[0,2],"2040299":8,"20485449":8,"2053445":8,"20611146":8,"2062973":8,"20662159":8,"20824358":8,"2087667":8,"21062694":8,"21074814":8,"21618247":8,"21750642":8,"21938106":8,"21945408":8,"22156847":8,"22328818":8,"22724482":8,"22732906":8,"22887675":8,"22923793":8,"23334776":8,"23497184":8,"23563664":8,"23812544":8,"2387938":8,"2398532":8,"23992492":8,"24011964":8,"2427806":8,"24467848":8,"24668717":8,"24972811":8,"25047818":8,"25068823":8,"25334117":8,"2543924":8,"25956103":8,"26005003":8,"2621652":8,"26249585":8,"2627738":8,"26381743":8,"26399022":8,"26524526":8,"2665334":8,"2677968":8,"27387282":8,"2781296":8,"27924335":8,"28178927":8,"2839813":8,"2869162":8,"28866896":8,"28902963":8,"29093853":8,"29142144":8,"29143015":8,"29180774":8,"29288396":8,"29732847":8,"29963812":8,"2nd":11,"2ny0yatnuxi":3,"300":8,"30283198":8,"31219167":8,"315":[0,1,2,3,4,5,6,7,8,9,10,11,14],"31678385":8,"31812978":8,"31940162":8,"3213515":8,"32197484":8,"32234505":8,"3248672":8,"32800657":8,"339":14,"340":14,"3400458":8,"341":14,"34115726":8,"34192443":8,"342":14,"343":14,"34325415":8,"34464878":8,"34473857":8,"34488577":8,"34686008":8,"34890386":8,"35051352":8,"35061485":8,"3560308":8,"3621799":8,"37346402":8,"37690258":8,"37786478":8,"3786432":8,"37927982":8,"38072023":8,"38076186":8,"38450953":8,"38616535":8,"38653126":8,"39073908":8,"3916269":8,"39693353":8,"39866814":8,"4104423":8,"41955113":8,"42771882":8,"42949626":8,"4323269":8,"43233085":8,"43359983":8,"44510433":8,"46049833":8,"4692303538322449":8,"47086501121520996":8,"47269863":8,"4734125":8,"4740387797355652":8,"4753464460372925":8,"4765608310699463":8,"48001364":8,"4857257":8,"48929861187934875":8,"5016494393348694":8,"5051567554473877":8,"50599706":8,"5068483948707581":8,"5080214":8,"5083401203155518":8,"5084848403930664":8,"5099129676818848":8,"5112853":8,"5153346":8,"518073320388794":8,"51f12b1879b3":14,"52325517":8,"5244792":8,"52888566":8,"5323576927185059":8,"533636748790741":8,"5343026518821716":8,"5369070172309875":8,"5381632":8,"5385118126869202":8,"5445305":8,"555":4,"5555":4,"560":[0,1,2,3,4,5,6,7,8,9,10,11,14],"5609912":8,"5623824":8,"56381494":8,"56700015":8,"5768706798553467":8,"5827627":8,"58703226":8,"5908519":8,"5th":0,"6649479866027832":8,"7z1imsp6g10":6,"975":11,"\u0105":11,"\u0107":11,"\u0119":11,"\u0142":11,"\u0144":11,"\u015b":11,"\u0178":11,"\u017a":11,"\u017c":11,"b\u00f6hlen":11,"be\u0142\u017cec":11,"bismarckh\u00fctt":11,"br\u00fcnn":11,"break":[0,1,5,12],"case":[2,3,4,6,9,11,12,14],"catch":2,"che\u0142mno":11,"class":[1,4,11,12,14],"d\u00fcsseldorf":11,"default":[1,4],"eintrachth\u00fctt":11,"f\u00fcrstengrub":11,"final":[0,1,3,6,11,12,13],"float":[8,9],"flossenb\u00fcrg":11,"function":[0,1,4,5,6,9,11,12,13,14,16],"g\u00f6ttingen":11,"g\u00fcnthergrub":11,"hubertsh\u00fctt":11,"import":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"int":9,"laurah\u00fctt":11,"long":0,"m\u00fccheln":11,"m\u00fchlhausen":11,"new":[0,1,2,3,4,6,9,10,11,12,13,14],"p\u0142asz\u00f3w":11,"return":[0,2,6,11,13],"s\u00f6mmerda":11,"sajmi\u0161t":11,"sch\u00f6nebeck":11,"short":[0,10],"sobib\u00f3r":11,"sta\u00dffurt":11,"throw":9,"true":[0,3,4,6,11],"try":[1,2,3,4,5,6,9,10,11,13,14],"while":[0,1,2,4,9,11,12,13,16],And:[1,3,11],But:[6,13],For:[0,1,2,4,5,6,8,9,11,12,13],HIS:12,IDs:4,Not:0,One:[2,4,5,8,11,13],POS:[0,1],Such:6,THE:12,That:[5,13],The:[0,1,3,4,5,6,9,10,11,12,14,16],There:[1,2,3,4,10,11,12,13],These:[0,1,3,6,8,9,13,16],WAS:12,Will:5,With:[1,3,5,11],aachen:11,abbrevi:1,abil:[0,1,2,3,4,6,12],abl:[1,3,5,6,10,11,12],about:[0,1,3,4,5,6,8,9,11,12,13],abov:[0,1,2,3,4,8,9,11,12],absolut:3,academ:11,acceleromet:[0,1,2,3,4,5,6,7,8,9,10,11,14],accent:11,accept:[0,4,13],access:11,accid:11,accordingli:[0,3,4],account:[3,8,11],accuar:0,accur:[3,9],accuraci:[2,3],accus:0,acess:11,achiev:[0,2,4,5,8,12],acqur:11,across:[0,1,3,8,12],action:13,actual:13,add:[2,4,6,11,14],add_label:6,add_pattern:[2,4,5,6],add_pip:[2,4,5,6,14],added:[4,14],adding:2,addit:[0,13],address:[0,4,6,13],adequit:8,adj:1,adject:1,adjust:[3,6],admit:7,ador:8,adp:1,adv:1,advanc:5,advantag:[3,6],advent:13,advis:[1,16],affect:[4,5,12,13,14],after:[0,1,9,11,14],again:[1,3,5,8,9,12],against:[3,9,11],agap:8,ages:1,ahead:14,aid:[5,16],air:3,alarm:2,aldernei:11,algebra:3,algorithm:3,align:[0,1,2,3,4,5,6,7,8,9,10,11,14],all:[0,1,2,3,4,5,6,8,9,11,12,14,15],all_word:12,allow:[0,1,2,3,4,5,6,7,8,9,10,11,12,14],allowfullscreen:[0,1,2,3,4,5,6,7,8,9,10,11,14],almost:12,alongsid:[8,15,16],alpha:9,alphabet:11,alreadi:14,also:[0,1,2,3,4,6,8,9,11,13,14,16],altdorf:11,altenburg:11,alter:[6,12],althamm:11,alwai:[5,6,12],amersfoort:11,among:[0,4],amor:8,amount:[6,9],analog:8,analysi:0,ancient:0,ani:[0,2,4,5,9,11,12,13,15],ankt1gkk8lo:1,annen:11,annot:[1,3,5,6,13],anoth:[0,1,2,3,4,5,11,14],answer:[2,4,6,11,12],anyon:8,anyth:[0,2],api:[1,4],appar:1,appear:[1,8,12,13],append:[5,6,9,11,12],appli:0,appreci:8,approach:[1,2,3,6,8,11],appropri:3,aqpmws6xii8:10,architectur:[3,5,6],arguabl:3,argument:[1,4,6,14],arolsen:11,arrai:8,art:3,articl:6,artif:3,artifici:3,aschersleben:11,asign:3,ask:[8,11,13],asr:0,assign:5,assocait:8,associ:[8,13],assum:[6,13],attribut:1,auchwitz:[8,11],audio:5,augment:[6,8],augustdorf:11,ausch_subcamp:11,auschwitz:[8,11],auschwitz_birkenau:8,author:[6,11],autom:[5,10,11,12],automat:[0,5],autoplai:[0,1,2,3,4,5,6,7,8,9,10,11,14],aux:1,auxillari:1,avail:[6,9,16],awai:[1,2],babitz:11,back:[3,4,13],background:[0,13,15],bad:[8,11],bag:[8,12],ball:[0,12],bane:0,banjica:11,barrier:13,base:[1,3,5,11,12,13],basektbal:2,baselin:6,basic:[0,1,5,6,11,15],basketbal:[0,2],bauzug:11,beautifulsoup:11,becaus:[0,2,3,4,5,6,8,9,10,11,12,14],becom:[1,2],been:[2,4,9,13,16],befor:[2,3,4,5,9,12,14],began:1,begin:[1,3,5,6,11,12],begin_train:6,behind:[3,5,6],being:[1,2,3,5,6,8,9,11,12,13],believ:8,belong:13,below:[0,1,2,3,4,5,6,8,9,10,11,12,14],belsen:11,belzec:11,benefit:[2,11],berga:11,bergen:11,bergisch:11,berka:11,berlin:[1,2],berlitz:8,berlstedt:11,bernburg:11,bert:13,besid:5,best:[11,12,14],better:[0,1,2,3,6,8],between:[3,9,12,15],beverag:8,beyond:[3,4],big:[5,6],bigdata:3,bigram:[8,9],billroda:11,birkenau:[8,11],birthplac:13,bit:[1,7,9,11,13],blank:[2,4,5,6,10,11],blankenhain:11,blechhamm:11,block:12,blog:[0,6],bob:14,bobrek:11,bochum:11,bogdanovka:11,boi:0,boiler:6,bolzano:11,bombensucherkommando:11,book:[2,4,5,6],bool:14,bor:11,both:[0,1,4,6,8,9,10,11,12],bound:4,box:1,branch:[0,3],braunschweig:11,breendonk:11,breitenau:11,brief:[3,12],briefli:[1,4],bring:6,broken:1,bs4:11,buch_subcamp:11,buchenwald:[8,11],budi:11,build:[4,5],build_vocab:9,built:[1,5],buna:11,caffe:13,call:[3,10,14],camp:[4,8,11,13],can:[0,1,2,3,4,5,6,8,9,10,11,12,13,14,16],cannot:[3,7,8,11,13,14],capabl:[1,9],capit:[0,2,3,5,12],cardin:0,care:8,cartoon:9,cat:[8,9],categori:[0,3,13],caution:11,cell:11,centuri:[0,2],certain:[0,1,2,5,6,8,11,13],certainli:6,challeng:11,chanc:11,chang:[8,13],chapter:12,charact:[4,5,6,9,11],charlottengrub:11,check:[2,3,4,5,6,15],chelmek:11,chelmno:11,chief:[1,2,6],chiefli:2,chocol:8,choic:3,choos:12,cinemat:3,citi:[3,11,13],classic:2,classif:0,classifi:[0,4],claus:0,clean:[2,3,8,11,12],clear:[5,13],clearer:8,clearli:8,client:0,climat:13,clipboard:[0,1,2,3,4,5,6,7,8,9,10,11,14],close:[0,1,4,5,8],closest:8,cltk:2,cluster:9,cnn:6,code:[0,2,3,4,5,6,9,10,11,12,14],colditz:11,collabor:16,collat:11,collect:[9,11],cologn:11,com:[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16],combin:[2,3,12],come:[0,1,4,5,8,11,12,13],comic:8,comma:2,command:10,common:[0,1,3,4,8],commonli:[0,2],compar:5,compil:[11,12],complet:[1,4,11,15,16],complex:[1,3,8],complic:1,compon:[1,2,4,5,6,14],comput:[0,1,3,8,12],computation:[3,8],conc_camp:13,concen:8,concent:8,concentr:[4,8,11,13],concern:13,concis:8,concret:5,conjug:1,conon:11,consid:[0,1,3,5,8,9,11,12,13],considers:13,consult:11,consum:8,contact:16,contain:[0,1,3,5,9,11,13],content:[11,16],contentr:8,context:[2,3,4,6,8,11,12,13],contract:0,convent:[1,5],convert:8,convolut:5,copi:11,core:[0,3],corespond:0,corpora:[8,13],corpu:[0,2,3,5,6,8,11],corpus_count:9,correct:[2,3,5,14],correctli:[1,3,4,5,6,13,14],correspond:[0,1,3,4,11],corrupt:3,cost:11,cotton:8,could:[0,2,3,5,8,9,11,13],count:5,cours:5,cover:[6,7,11,13,14],crawinkel:11,creat:[1,2,3,4,6,8,10,11,13,16],create_pip:[2,4,5,6],create_wordvec:9,creation:[5,10,11],creator:[12,13],cross:8,cultiv:[2,5,6],curiou:3,current:2,curv:6,custom:16,customiz:6,cuuf2h6uca8:7,dach:11,dachau:[8,11],dai:1,daili:3,dalla:2,data:[0,1,2,3,4,5,7,8,9,10,12,13,14,16],data_science_lab_logo:16,dataset:[3,5,16],date:[0,2,16],dativ:0,ddd:4,dddd:4,de_core_news_sm:14,de_ner:14,decid:1,decim:8,decis:[0,1,13],declin:1,dedic:[0,2,11],deep:3,def:[6,9,10,11],defaultdict:9,defin:1,definit:[8,13],degre:[8,13],delet:11,delic:13,delin:12,demo:[4,5],demonstr:[1,2,6,10,12,14,16],depend:[1,3,4,5,9,11,12,13,14],deploi:[3,4],deploy:11,depth:10,describ:[1,3,12],design:[0,9,15,16],desir:[1,2,11,13,14],despit:[2,3,6,12],dessau:11,det:1,detail:[0,1,2,4,10],detect:11,determin:[1,8],develop:[0,1,2,3,4,5,11,13],devot:0,dialect:[12,13],dictionari:[1,2,5,8],did:[1,4,9,11,12,13],differ:[0,1,3,4,5,6,8,10,11,12,13,14,16],difficult:[2,5,7],digit:[0,8,11,15],digitis:8,dikow:16,dimens:[8,9],dimension:8,direct:8,disable_pip:6,discover:13,discuss:[2,5,7,11],disk:4,distanc:[0,1],distant:[0,9],distinct:[4,8],div:[0,1,2,3,4,5,6,7,8,9,10,11,14],divers:[0,5,13],divid:[3,9,13],doc:[1,2,3,4,5,6,9,12,14],doe:[4,6,8,9,11,12,13,15],doesn:5,doing:[5,9,12],domain:[0,1,2,4,5,16],domest:8,domesticu:8,don:[2,3,5,9,11,15],done:[4,5],dora:11,dortmund:11,down:[5,8,9],download:1,dranci:11,drastic:3,drink:8,drinkabl:8,drop:[5,6,11],dry:7,dsl:16,due:6,duisburg:11,duplic:[11,12],dure:[4,5,9,13,15,16],e006:14,e007:14,e9h8qvm2uni:0,each:[0,1,3,5,8,9,11,12,13,14],earli:[1,2,6],earlier:[0,4,14],easi:[1,2,3,5,6],easier:[1,2,6],easiest:[6,13],easili:[0,1,3,4,5,8,9,11],easist:6,eat:8,effect:[1,6,9,13],effici:8,ehrenreich:16,eisenach:11,either:[0,2,3,4,10,11,12,14,16],elimin:[6,9,11,12],els:[11,12],elsnig:11,elsterau:11,emb:[0,1,2,3,4,5,6,7,8,9,10,11,14],embed:[3,8,16],embolden:0,emphas:7,empti:5,en_core_web_sm:[1,3,4,5,6,9,12,14],en_model:14,en_ner:14,encod:3,encount:[0,3,4,11,12,13],encourag:[5,6],encrypt:[0,1,2,3,4,5,6,7,8,9,10,11,14],end:[0,1,2,3,4,5,6],end_char:[5,6],engag:[1,2,3],england:2,english:[0,1,2,3,4,5,11,13,14],enjoi:[2,8],enough:[5,7,8],ensur:[11,13],ent:[1,2,3,4,5,6,14],entir:[0,2,3,4,5,8,9,12],entireti:0,entiti:15,entity_rul:[2,4,5,6],entityrecogn:14,entityrul:[3,6,11,12],epoch:[3,8,9],equal:[1,2],error:[0,13,14,16],essen:11,essenti:[0,1,2,3,4,6,14],etc:[1,2,6,8,12,13,16],europ:13,european:1,even:[1,2,3,5,8,9,12,13],event:13,everi:[2,3,5],everyth:4,evok:8,examin:[3,8,11],exampl:[0,1,2,3,4,8,11,12,13],excel:[11,13],except:[1,5,8,11,12],exchang:0,excit:6,execut:[4,8,10],exercis:6,exist:[3,5,11,13,14],expand:6,expect:[0,5,8,9,12,14],expens:[3,5,8],experi:[0,1,3,13],experienc:[0,13],expert:[11,16],expir:[2,12],expirement:5,expiremnet:4,explain:[0,1,3,10,13],explan:[1,13],explor:[1,2,4,5,8,11],explos:[1,4,5],exposit:6,express:2,extend:[0,1],extens:16,extent:2,exterimin:8,extermin:4,extermination_camp:8,extract:[0,2,3,4,5,13,16],ezjm7piszvk:[8,9],fact:[1,5,8],factori:4,fail:[3,4,5,6],failur:4,fairli:2,fall:[2,3,6,13],fals:[6,11,12],falstad:11,famili:13,familiar:[1,5],fan:3,far:3,fastai:6,favor:1,fed:3,feed:[0,6],feel:7,feli:8,fellow:16,fellowship:16,few:[1,2,3,4,5,6,8,9,11,12,13],field:[0,1],file:[9,10,12],fill:13,find:[1,2,4,5,6,8,11,12,13,16],find_al:11,finish:[2,3],finit:2,firm:2,first:[0,1,2,3,4,5,6,7,8,9,11,12,13,14],fit:[5,11],fivefold:0,flag:2,flatten:8,flossenbiirg:8,flossenburg:11,focu:6,follow:[0,1,2,4,6,9],foreign:13,form:[1,2,3,4,5,6,7,8,11,12],formal:4,format:[5,6,14],formula:[1,4],fort:11,fortun:[3,5,13],forward:[3,13,14],fossoli:11,found:[4,6,9,16],foundat:[0,2,3],framebord:[0,1,2,3,4,5,6,7,8,9,10,11,14],framework:[2,6,16],franc:13,free:7,freeli:16,frequenc:[8,9],frequent:9,freudenth:11,friend:13,frohburg:11,from:[0,1,2,3,4,5,6,8,9,10,11,12,13,14,16],front:14,full:4,fulli:0,fun:14,fund:11,fundament:[2,6,12],further:[2,8,9,11,13],furthermor:13,futur:0,g0hvxnb7hhm:3,g6cw5jybupu:3,gain:[0,8],game:5,gandersheim:11,garbag:8,gather:11,gave:6,gazatt:2,gelsenkirchen:11,gener:[1,2,3,4,5,6,8,11,12],genert:5,gensim:8,geopolit:[0,3],german:[0,13,14],germani:2,get:[0,1,3,4,5,6,8,11,12,13,14],get_component_nam:14,get_pip:14,ghetto:13,gib:8,giessen:11,github:[11,16],give:[3,4,5,8,9,12,13,14],given:[0,3,4,12],gladbach:11,gleiwitz:11,glutton:8,goal:[0,2,8,12,14],goggl:11,going:[5,6,9,14],goldman:16,golleschau:11,good:[0,1,3,4,5,6,8,9,12,14],googl:11,goslar:11,got:13,gpe:[0,3,4,5,6,11,13,14],grab:[4,11,14],grab_subcamp:11,grade:0,grammar:0,great:5,greater:[1,2,6],greatli:1,greek:0,grini:11,gross:11,guess:3,guid:0,gyroscop:[0,1,2,3,4,5,6,7,8,9,10,11,14],had:[1,3,4,8,9,13],hadmersleben:11,halberstadt:11,halei:16,half:13,hall:11,hand:[0,2,4,5,9,11],handl:[1,13],happen:[8,11,13],harmens:11,harri:[2,4,5,6],has:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],hate:8,have:[0,1,2,3,4,5,6,8,9,11,12,13,14,15,16],head:3,height:[0,1,2,3,4,5,6,7,8,9,10,11,14],hello:14,help:[5,12,16],henc:0,her:9,here:[0,1,2,4,5,8,9,11,12,13,16],herself:9,herzogenbusch:11,hesit:16,hessisch:11,high:9,higher:8,highli:[0,5],him:9,himself:9,hindenburg:11,hinder:1,hinzert:11,his:[1,9,12],histori:[0,5],historian:13,hit:11,hold:[0,4],holzen:11,hone:[3,8],hope:5,host:3,hous:8,how:[0,1,2,4,5,7,8,9,11,12,13,14],howev:[0,1,2,3,4,5,6,8,9,11,12,13,14],html:[0,1,2,3,4,5,6,7,8,9,10,11,14],http:[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16],human:[0,8,12,13,15],humanist:0,hyperperamet:6,i9nl8qiip54:3,idea:[5,14],ident:[1,8,11,12,13],identif:[0,1],identifi:[0,1,2,3,4,5,6,8,11,13],ifram:[0,1,2,3,4,5,6,7,8,9,10,11,14],ignor:5,iii:[8,11],ill:1,imag:[0,3,5,16],imagin:[8,13],immens:3,implement:2,implic:13,importantli:[3,6,11],imposs:[2,3,8],imprecis:13,improv:[1,3],inabl:4,includ:[0,3,4,6,11,13],inconsist:3,incorper:[3,4,13],increas:5,index:[5,8,11],indexerror:11,indic:[1,3,4,8,13],indirect:0,individu:[0,1,2,4,9,12,13],industri:[2,8],inflect:0,inform:[0,1,7,9],init:10,initi:8,inject:[9,14],inner:7,input:[0,3,4,5,6,14],instal:1,instanc:[1,2,3,4,11],instead:[1,3,6],institut:[11,16],instruct:[2,4],integ:9,intellig:3,intend:0,interest:[0,3,5,6,11],interfac:5,interview:13,introduc:[0,1,3,6,12,13],introduct:3,intuit:0,invidu:13,involv:13,ipython:14,irish:1,issu:[4,13],item:[0,1,8],iter:[1,2,3,5,6,11,14],itn:6,its:[0,1,2,3,4,6,9,11,12],itself:[1,9],jan:2,janinagrub:11,janowska:11,januari:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],jasenovac:11,jawischowitz:11,jena:11,jerri:9,job:0,john:3,join:[9,12],jon:3,june:[0,2],just:[0,3,9,13,14],justifi:13,kaiserwald:11,kassel:11,kattowitz:11,kauna:11,keep:[3,4],kemna:11,kept:3,kera:6,kind:[1,13],klooga:11,know:[1,2,3,4,5,6,7,8,11,12],knowledg:[0,2,5,15],known:[0,1,2,3,8],kobier:11,kpys1bsnt8bfmfyg:[15,16],kpytcluinhpjitpnbkif3lo2k:15,kraftsdorf:11,kranichfeld:11,kuhberg:11,lab:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],label:[0,1,2,3,4,5,6,13],label_:[1,2,3,4,5,6,14],lagischa:11,langaug:[0,9],langensalza:11,languag:[1,2,8,9,12,13,14,15,16],larg:[0,5,6,12,13],larger:[0,1,2,5,6,11],last:[1,2,3,5,6,10,14],late:0,later:[0,1,2,4,5,6,14],latin:[0,1,8,12],latter:[4,10],lear:6,learn:[0,1,2,5,8,9,11,12,13],least:[8,12],left:[3,11],leipzig:11,lemma:[1,12],lemma_:[1,12],lemmat:9,len:[6,9],length:5,less:[2,11],lesson:[0,11],let:[0,1,2,3,4,5,6,7,8,9,11,12,13,14],letter:11,level:7,leverag:[1,11],levi:16,lexington:13,lib:14,librari:[0,1,2,3,4,5,8,9,11,12],lichtenau:11,lichtewerden:11,lies:1,life:0,like:[1,2,3,6,10,11,13,16],likewis:0,limit:[0,11],line:[3,9,10,12],linear:3,linguist:[0,1],link:11,lippstadt:11,list:[1,2,4,5,8,9,11,12,14,15,16],list_of_nazi_concentration_camp:11,list_of_subcamps_of_auschwitz:11,list_of_subcamps_of_buchenwald:11,listen:16,littl:[1,5,6,11],live:14,load:[1,3,4,5,6,9,12,14],load_word_vector:10,loc:10,local:[6,13],locat:[2,5,6,8,11,13],london:2,longer:[0,2],look:[1,4,6,7,9,11,12],loss:6,lot:[0,1,5,12],love:8,loving:8,low:0,lower:[9,12],lowercas:[9,12],lxhnsxudkri:1,machin:[0,1,2,5,8,9,11,12,13],made:[1,9,13],madesimpl:3,magdeburg:11,mai:[0,1,2,3,4,5,6,12,13],main:11,main_nlp:14,majdanek:[8,11],major:[2,11],make:[0,1,3,5,6,8,11,12,13,14],maketran:[9,11],malchow:[8,11],mali:11,manag:12,mani:[1,2,4,5,8,13],manner:[5,11],manual:[5,6,11,13],margin:0,mark:[0,1,6,11],markkleeberg:11,martha:[0,2],martin:1,match:[1,3,8],matcher:4,materi:6,mathemat:3,matric:[3,8],matrix:[3,8],matter:4,mattingli:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],mean:[0,2,3,4,5,8,9,11,12,13,14],meant:16,mechelen:11,media:[0,1,2,3,4,5,6,7,8,9,10,11,14],medium:6,meet:12,member:13,memor:[0,3],memori:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,16],mental:0,mention:[2,5,12,13],met:[6,12],metadata:[0,4,13],method:[0,1,2,4,5,6,8,9,10,11,12,16],meuselwitz:11,michael:16,mid:3,middl:1,might:[3,6,8,12,13],mike:16,million:[3,9,12],min_alpha:9,min_count:9,mind:[4,8,12],minim:[9,11],minimum:3,minor:6,miss:[3,6],mistak:[0,5,13],mittelbau:11,model:[0,1,2,4,5,8,9,11,12,13],model_nam:[9,10],modern:3,modif:0,modifi:5,modul:14,monk:1,monowitz:11,more:[0,1,2,3,4,5,6,8,9,10,11,13,14],most:[0,1,3,6,8,9,11,13,14],mother:[0,13],mous:9,move:[0,1,2,3,14],much:[1,2,5,8,9,12],multi:0,multidimension:8,multilingu:13,multipl:[3,8,12,13,14],museum:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,16],music:9,must:[1,4,11,12,13],mwt:0,myself:9,n8ty:1,name:15,nation:11,nativ:0,natur:[6,8,9,12,15,16],natzweil:11,nearbi:11,nearli:8,necess:0,necessari:[0,1,3,5,6,10,11],necessarili:[9,13],need:[0,1,3,5,6,9,11,12,13,14],neg:[9,12],ner:[1,4,5,11,15],network:[3,5,6],neu:11,neuengamm:11,neural:[3,5,6],neustadt:11,never:[3,4,12,13],new_corpu:9,newli:2,next:[1,2,4,5,8,9,12,14],nice:5,niederhagen:11,niederorschel:11,nightli:6,nlp:[0,1,2,3,4,5,6,9,10,12,13,15],nltk:9,nlu:0,no_dupl:12,nomin:0,non:[4,12],nor:[8,9],nordhausen:11,normal:[1,2],notabl:0,notat:13,note:[0,1,3,5,6,8,11,12],notebook:[15,16],notic:[1,3,4,5,12,14],noun:[0,8,12,13],noun_chunk:1,now:[0,1,2,3,4,5,6,8,9,10,11,13,14],nowher:5,number:[0,2,3,4,6,8,9,11],numer:[0,9],nv0pksknfxy:1,nvo:0,o_2uq0sdcqo:2,ober:11,object:[0,1,2,4,5,9,11,14],obtain:[3,6],obviou:1,occasion:12,occur:[0,2,3,9,13],ocr:[2,3],off:[1,4,9,11,16],offer:[1,3,4,9,12],often:[0,1,2,3,4,5,11,13],ohrdruf:11,okai:11,onc:[0,2,3,4,5,8,9,12],one:[0,1,2,4,5,6,8,9,10,11,12,13,14],ones:[2,3,11],onli:[0,1,2,3,5,6,8,9,11,13,14],open:9,oper:4,opper:0,opt:14,optim:[6,11],option:[4,8,9,11],oral:[12,13],oranienburg:11,order:[0,1,2,3,4,6,9,11,14],org:[4,11],organ:4,origin:9,orth:4,osthofen:11,oswiecim:8,other:[0,1,2,3,5,6,8,9,11,12],other_pip:6,our:[0,1,2,4,5,6,8,9,11,12,14],ourselv:9,out:[0,1,2,3,4,9,14,15],outlin:0,output:[0,1,2,3,4,5,8,13,14],outsid:[1,2,4,13],over:[1,2,3,4,5,6,8,9,11,14],overal:3,overcom:13,overwrit:[4,14],overwrite_:4,own:[0,3,4,9,11,13],owner:4,packag:[1,14],page:11,paid:5,paragraph:5,paramet:3,parenthes:11,pari:13,pars:[0,1,2,4,11],parser:[0,4],partak:0,particular:[2,8],particularli:[1,2,11,13],partner:0,pass:[0,1,4,6,8,11,14],past:[1,2,4,13],pattern:[1,2,3,4,5,6,11],peculiar:13,penig:11,peopl:[0,2,3,5,13,16],per:0,percentag:3,perfect:8,perfectli:11,perfom:1,perform:[0,1,2,3,4,5,6,8,9,12,13,14],perhap:[0,4,8,12],period:[0,12],permiss:14,perpetr:13,person:[0,1,2,3,4,14],perspect:13,pertain:11,phone:4,phone_numb:4,phrase:9,phrasematch:4,phraser:9,pictur:[0,1,2,3,4,5,6,7,8,9,10,11,14],piec:[1,9],pipe:[4,6],pipe_nam:[6,14],pipelin:[0,4,6,8,14],pl2vxyki:[15,16],place:[0,2,4,6,8,11,13,16],placement:14,plai:[0,1,2],plaszow:11,plate:6,plawi:11,player:2,playlist:[15,16],pleas:[0,1,3,6,7,8,16],plural:[0,1],png:16,point:[2,13],poland:[4,5,6,13],polish:[11,13],polit:0,poor:[3,8],poorer:13,poorli:3,popularli:3,porombka:11,portal:11,portrai:0,pos:1,pos_:1,posit:[0,5,11],possess:2,possibl:[3,5,8,13,16],postdoctor:16,potabl:8,potenti:[0,2,3,5,8,12,13],potter:[2,4,5,6],power:9,practic:[0,1,3,5],practition:[0,2,3,5,6,12,13],precis:[1,2,3,9],predecessor:3,predefin:[1,2],predesign:6,predetermin:[0,1,3],prefer:[6,8,10,12],prefind:4,preliminari:11,preload:4,prepar:[2,11],preprocess:[9,13],present:[0,3,7,11,13],preset:8,presum:[2,15],presumpt:6,pretrain:[1,8],prettin:11,preven:13,prevenl:2,prevent:0,previou:[2,11,13],primaci:[0,4],primari:2,princip:3,print:[1,2,3,4,5,6,8,9,10,11,12,14],prior:[3,6],prison:8,privaci:13,probabl:13,problem:[0,2,3,4,5,11],problemat:6,process:[1,2,3,5,6,8,9,12,13,15,16],prodi:5,prodigi:[5,6],produc:[9,11],product:5,program:[1,15],programm:1,progress:[0,15],progress_p:9,project:11,promot:5,pron:1,proper:[1,2,3,8,11,12,13],properli:3,propn:1,prototyp:5,provid:[0,3,4,7,10,11,12,13],puncat:1,punct:1,punctuat:[0,1,9,12],purpos:[0,1,4,5,8,9,10,11,12,16],pursu:2,pursuit:11,push:3,put:[12,14],pydictionari:8,python38:14,python:[0,1,4,5,8,9,10,11,15],pythonhuman:0,pytorch:6,quantiti:[0,3,6],quesiton:13,question:[0,2,11,12],quick:[0,11],quickli:8,quit:[1,7,8],radic:[12,13],radostowitz:11,raguhn:11,rais:[2,11,14],raisko:11,random:[3,6],rang:[6,12],rare:5,rather:[2,4,6,8,11],ratio:3,ravensbriick:8,ravensbruck:11,raw:3,reach:0,read:[0,1,3,5,9,13],reader:0,readlin:9,realiz:11,realli:[7,8,13],realm:[1,3],reason:[0,1,2,3,4,5,6,8,9,11,13,14],rebecca:16,recal:5,receiv:[0,4,6,14],recent:14,reciev:9,recogn:0,recognit:15,recomend:[3,9],recommend:[0,3,4,9,11],reduc:[1,3,9,12],refer:13,refin:6,reflect:11,regex:[1,2,4],region:[2,13],regular:[1,2,12],regularli:15,reinforc:[2,3],rel:[0,9],relat:0,relationship:8,relev:[11,16],reliabl:8,reliant:9,remain:[1,2,3],remaind:8,remedi:[4,13],rememb:[2,4,5],remov:[9,12,13],remove_acc:11,repeat:3,replac:[2,12],replic:[0,2,5],repo:15,report_delai:9,repres:[2,11,12],represent:8,represnt:9,reput:11,request:11,requir:[1,5,12],requisit:[4,5,11],research:[0,1,2,3,5],resolut:13,resolv:[4,13],resourc:11,respect:[1,5],respons:13,result:[1,3,4,6,8,9,11,13],reusabl:6,reveal:1,right:[1,3,9,13],risiera:11,robert:16,robust:1,role:0,root:[1,12],rosen:11,rothenburg:11,roughli:2,row:11,rule:[1,3,5,11,12],ruler:[2,4,5,6],run:[5,6,10,11,12],rush:6,s8yq4lrreii:3,sabba:11,sachsenhausen:[8,11],sai:[2,13],said:[6,13],salaspil:11,salzungen:11,same:[0,1,3,4,5,9,12,14],sampl:[2,3,4,5,6,9],sample_model:[10,14],san:11,save:[3,4],save_word2vec_format:9,saw:[4,5,13],scale:[5,6,9],scenario:[0,2,8,14],schlieben:11,schwert:11,scienc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],scientist:[1,13],scope:3,scott:2,scrape:11,scratch:1,script:[6,10,14],seamlessli:5,search:11,second:[0,1,4,9,11,13],section:[3,13,16],see:[0,1,2,3,4,5,6,8,9,11,12,13,14],seek:1,seem:8,seen:[2,3],seep:3,seeth:3,select:13,self:14,semant:8,semi:3,senior:[0,2],sens:[0,3,5,8,11],sensit:13,sent1:12,sent2:12,sent3:12,sent4:12,sent:[1,5,6,9,12,14],sentenc:[0,2,4,5,6,8,9,12,13],sentiment:0,separ:[3,8,13],sequenc:4,sequenti:4,sere:8,seri:[1,2,3,4,5,9,11,15,16],seriou:13,serv:[0,2],set:[1,2,3,4,6,8,11,12,13],sever:[0,3,5,13,14,16],sgd:6,shall:[0,2],shape:[4,9],share:0,she:[0,2,9],shelf:[4,16],shift:11,should:[0,1,2,6,9,11,12,13],show:[3,4,5],shuffl:6,sign:8,signific:0,silent:9,similar:[0,6,8,9],similarli:4,simpl:[1,2,3,8,14],simpli:[1,2,3,5,8,11],simplicti:4,simplifi:12,sinc:0,singl:[0,8,12,13],singular:[0,1,8],sit:13,site:[11,14],situat:2,size:[5,9,12],skill:1,slightli:5,small:[1,3,4,5,6,13,14],smaller:[9,12],smithsonian:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],sobibor:11,soccer:2,softwar:[1,5],soldau:11,sole:0,solut:[0,2,3,5,16],solv:11,some:[0,1,2,3,4,6,8,9,11,13,14],someon:[4,7],someth:[0,8],sometim:[0,2,4,11,12,13,14],somewher:15,sonneberg:11,sophistoc:14,sort:[0,3,4,11,12],sortabl:11,sosnitz:11,sosnowitz:11,sound:[6,9],soup:11,sourc:[4,11,12],space:[1,3,8],spaci:[0,9,11,12],spain:[0,2],span:0,speak:[1,6,13],speaker:0,specialist:[4,5],specif:[0,1,2,3,4,5,6,8,11,12,13,14,16],specifci:14,speech:0,spell:[0,1,11],spellcheck:2,split:[1,8,9,11,12],spoke:[1,13],spoken:4,sport:[0,2],src:[0,1,2,3,4,5,6,7,8,9,10,11,14],stadtallendorf:11,stage:[3,9,12],standard:[0,2,3,4,8,9,11],stanza:1,stapl:2,star:8,start:[3,5,6,9,11,14],start_char:[5,6],start_row:11,state:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,16],statement:[0,13],statist:[1,3],steep:6,stem:1,step:[1,11,12,13],stewart:3,stewwasrt:3,still:[0,2,9],stopword:9,store:[0,4,8,13],stori:1,str:[6,9,11],strength:[2,11],strictli:[11,13],string:[1,2,5,6,9],strip:11,strong:2,structur:[0,3,5,11,12,16],struggl:5,struthof:11,studi:[3,12],stutthof:[8,11],style:12,subcamp:[8,11],subfold:14,subject:[0,1,3,7,16],subprocess:10,substitut:8,succcessfulli:12,succe:3,success:14,successfulli:1,sudden:13,suffic:13,suggest:7,suhl:11,suit:2,sum:14,support:1,sure:[11,14],surfac:8,surnam:0,surround:13,suspect:4,syn:8,synonym:8,syntact:8,synthes:4,sys:10,system:[0,1,2,3,8,13],t_class:11,tabl:11,tag:[1,4],take:[0,1,2,3,4,5,6,8,11,12,14],taken:13,tandem:0,task:[0,1,2,3,4,6,8,9,12,13,16],taucha:11,teach:[1,3,4,5],team:[0,1,5],technic:1,techniqu:9,technolog:13,tediou:3,tell:0,tempor:[0,2,12],temporarili:5,ten:13,tensor:3,tensorflow:6,term:[0,1,8],terminolog:0,test:[2,3,5,6,11,14],testimoni:[12,13],texa:[2,13],text:[0,1,2,3,4,5,6,9,11,12,13,14,16],textaci:1,textbook:16,textual:[3,12],than:[1,2,3,5,9],thank:16,thei:[0,1,3,4,5,6,8,9,12,13,14],theirs:9,them:[0,2,3,4,5,6,8,9,11,12,13,14],themselv:9,therefor:[0,2,4,6,9,11,12],theresienstadt:11,thi:[15,16],thing:[0,1,2,4,5,6,8,9,11,12,13],think:[1,2,8,11,12,13],third:1,thompson:[0,1],those:[0,3,4,9,11,12,13,16],though:[1,11],thought:0,three:[3,5,11,13],through:[0,1,2,3,6,8,9,14],throughout:3,thumb:3,time:[0,1,2,3,4,6,9,11,12,13],to_disk:14,todai:[1,2],togeth:12,toi:[2,9],token:[0,4,5,9,12,14],told:13,tom:[8,9],tomcat:8,tongu:[0,13],tonndorf:11,too:[0,6,9],took:[0,12],tool:5,toolkit:[2,9],topic:[3,9],torgau:11,total_exampl:9,toward:[2,11],towardsdatasci:6,town:13,traceback:14,trai:5,train:[0,1,2,3,4,8,9,11,12,13],train_data:[5,6],train_spaci:6,trained_nlp:6,tran:11,transform:13,translat:[9,11],tration:8,traumat:13,trawniki:11,treatment:16,treblinka:[4,5,6,11],tree:0,trick:13,trigram:8,trip:13,trizna:16,trostenet:11,truth:5,trzebinia:11,tschechowitz:11,tupl:8,tutori:[0,5],twenti:2,twentieth:0,twice:0,twitter:[0,16],two:[0,1,2,3,4,5,6,8,9,10,12,13,14],txt:[9,10],type:[0,1,2,4,8,11,12,13],typic:[1,3,11],typo:[8,16],unclean:[2,12],uncommon:4,under:[6,9,11],understand:[0,1,2,3,5,6,7,8,12,13],understood:9,unedit:2,unfortun:[1,11,12],unfortunatlei:13,uniqu:[0,3,4,8,9,14],unit:[0,1,2,3,4,5,6,7,8,9,10,12,13,14,16],unless:14,unna:11,unnot:0,unseen:[2,3,6,12],unstructur:[0,16],unsupervis:3,until:[0,2,9],updat:[0,6,7,15],upon:[1,4,5,9],uppercas:12,url:11,usabl:[1,3],usag:[1,4],use:[0,1,2,4,5,6,9,10,11,12,13,14],used:[0,1,2,3,6,8,11,13,16],useful:[2,3,11,12],user:[0,4,5,6,9,11,12],uses:[0,3,16],ushmm:[11,12,13,16],ushmm_camp:11,using:[1,2,3,4,5,6,8,9,10,11,13,14,16],usingen:11,usual:[1,2,12,14],utal:2,utf:3,util:[6,14,16],vacuum:11,vaivara:11,valid:[2,3,5],valuabl:0,valueerror:14,vari:[1,6],variabl:1,varianc:[2,3,13],variat:[2,3],varieti:[1,4],variou:[0,3,6,11,12,13],vast:3,vastli:[5,6],vector:[3,11],ventur:3,verb:0,verb_phras:1,veri:[1,5,6,8,9],verifi:5,vernet:11,versa:2,version:6,vgghwiwu:1,via:[0,1,2,3,4,5,6,8,10,11,16],viabl:5,victim:13,video:[1,15,16],view:[3,6,13],vii:11,villag:[4,5,6,13],violenc:13,visa:2,vital:[0,1,7],vocabulari:[9,11],vowel:11,w2v_model:9,wai:[0,1,2,3,5,9,10,11,12,13,14],want:[0,1,2,3,5,6,8,11,12,14],warn:13,warsaw:13,washington:11,watch:[0,1,3,8,14],weak:11,wealth:11,web:11,webscrap:11,weferlingen:11,weimar:11,well:[0,1,2,3,4,5,6,8,9,10,11,12],went:13,were:[1,2,5,6,8,9,11,12,13],werk:11,wernigerod:11,westeregeln:11,what:[4,9,12,13],whatev:11,when:[0,1,5,9,11,12,13,14,15],whenev:14,where:[0,1,2,8,9,11,12,13,14],which:[0,1,2,3,4,5,6,8,9,11,12,13,16],whish:0,whitespac:[1,8],who:[0,5,9,13,16],whole:9,whom:9,whose:0,why:[1,3,4,5,6,9,13],wide:[1,12,13],width:[0,1,2,3,4,5,6,7,8,9,10,11,14],wiki:11,wikipedia:[5,6],wikit:11,william:12,window:9,wish:[0,1,2,4,5,6,9,11,13],within:[4,5,6],without:[0,1,2,4,11,13,16],witten:11,wjb_mattingli:[0,16],wmcjesm:[15,16],wolfen:11,word2vec:9,word:[0,1,2,3,4,5,6,11,12,13],word_freq:9,word_vec:[9,10],word_vector:10,work:[0,1,2,4,5,6,7,8,11,12,13,14,15],work_of_art:3,workflow:5,world:[3,12],worri:5,worth:[3,12],would:[0,2,3,4,5,8,11,13,16],wouldn:5,wpyczodvo3a:4,wrap:12,write:[0,1,2,3,4,5,6,7,8,9,10,11,14],written:12,wrong:4,wurzbach:11,wwii:[4,13],www:[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16],xscpsi3ryqi:11,xxx:4,xxxx:4,xxxxxxxxxx:4,yasdfasasdfrk:3,ybrf7tq1v:5,year:13,yiddish:13,york:[3,6],you:[1,2,3,4,5,6,9,10,11,12,13,14,15,16],your:[2,3,4,5,6,9,11,12,13],yourself:[9,11],yourselv:9,youtub:[0,1,2,3,4,5,6,7,8,9,10,11,14,15,16],yqruv_qqcti:1,ytayco:1,yztolsjkc3a:1},titles:["<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","<center> Custom Named Entity Recognition for Holocaust Documents</center>","holocaust_ner_lessons","<p align=\"center\">INTRODUCTION TO NAMED ENTITY RECOGNITION</p>"],titleterms:{"case":16,Adding:14,Not:12,The:[2,8,13],Use:2,Using:[3,4,5],With:16,abov:6,acknowledg:16,acquir:11,action:4,advanc:4,alert:3,align:16,base:[2,4],befor:8,blank:14,bother:2,center:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],challeng:13,chunk:1,complex:4,concept:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],corpu:[9,12],creat:[5,9,14],cultiv:[11,12],custom:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],data:[6,11],dataset:11,demonstr:4,document:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],doe:[3,5],ehri:11,entiti:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],entityrul:[2,4,5],ethic:13,examin:[7,9],exceris:6,exercis:[2,3,4,5,9,10,11,12,13,14],explan:0,extract:1,folder:7,framework:1,gener:9,gensim:9,good:11,holocaust:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],holocaust_ner_lesson:15,how:[3,6],improv:6,introduc:4,introduct:[0,1,4,5,6,8,9,11,12,14,16],kei:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],label:14,languag:0,learn:[3,6],lemmat:[1,12],like:[5,8],limit:2,linguist:13,load:10,locat:14,look:[5,8],machin:[3,6],match:4,math:3,mattingli:16,memori:11,model:[3,6,7,10,14],museum:11,name:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],natur:0,need:8,ner:[0,2,3,6,13,14,16],note:7,notebook:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],noun:1,numer:8,other:4,overview:13,part:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],phrase:1,pipe:14,place:14,prepar:[6,9,12],problem:13,process:0,quick:7,read:8,recognit:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],repres:8,rule:[2,4],save:14,segment:12,sentenc:1,seri:0,set:5,spaci:[1,2,3,4,5,6,7,10,14],speech:1,start:8,state:11,studi:16,supervis:3,techniqu:4,text:8,thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],token:1,toponym:[11,13],train:[5,6],type:3,unit:11,use:[3,8],varianc:4,varieti:12,vector:[8,9,10],verb:1,video:[0,2,3,4,5,6,7,8,9,10,11,12,13,14],what:[0,1,2,3,5,8],when:[2,3],why:[2,8],wikipedia:11,word:[8,9,10],work:3,you:8}})