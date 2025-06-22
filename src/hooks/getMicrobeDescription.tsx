const textSettings =
	"mx-auto text-justify font-sans leading-relaxed tracking-wide text-gray-700";

interface MicrobeDescription {
	name: string;
	description: React.ReactNode;
}

const MicrobeDescriptions: MicrobeDescription[] = [
	{
		name: "Escherichia coli",
		description: (
			<p className={textSettings}>
				<i>E. coli</i> er den vanligste bakteriearten som påvises i blod ved sepsis i Norge. 
				I de fleste tilfeller har infeksjonen utgangspunkt i urinveier eller
				gastrointestinaltraktus, men <i>E. coli</i> kan påvises ved en rekke
				forskjellige kliniske tilstander. Over hele verden ser man raskt økende
				forekomst av <i>E. coli</i> med bredspektret betalaktamaseproduksjon (
				<a
					href="https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/esbl/?term="
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					ESBL
				</a>
				). Slike stammer er resistente mot alle betalaktamer bortsett fra
				meropenem og i noen tilfeller amoxicillin-klavulanat og{" "}
				piperacillin-tazobactam. Det er også økende forekomst av isolater med
				resistens mot ciprofloxacin. Både i Norge og i andre land er det påvist
				meropenemresistente <i>E. coli</i>.
			</p>
		),
	},
	{
		name: "Enterobacter spp.",
		description: (
			<p className={textSettings}>
				<i>E. cloacae</i> er i slekt med <i>E. coli</i>, og i likhet med
				Klebsiella forårsaker denne mikroben ofte infeksjoner i urinveier og
				andre organer hos pasienter på sykehus. Enterobacter er iboende
				resistent mot alle penicilliner (ampicillin, mecillinam), og i mange
				tilfeller vil det også utvikle seg resistens mot cefalosporiner
				(cefuroxim, cefotaxim, ceftazidim) under pågående behandling.
			</p>
		),
	},
	{
		name: "Enterococcus faecalis",
		description: (
			<p className={textSettings}>
				<a
					href="https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/enterokokkinfeksjon/?term="
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					Enterokokker
				</a>{" "}
				påvises vanligvis ved urinveisinfeksjoner, men kan også sees ved
				endokarditt, sepsis og abdominale infeksjoner.
				<i>E. faecalis</i> utgjør tradisjonelt 80 - 90 % av kliniske
				enterokokk-isolater, men andelen av <i>E. faecium</i> er økende.
				Enterokokker er naturlig resistente mot mange antibiotikatyper (
				cefalosporiner, makrolider, klindamycin etc.). Villtypen av enterokokker
				er kun intermediært følsom for aminoglykosider.
				<i>E. faecalis</i> er stort sett alltid følsom for ampicillin, mens{" "}
				<i>E. faecium</i> i de fleste tilfeller har nedsatt følsomhet for
				ampicillin. For begge arter er høygradig gentamicinresistens et stort
				problem. Vankomycinresistens er et økende problem, også i Norge.{" "}
				Linezolid må anvendes med forsiktighet pga. bivirkninger, og
				dokumentasjonen ved alvorlige infeksjoner er mangelfull. Trimetoprim og{" "}
				nitrofurantoin (kun <i>E. faecalis</i>) er bare aktuelt ved ukompliserte
				urinveisinfeksjoner.
			</p>
		),
	},
	{
		name: "Enterococcus faecium",
		description: (
			<p className={textSettings}>
				<a
					href="https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/enterokokkinfeksjon/?term="
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					Enterokokker
				</a>{" "}
				påvises vanligvis ved urinveisinfeksjoner, men kan også sees ved
				endokarditt, sepsis og abdominale infeksjoner.
				<i>E. faecalis</i> utgjør tradisjonelt 80 - 90 % av kliniske
				enterokokk-isolater, men andelen av <i>E. faecium</i> er økende.
				Enterokokker er naturlig resistente mot mange antibiotikatyper (
				cefalosporiner, makrolider, klindamycin etc.). Villtypen av enterokokker
				er kun intermediært følsom for aminoglykosider.
				<i>E. faecalis</i> er stort sett alltid følsom for ampicillin, mens{" "}
				<i>E. faecium</i> i de fleste tilfeller har nedsatt følsomhet for
				ampicillin. For begge arter er høygradig gentamicinresistens et stort
				problem. Vankomycinresistens er et økende problem, også i Norge.{" "}
				Linezolid må anvendes med forsiktighet pga. bivirkninger, og
				dokumentasjonen ved alvorlige infeksjoner er mangelfull. Trimetoprim og{" "}
				nitrofurantoin (kun <i>E. faecalis</i>) er bare aktuelt ved ukompliserte
				urinveisinfeksjoner.
			</p>
		),
	},
	{
		name: "Haemophilus influenzae",
		description: (
			<p className={textSettings}>
				<i>H. influenzae</i> er en bakterieart som finnes normalt i luftveiene
				hos mange mennesker, men i noen tilfeller kan den føre til øyekatarr,
				mellomørebetennelse, strupelokkbetennelse, lungebetennelse eller
				hjernehinnebetennelse. De fleste alvorlige tilfellene var tidligere
				knyttet til serotype B (HiB), men etter innføringen av HiB-vaksine i
				barnevaksinasjonsprogrammet i 1992 er alvorlige infeksjoner med{" "}
				<i>H. influenzae</i> nå sjeldne hos tidligere friske personer. De fleste
				tilfellene av <i>H. influenzae</i> bakteriemi sees hos pasienter med
				kronisk lungesykdom som for eksempel KOLS.
				<i>H. influenzae</i> kan erverve resistens mot penicilliner ved å
				produsere beta-laktamase, mens endringer i bakterienes kromosom kan
				forårsake resistens mot både penicilliner og cefalosporiner. Enkelte
				stammer er multiresistente og derfor svært vanskelige å behandle.
			</p>
		),
	},
	{
		name: "Klebsiella aerogenes",
		description: (
			<p className={textSettings}>
				<em>K. aerogenes</em> (tidligere kjent som{" "}
				<em>Enterobacter aerogenes</em>) er en gram-negativ, fakultativt anaerob
				bakterie som tilhører familien Enterobacteriaceae. Den er en
				opportunistisk patogen som ofte forårsaker sykehusinfeksjoner, inkludert
				urinveisinfeksjoner (UVI), lungebetennelse, blodforgiftning (sepsis) og
				sår- og postoperative infeksjoner. <em>K. aerogenes</em> har høy evne
				til å utvikle multiresistens, særlig i sykehusmiljøer. De viktigste
				resistensmekanismene inkluderer naturlig resistens mot ampicillin og
				andre penicilliner på grunn av kromosombasert beta-laktamase (AmpC), og
				ervervet resistens mot beta-laktam-antibiotika, karbapenem,
				aminoglykosid og fluorokinolon.
			</p>
		),
	},
	{
		name: "Klebsiella oxytoca",
		description: (
			<p className={textSettings}>
				Familien Klebsiella omfatter <em>K. pneumoniae</em>, <em>K. oxytoca</em>{" "}
				og en rekke mindre vanlige arter. Klebsiella forårsaker mange av de
				samme infeksjonstyper som <em>E. coli</em>, men Klebsiella vil i større
				grad forårsake sykehusinfeksjoner og i mindre grad påvises ved
				ukompliserte infeksjoner ervervet utenfor sykehus. Klebsiella er alltid
				resistent mot ampicillin, og forekomsten av ESBL og meropenemresistens
				er ofte høyere enn hos <em>E. coli</em>.
			</p>
		),
	},
	{
		name: "Klebsiella pneumoniae",
		description: (
			<p className={textSettings}>
				Familien Klebsiella omfatter <i>K. pneumoniae</i>, <i>K. oxytoca</i> og
				en rekke mindre vanlige arter. Klebsiella forårsaker mange av de samme
				infeksjonstyper som <i>E. coli</i>, men Klebsiella vil i større grad
				forårsake sykehusinfeksjoner og i mindre grad påvises ved ukompliserte
				infeksjoner ervervet utenfor sykehus. Klebsiella er alltid resistent mot{" "}
				ampicillin, og forekomsten av ESBL og meropenemresistens er ofte høyere
				enn hos <i>E. coli</i>.
			</p>
		),
	},
	{
		name: "Klebsiella spp.",
		description: (
			<p className={textSettings}>
				<em>Klebsiella spp.</em> er en gruppe gram-negative, fakultativt
				anaerobe bakterier i familien Enterobacteriaceae. De finnes naturlig i
				tarmen hos mennesker og dyr, men kan også forårsake alvorlige
				infeksjoner, spesielt i sykehusmiljøer. Viktige arter er{" "}
				<em>K. pneumoniae</em> (den mest klinisk relevante arten, ofte assosiert
				med sykehusinfeksjoner) og <em>K. oxytoca</em> (kan forårsake lignende
				infeksjoner som <em>K. pneumoniae</em>). Andre Klebsiella-arter
				forekommer sjeldnere i kliniske prøver. Typiske infeksjoner er
				urinveisinfeksjoner, lungebetennelse, blodforgiftning og sår- og
				postoperative infeksjoner.
			</p>
		),
	},
	{
		name: "Neisseria meningitidis",
		description: (
			<p className={textSettings}>
				<a
					href="https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/meningokokksykdom/?term="
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					<em>N. meningitidis</em>
				</a>{" "}
				(meningokokker) kan være årsak til bakteriell meningitt og sepsis. Etter
				meningokokkeepidemien på 1970- og 80-tallet er forekomsten i Norge nå på
				et lavt nivå, men spesielt i Afrika og Midt-Østen er tilstanden fortsatt
				epidemisk. Enkelte bakteriestammer kan ha nedsatt følsomhet for
				penicillin G, men for øvrig er meningokokker vanligvis følsomme for
				relevante antibiotika.
			</p>
		),
	},
	{
		name: "Proteus mirabilis",
		description: (
			<p className={textSettings}>
				<em>P. mirabilis</em> er en slektning av <em>E. coli</em> og forårsaker
				i hovedsak urinveisinfeksjoner, spesielt hos pasienter som har
				strukturelle eller funksjonelle endringer i urinveiene som motvirker
				kroppens naturlige forsvarsmekanismer mot infeksjon.
			</p>
		),
	},
	{
		name: "Proteus spp.",
		description: (
			<p className={textSettings}>
				<em>Proteus spp.</em> tilhører familien Enterobacteriaceae. De finnes
				naturlig i jord, vann og i tarmen hos mennesker og dyr, men kan være
				opportunistiske patogener som forårsaker infeksjoner, spesielt i
				sykehusmiljøer. Viktige arter er <em>P. mirabilis</em>,{" "}
				<em>P. vulgaris</em> og <em>P. penneri</em>. Typiske infeksjoner er
				urinveisinfeksjoner, lungebetennelse, sår- og bløtvevsinfeksjoner og
				bakteriemi/sepsis.
			</p>
		),
	},
	{
		name: "Proteus vulgaris",
		description: (
			<p className={textSettings}>
				<em>P. vulgaris</em> tilhører familien Enterobacteriaceae. De finnes
				naturlig i jord, vann og i tarmen hos mennesker og dyr, men kan være
				opportunistiske patogener. <em>P. vulgaris</em> er ofte mer resistent
				enn <em>Proteus mirabilis</em>, noe som gjør behandlingen utfordrende.
				Typisk antibiotikaresistens er naturlig resistens mot nitrofurantoin og
				redusert følsomhet for tetracykliner og kolistin, og ervervet resistens
				mot beta-laktam-antibiotika, karbapenem, aminoglykosid og fluorokinolon.
			</p>
		),
	},
	{
		name: "Pseudomonas aeruginosa",
		description: (
			<p className={textSettings}>
				<em>P. aeruginosa</em> forekommer vanlig i naturen, men kan også være
				årsak til ukompliserte urinveisinfeksjoner og alvorlige infeksjoner hos
				immunsupprimerte pasienter. <em>P. aeruginosa</em> kan spesielt være et
				problem på intensivenheter, brannskadeavdelinger og blant hematologiske
				pasienter. <em>P. aeruginosa</em> er naturlig resistent mot mange
				antibiotikatyper, og i mange land er det også utbredt resistens mot de
				få aktuelle behandlingsalternativene som finnes.
			</p>
		),
	},
	{
		name: "Staphylococcus aureus",
		description: (
			<p className={textSettings}>
				<em>S. aureus</em> er en vanlig årsak til infeksjoner i hud, bløtdeler,
				bein og ledd. I tillegg kan <em>S. aureus</em> påvises ved endokarditt,
				pneumoni, sepsis og en rekke andre infeksjonstilstander. De fleste
				isolatene i stammer fra hudinfeksjoner, og disse kan være ervervet både
				i sykehus og ute i samfunnet. <em>S. aureus</em> i Norge produserer ofte
				en betalaktamase som hydrolyserer penicilliner. Det er imidlertid svært
				få isolater som er resistente mot oxacillin (MRSA).{" "}
				<a
					href="https://www.fhi.no/sm/antibiotikaresistens/om-mrsa/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					MRSA
				</a>{" "}
				er resistente mot alle betalaktamantibiotika inkludert penicilliner,
				cefalosporiner og karbapenemer.
			</p>
		),
	},
	{
		name: "Streptococcus agalactiae",
		description: (
			<p className={textSettings}>
				<em>S. agalactiae</em> - Gruppe B streptokokker (GBS) er spesielt viktig
				som årsak til sepsis, pneumoni, meningitt og andre alvorlige infeksjoner
				hos nyfødte og hos eldre. GBS forekommer normalt i tarmen hos mange
				mennesker og vil ofte være av usikker patologisk betydning hos ellers
				friske personer. De aller fleste stammer er fullt følsomme for
				penicilliner, mens forekomsten av resistens mot erytromycin og
				klindamycin kan variere.
			</p>
		),
	},
	{
		name: "Streptococcus pneumoniae",
		description: (
			<p className={textSettings}>
				<em>S. pneumoniae</em> (
				<a
					href="https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/pneumokokkinfeksjon/?term="
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					pneumokokker
				</a>
				) er en vanlig årsak til infeksjoner både i øvre og nedre luftveier og
				forårsaker blant annet otitis media, sinusitt, konjunktivitt og
				pneumoni. Pneumokokker kan i tillegg være årsak til systemiske
				infeksjoner så som meningitt og sepsis. De fleste tilfellene vil komme
				fra luftveisinfeksjoner ervervet utenfor sykehus. Pneumokokker er
				vanligvis følsomme for penicilliner og cefalosporiner, og selv med noe
				redusert følsomhet for penicillin G er dette førstevalg ved nedre
				luftveisinfeksjoner. Norge har over de siste år hatt en periode med
				forhøyet forekomst av serotyper med resistens mot erytromycin.
			</p>
		),
	},
	{
		name: "Streptococcus pyogenes",
		description: (
			<p className={textSettings}>
				<a
					href="https://www.fhi.no/sm/smittevernhandboka/sykdommer-a-a/streptokokk-gruppe-a-infeksjon/?term="
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 underline"
				>
					<em>S. pyogenes</em>
				</a>{" "}
				- Gruppe A streptokokker (GAS) er den vanligste årsaken til bakteriell
				halsbetennelse, men kan også forårsake infeksjoner i hud, muskulatur og
				indre organer. For de aller fleste er halsbetennelse med GAS en
				ubehagelig men harmløs infeksjon, og mange er asymptomatiske bærere av
				slike bakterier. Hos enkelte pasienter kan imidlertid GAS forårsake et
				akutt sykdomsforløp med omfattende vevsødeleggelse og høy risiko for
				komplikasjoner og død. Enkelte pasienter kan få immunologisk skade på
				nyrer (glomerulonefritt) eller hjerte (giktfeber) etter GAS-infeksjon.
				Penicillin er førstevalg til behandling av GAS og resistens er aldri
				påvist. Ved allergi eller alvorlig sykdom kan behandling med erytromycin
				eller klindamycin være aktuelt.
			</p>
		),
	},
	{
		name: "Acinetobacter baumannii/calcoaceticus complex",
		description: (
			<p className={textSettings}>
				<em>Acinetobacter</em> er en slekt av miljømikrober som har fått økt klinisk betydning 
				de siste tiårene. De kan ofte påvises i fuktige miljøer, og på sykehus er det 
				spesielt alvorlig syke pasienter på intensivavdelinger som rammes. De fleste 
				infeksjonene er i luftveier (spesielt ved respiratorbehandling) og urinveier 
				(spesielt ved urinveiskateter). Det har vært mye uklarhet om inndelingen av{" "}
				<em>Acinetobacter</em>, og eldre litteratur vil ofte bruke <em>Acinetobacter baumannii</em> om 
				en rekke arter som nå har fått egne navn. Alle <em>Acinetobacter</em> er naturlig 
				resistente mot mange antibiotikatyper og erverver også resistens mot de 
				midlene som tradisjonelt har vært brukt. Det er spesielt stor bekymring for 
				spredningen av resistens mot karbapenemer (meropenem).
			</p>
		),
	},
	{
		name: "Acinetobacter lwoffii",
		description: (
			<p className={textSettings}>
				<em>Acinetobacter</em> er en slekt av miljømikrober som har fått økt klinisk betydning 
				de siste tiårene. De kan ofte påvises i fuktige miljøer, og på sykehus er det 
				spesielt alvorlig syke pasienter på intensivavdelinger som rammes. De fleste 
				infeksjonene er i luftveier (spesielt ved respiratorbehandling) og urinveier 
				(spesielt ved urinveiskateter). Det har vært mye uklarhet om inndelingen av 
				<em>Acinetobacter</em>, og eldre litteratur vil ofte bruke <em>Acinetobacter baumannii</em> om 
				en rekke arter som nå har fått egne navn. Alle <em>Acinetobacter</em> er naturlig 
				resistente mot mange antibiotikatyper og erverver også resistens mot de 
				midlene som tradisjonelt har vært brukt. Det er spesielt stor bekymring for 
				spredningen av resistens mot karbapenemer (meropenem).
			</p>
		),
	},
	{
		name: "Acinetobacter spp.",
		description: (
			<p className={textSettings}>
				<em>Acinetobacter</em> er en familie av miljømikrober som har fått økt klinisk betydning 
				de siste tiårene. De kan ofte påvises i fuktige miljøer, og på sykehus er det 
				spesielt alvorlig syke pasienter på intensivavdelinger som rammes. De fleste 
				infeksjonene er i luftveier (spesielt ved respiratorbehandling) og urinveier 
				(spesielt ved urinveiskateter). Det har vært mye uklarhet om inndelingen av 
				<em>Acinetobacter</em>, og eldre litteratur vil ofte bruke <em>Acinetobacter baumannii</em> om 
				en rekke arter som nå har fått egne navn. Alle <em>Acinetobacter</em> er naturlig 
				resistente mot mange antibiotikatyper og erverver også resistens mot de 
				midlene som tradisjonelt har vært brukt. Det er spesielt stor bekymring for 
				spredningen av resistens mot karbapenemer (meropenem).
			</p>
		),
	},
	{
		name: "Bacteroides fragilis gruppen",
		description: (
			<p className={textSettings}>
				<em>Bacteroides</em> er en slekt av Gram negative bakteriearter som finnes naturlig i tarmens økosystem. 
				Mikrobene er anaerobe og trenger derfor ikke oksygen for å leve, og mange arter dør selv ved lave 
				oksygenkonsentrasjoner. Infeksjoner med anaerobe bakterier sees spesielt ved sykdomsprosesser eller 
				inngrep i buken. Slekten deles inn i <em>Bacteroides fragilis gruppen</em> og{" "} 
				<em>Bacteroides non-fragilis gruppen</em>, men dette har liten klinisk betydning. Anaerobe infeksjoner 
				behandles vanligvis med det spesifikt anaerobe middelet metronidazol, eller med mer bredspektrede 
				alternativer som dekker både aerobe og anaerobe mikrober. Det er foreløpig kun rapportert enkelte 
				tilfeller av metronidazolresistens, mens klindamycinresistens er økende i mange land. Overførbar 
				resistens mot karbapenemer (meropenem) er påvist også i Norge.
			</p>
		),
	},
	{
		name: "Bacteroides non-fragilis gruppen",
		description: (
			<p className={textSettings}>
				<em>Bacteroides</em> er en slekt av Gram negative bakteriearter som finnes naturlig i tarmens økosystem. 
				Mikrobene er anaerobe og trenger derfor ikke oksygen for å leve, og mange arter dør selv ved lave 
				oksygenkonsentrasjoner. Infeksjoner med anaerobe bakterier sees spesielt ved sykdomsprosesser eller 
				inngrep i buken. Slekten deles inn i <em>Bacteroides fragilis gruppen</em> og{" "} 
				<em>Bacteroides non-fragilis gruppen</em>, men dette har liten klinisk betydning. Anaerobe infeksjoner 
				behandles vanligvis med det spesifikt anaerobe middelet metronidazol, eller med mer bredspektrede 
				alternativer som dekker både aerobe og anaerobe mikrober. Det er foreløpig kun rapportert enkelte 
				tilfeller av metronidazolresistens, mens klindamycinresistens er økende i mange land. Overførbar 
				resistens mot karbapenemer (meropenem) er påvist også i Norge.
			</p>
		),
	},
	{
		name: "Citrobacter freundii complex",
		description: (
			<p className={textSettings}>
				<em>Citrobacter</em> er beslektet med blant andre <em>Escherichia coli</em>,{" "}
				<em>Klebsiella spp.</em> og <em>Enterobacter spp.</em> innenfor familien <em>Enterobacteriaceae</em>. 
				I likhet med andre Gram negative tarmbakterier kan de forårsake infeksjoner i urinveiene og i 
				buken, spesielt ved underliggende sykdom eller kirurgiske inngrep. Mange arter innenfor{" "}
				<em>Citrobacter</em> har naturlig høy produksjon av AmpC-enzymer tilsvarende 
				Enterobacter, og de er da resistente mot ulike beta-laktamantibiotika inkludert cefalosporiner.{" "}
				<em>Citrobacter</em> kan ofte motta og overføre resistensgener til andre beslektede mikrober.
			</p>
		),
	},
	{
		name: "Citrobacter spp.",
		description: (
			<p className={textSettings}>
				<em>Citrobacter</em> er beslektet med blant andre <em>Escherichia coli</em>,{" "}
				<em>Klebsiella spp.</em> og <em>Enterobacter spp.</em> innenfor familien <em>Enterobacteriaceae</em>. 
				I likhet med andre Gram negative tarmbakterier kan de forårsake infeksjoner i urinveiene og i 
				buken, spesielt ved underliggende sykdom eller kirurgiske inngrep. Mange arter innenfor{" "}
				<em>Citrobacter</em> har naturlig høy produksjon av AmpC-enzymer tilsvarende 
				Enterobacter, og de er da resistente mot ulike beta-laktamantibiotika inkludert cefalosporiner.{" "}
				<em>Citrobacter</em> kan ofte motta og overføre resistensgener til andre beslektede mikrober.
			</p>
		),
	},
	{
		name: "Clostridium spp.",
		description: (
			<p className={textSettings}>
				<em>Clostridium</em> er en slekt av Gram positive bakteriearter som finnes naturlig i tarmens økosystem. 
				Mikrobene er anaerobe og trenger derfor ikke oksygen for å leve, og mange arter dør selv ved lave 
				oksygenkonsentrasjoner. Infeksjoner med anaerobe bakterier sees spesielt ved sykdomsprosesser eller inngrep 
				i buken. Slekten omfatter mange ulike arter med varierende følsomhet for antibiotika. Anaerobe infeksjoner 
				behandles vanligvis med det spesifikt anaerobe middelet metronidazol, eller med mer bredspektrede alternativer 
				som dekker både aerobe og anaerobe mikrober. En del arter innenfor <em>Clostridium</em> har redusert følsomhet for 
				metronidazol, og det er også påvist tilfeller av resistens mot mer bredspektrede midler.
			</p>
		),
	},
	{
		name: "Cutibacterium acnes",
		description: (
			<p className={textSettings}>
				<em>Cutibacterium acnes</em> (tidligere <em>Propionibacterium acnes</em>) vokser best ved redusert 
				oksygenkonsentrasjon, men er ikke egentlig anaerob. Den er derfor ikke følsom for metronidazol.{" "}
				<em>C. acnes</em> finnes naturlig i dype hudstrukturer som hårfollikler, og mikroben er assosiert 
				med aknesykdom hos predisponerte individer. <em>C. acnes</em> kan også påvises ved infeksjon i 
				ortopediske proteser og andre fremmedlegemer. Ved funn i blodkultur er det ofte spørsmål om forurensing. 
				Bortsett fra metronidazol er <em>C. acnes</em> vanligvis følsom for alle aktuelle antibiotika.
			</p>
		),
	},
	{
		name: "Fusobacterium spp.",
		description: (
			<p className={textSettings}>
				<em>Fusobacterium</em> er en slekt av Gram negative bakteriearter som finnes naturlig både i munnhulen 
				og i tarmen. Mikrobene er anaerobe og trenger derfor ikke oksygen for å leve, og mange arter dør selv 
				ved lave oksygenkonsentrasjoner. Infeksjoner med <em>Fusobacterium</em> sees både i hode/hals og i buken. 
				Periodontitt, peritonsillære abscesser og Lemiérre syndrom er ofte forårsaket av <em>Fusobacterium spp</em>. 
				De fleste stammene er følsomme for aktuelle antibiotika inkludert penicillin, metronidazol og klndamycin, 
				men resistens kan forekomme.
			</p>
		),
	},
	{
		name: "Serratia marcescens",
		description: (
			<p className={textSettings}>
				<em>Serratia</em> er beslektet med blant andre <em>Escherichia coli</em>, <em>Klebsiella spp.</em> og{" "}
				<em>Enterobacter spp.</em> innenfor familien <em>Enterobacteriaceae</em>. I likhet med andre Gram negative 
				tarmbakterier kan de forårsake infeksjoner i urinveiene og i buken, spesielt ved underliggende sykdom eller 
				kirurgiske inngrep. <em>Serratia</em> har naturlig høy produksjon av AmpC-enzymer tilsvarende <em>Enterobacter</em>, 
				og de er da resistente mot mange beta-laktamantibiotika inkludert cefalosporiner. Serratia kan ofte motta og 
				overføre resistensgener til andre beslektede mikrober.
			</p>
		),
	},
	{
		name: "Serratia spp.",
		description: (
			<p className={textSettings}>
				<em>Serratia</em> er beslektet med blant andre <em>Escherichia coli</em>, <em>Klebsiella spp.</em> og{" "}
				<em>Enterobacter spp.</em> innenfor familien <em>Enterobacteriaceae</em>. I likhet med andre Gram negative 
				tarmbakterier kan de forårsake infeksjoner i urinveiene og i buken, spesielt ved underliggende sykdom eller 
				kirurgiske inngrep. <em>Serratia</em> har naturlig høy produksjon av AmpC-enzymer tilsvarende <em>Enterobacter</em>, 
				og de er da resistente mot mange beta-laktamantibiotika inkludert cefalosporiner. Serratia kan ofte motta og 
				overføre resistensgener til andre beslektede mikrober.
			</p>
		),
	},
	{
		name: "Staphylococcus lugdunensis",
		description: (
			<p className={textSettings}>
				<em>Lugdunensis</em> er mindre sykdomsfremkallende enn <em>S. aureus</em>, men sees oftere ved sårinfeksjoner 
				enn andre såkalt hvite (koagulase negative) stafylokokker. Mikroben har derfor en mellomstilling innenfor gruppen 
				av stafylokokker. Over de senere år er det økende interesse for betydningen av <em>S. lugdunensis</em> som årsak 
				til sykdom. Resistensmekanismene er de samme som for øvrige stafylokokker, men det finnes lite overvåkingsdata 
				man kan sammenlikne med.
			</p>
		),
	},
	{
		name: "Streptococcus dysgalactiae",
		description: (
			<p className={textSettings}>
				<em>Dysgalactiae</em> er beta-hemolytiske streptokokker som har C eller G antigen og derfor benevnes gruppe C eller 
				gruppe G streptokokker. Det er nå vist at det er snakk om samme art, men med en underart{" "}
				(<em>S. dysgalactiae</em> subspecies <em>equisimilis</em>) som vanligvis påvises hos mennesker og en annen{" "}
				(<em>S. dysgalactiae</em> subspecies <em>dysgalactiae</em>) som nesten bare påvises hos dyr.{" "}
				<em>S. dysgalactiae</em> forårsaker stort sett de samme typer infeksjoner som <em>S. pyogenes</em> (gruppe A streptokokker), 
				dvs halsbetennelse, sårinfeksjoner og sepsis. Det er ikke påvist resistens mot penicillin, men forekomsten 
				av resistens mot makrolider (erytromycin), klindamycin og tetracyklin er på rundt 10-20%.
			</p>
		),
	},
] as const;

export function getDescription(name: string) {
	const microbe = MicrobeDescriptions.find((it) => it.name === name);
	return microbe ? microbe.description : null;
}
