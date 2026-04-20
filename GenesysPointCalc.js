function clearFields(){
	document.getElementById('outputText').value = ""
	document.getElementById('score').textContent = "Score: 0"
	document.getElementById("deckList").value = "";
}

function runFunction(){


	const mydict={"acasefork9":20,"abyssdweller":100,"adamancipatorrisendragite":20,"agidotheancientsentinel":50,"albionthebrandeddragon":5,"albionthesanctifiredragon":33,"allureofdarkness":5,"amenohabakirinomitsurugi":100,"amorphactorpaintheimaginationdracoverlord":100,"ancientgearadvance":33,"ancientgearstatue":33,"andthebandplayedon":100,"angelo7":100,"antispellfragrance":100,"appointeroftheredlotus":50,"arcanaforcexxitheworld":100,"archlordkristya":100,"archnemeseseschatos":100,"archnemesesprotos":100,"artifactscythe":100,"ashblossomjoyousspring":15,"assaultsynchron":1,"astralkuriboh":3,"atlanteandragoons":40,"azaminailiasilvia":20,"azaminamurcielago":33,"bahamutshark":81,"banquetofmillions":51,"baronnedefleur":80,"barrierofthevoicelessvoice":20,"barrierstatueoftheabyss":70,"barrierstatueoftheabyss":70,"barrierstatueofthedrought":70,"barrierstatueoftheheavens":70,"barrierstatueoftheinferno":70,"barrierstatueofthestormwinds":70,"barrierstatueofthetorrent":70,"beatriceladyoftheeternal":100,"beelzeofthediabolicdragons":100,"bigwelcomelabrynth":20,"blackgarden":51,"blackwingboreastormthewickedwind":20,"blackwingzephyrostheelite":13,"blackwingedassaultdragon":1,"blasterdragonrulerofinfernos":7,"blazefenixtheburningbombardmentbird":70,"blazingcartesiathevirtuous":3,"blockdragon":33,"bonfire":33,"bookofeclipse":5,"bookofmoon":7,"brainresearchlab":100,"bramblerosedragon":1,"brandedexpulsion":33,"brandedfusion":40,"brandedlost":66,"brilliantfusion":33,"browwhuntsmanofdarkworld":3,"butterflydaggerelma":1,"bystialbaldrake":30,"bystialdispater":10,"bystialdruiswurm":30,"bystialmagnamhut":33,"bystialsaronir":20,"calledbythegrave":20,"carddestruction":40,"cardofdemise":40,"cardofsafereturn":33,"catapultturtle":100,"centurionauxila":33,"centurionprimera":2,"centuriontrudea":1,"chainstrike":50,"changeofheart":10,"chaofengphantomoftheyangzing":13,"chaosangel":20,"chaosrulerthechaoticmagicaldragon":50,"chaosspace":40,"chargeofthelightbrigade":25,"chickengame":7,"coldwave":100,"confiscation":100,"contactc":100,"cornfieldcoatl":33,"cosmicblazardragon":21,"creatureswap":1,"crimsondragon":80,"crossoutdesignator":20,"crystroninclusion":25,"crystronsulfador":5,"cyberangelbenten":40,"cyberdragoninfinity":20,"cyberjar":33,"cyberstein":27,"dddynamite":51,"dddduodawnkingkaliyuga":77,"dddwavehighkingcaesar":20,"daigustoemeral":1,"dangerbigfoot":3,"dangerchupacabra":3,"dangerdogman":3,"dangermothman":3,"dangernessie":7,"dangerogopogo":3,"dangerthunderbird":3,"dangerjackalope":7,"dangertsuchinoko":7,"darkendevaporationdragon":1,"darkhole":3,"darkworldarchives":5,"darkworlddealings":5,"deceptionofthesinfulspoils":40,"decklockdown":100,"deepseaaria":33,"delinquentduo":100,"demiseoftheland":1,"denglongfirstoftheyangzing":20,"denkosekka":20,"destinyherodestroyerphoenixenforcer":20,"destinyheroplasma":20,"destructivedarumakarmacannon":3,"diabellqueenofthewhiteforest":25,"diabellstartheblackwitch":20,"differentdimensionground":10,"dimensionfusion":40,"dimensionshifter":10,"dimensionalbarrier":100,"dinomorphiadomain":1,"dinomorphiafrenzy":1,"dinomorphiaintact":1,"dinomorphiarexterm":91,"dinowrestlerpankratops":10,"divinearsenalaazeusskythunder":20,"divineroftheherald":33,"djinnreleaserofrituals":100,"dodododowarrior":70,"dogmatikaecclesiathevirtuous":3,"domainofthetruemonarchs":50,"dominusimpulse":20,"dominuspurge":10,"dracotailarthalion":20,"dracotailfaimena":30,"dracotailflame":3,"dracotailmululu":5,"dragonmastermagia":100,"dragonicdiagram":33,"dragonmaidsheou":10,"dragonmaidtidying":5,"dragonsbind":100,"dragonslightanddarkness":3,"dragonsmind":7,"drolllockbird":25,"drytronalphathuban":33,"drytronmubetafafnir":33,"duality":3,"earthboundimmortalasllapiscu":51,"eclipsewyvern":33,"effectveiler":7,"elshaddollapkallone":10,"elshaddollwinda":60,"elderentitynorden":91,"elderentityntss":7,"elementalherostratos":3,"elzetteazaminaofthewhiteforest":22,"emergencyteleport":35,"emergency":33,"eva":1,"evenlymatched":10,"evigishkigustkraken":100,"evigishkimindaugus":1,"evilswarmouroboros":100,"evolzarlars":20,"exosistermikailis":10,"exosisterpax":10,"expurrelynoir":33,"extryzeal":25,"fadawndragster":20,"fairytailsnow":85,"fiberjar":30,"filiaregis":10,"finalcountdown":100,"fireformationtenki":35,"firekingcourtierulcanix":20,"firekinghighavatarkirin":10,"fishborgblaster":33,"floowandereezerobina":33,"floowandereezeandtheadventofadventure":33,"floowandereezeandthemagnificentmap":33,"flyingc":7,"foolishburial":33,"foolishburialgoods":7,"forbiddenchalice":5,"forbiddendroplet":10,"forbiddenlance":3,"fossildig":35,"fossildynapachycephalo":100,"frightfurpatchwork":33,"fusiondestiny":33,"gagagagagirl":15,"galaxyphotondragon":15,"gallantgranite":33,"gatewayofthesix":100,"gemknightladylapislazuli":51,"gemknightmasterdiamond":66,"ghostbellehauntedmansion":5,"ghostmeetsgirlamasterfulmayakashishiranuisaga":100,"ghostmournermoonlitchill":3,"ghostogresnowrabbit":3,"ghostsisterspookydogwood":3,"gianttrunade":40,"giganticspright":20,"gimmickpuppetnightmare":70,"gishkiaquamirror":1,"gishkinekromirror":1,"giveandtake":91,"gladiatorbeasttamereditor":80,"glowupbulb":21,"goblinbikerbiggabonga":15,"goblinbikergrandbreakout":7,"goblinbikergrandentrance":20,"goldsarcophagus":10,"gozenmatch":100,"gracefulcharity":40,"graphadragonlordofdarkworld":5,"graphadragonoverlordofdarkworld":5,"grisailleprison":10,"guardianchimera":33,"guidingquemthevirtuous":3,"harpiesfeatherduster":15,"harpiesfeatherstorm":100,"heartoftheblueeyes":5,"heatwave":100,"heavystorm":10,"hecahandsgaigas":5,"hecahandsxeno":10,"heraldofthearclight":50,"hotreddragonarchfiendabyss":20,"hotreddragonarchfiendkingcalamity":21,"hyperrankupmagicutopiforce":1,"iceryzeal":20,"ichikisayorihime":5,"idothesuprememagicalforce":100,"imperialorder":100,"imsetygloryofhorus":33,"incredibleecclesiathevirtuous":3,"infernalflamebanshee":33,"infernitylauncher":88,"infiniteimpermanence":13,"inspectorboarder":20,"instantfusion":100,"interruptedkaijuslumber":33,"intothevoid":3,"invokedcaliga":100,"ironthunder":5,"jetsynchron":1,"jowgenthespiritualist":100,"junkspeeder":100,"k904noroi":15,"k917ripper":30,"k917izuna":20,"k966ajokul":33,"k9lupis":5,"k9xwerewolf":10,"kaisercolosseum":100,"kashtiraariseheart":97,"kashtirafenrir":30,"kashtiraunicorn":30,"kelbektheancientvanguard":50,"keldothesacredprotector":1,"ketudracotail":15,"kewltuneclip":5,"kewltunecue":5,"kingoftheferalimps":33,"kingssarcophagus":33,"knightarmeddragonthearmoredknightdragon":3,"knightmarecorruptoriblee":100,"koakimeirudrago":75,"koakimeiruguardian":3,"koakimeiruoverload":3,"koakimeirusandman":3,"koakimeiruwall":3,"ladylabrynthofthesilvercastle":40,"ladysdragonmaid":10,"laevateingeneraiderbossofshadows":1,"lastturn":100,"lastwill":100,"lavalvalchain":80,"leftarmoffering":7,"legendaryfirekingponix":10,"legendarylordsixsamuraishien":10,"legendarysixsamuraishien":10,"leveleater":100,"lifeequalizer":100,"lightanddarknessdragonlord":20,"lightbarrier":1,"lightendsublimationdragon":1,"lightningstorm":20,"lightsworndragonling":10,"lonefireblossom":33,"lose1turn":100,"lubellionthesearingdragon":10,"lunalightligerdancer":51,"lyriluscberylcanary":5,"lyriluscbirdcall":20,"lyriluscindependentnightingale":1,"magicalexplosion":75,"magicalmidbreakerfield":60,"magicalscientist":95,"magicianofblackchaosmax":100,"magicianssouls":15,"majestysfiend":100,"manjuofthetenthousandhands":1,"mansionofthedreadfuldolls":100,"maskedherodarklaw":70,"masqueradetheblazingdragon":16,"massdriver":100,"masterpeacethetruedracoslayingking":33,"mathmechcircular":15,"mathmechsigma":7,"maxxc":50,"megalithanastasis":33,"mementomictlantecuhtlicacreationking":33,"mementotlanboneparty":33,"mementotlantwindragon":33,"metamorphosis":5,"metaverse":3,"mikankowaterarabesque":10,"millenniumankh":3,"minddrain":100,"mindmaster":1,"mirrorjadetheicebladedragon":10,"miscellaneousaurus":75,"mistake":100,"mitsurugiprayers":51,"mitsurugiritual":51,"monstergate":50,"monsterreborn":5,"morphingjar":33,"morphtronictelefon":55,"moulinglaciatheelementallord":100,"mudoratheswordoracle":1,"mulcharmyfuwalos":7,"mulcharmymeowls":3,"mulcharmypurulia":10,"multiuniverse":3,"mxsaberinvoker":33,"mysticmine":100,"nashknight":15,"nadirservant":20,"naturiabarkion":10,"naturiabeast":50,"naturiaexterio":100,"necrovalley":40,"neptabysstheatlanteanprince":33,"nervathepowerpatronofcreation":5,"nibirutheprimalbeing":6,"nightmareapprentice":20,"nightmarethrone":25,"nohpunkfoxytune":5,"number1infectionbuzzking":85,"number1numerongateekam":10,"number100numerondragon":21,"number16shockmaster":100,"number2numerongatedve":10,"number3cicadaking":10,"number3numerongatetrini":10,"number38hopeharbingerdragontitanicgalaxy":20,"number4numerongatecatvari":10,"number40gimmickpuppetofstrings":50,"number41bagooskatheterriblytiredtapir":100,"number43manipulatorofsouls":100,"number59crookedcook":100,"number60dugaresthetimeless":10,"number67pairadicesmasher":67,"number69heraldrycrest":1,"number75bamboozlinggossipshadow":70,"number86heroicchampionrhongomyniad":68,"number89diablosisthemindhacker":85,"number90galaxyeyesphotonlord":10,"number95galaxyeyesdarkmatterdragon":50,"number97draglubion":80,"number99utopiadragonar":80,"numberc1numeronchaosgatesunya":10,"numberc40gimmickpuppetofdarkstrings":50,"numberf0utopicdracofuture":20,"numbers0utopiczexal":100,"numberseveil":70,"numeroncalling":30,"numeronnetwork":33,"obedienceschooled":40,"ohimethemanifestedmikanko":33,"ojamaduo":2,"ojamatrio":3,"onedayofpeace":11,"oneforone":91,"onomatopaira":33,"originalsinfulspoilssnakeeye":100,"outerentityazathot":100,"punkjamdragondrive":15,"painfulchoice":95,"phantomfortressenterblathnir":13,"phantomknightsrankupmagicforce":1,"phantomofyubel":76,"pilgrimreaper":50,"planetpathfinder":3,"potofdesires":20,"potofextravagance":10,"potofgreed":30,"potofprosperity":40,"powersinkstone":100,"prematureburial":3,"preparationofrites":5,"prepreparationofrites":10,"pressuredplanetwraitsoth":33,"primathmechalembertian":20,"primevalplanetperlereino":50,"primitelordlylode":33,"prohibition":100,"pseudospace":3,"psiblocker":61,"psychicendpunisher":20,"psyframegeardelta":7,"psyframegearepsilon":7,"psyframegeargamma":15,"psyframelordomega":100,"purrely":10,"purrelysleepymemory":10,"purrelyly":7,"qqenneagon":1,"question":11,"quicklaunch":33,"radianttyphoonchant":10,"radianttyphooneldam":7,"raigeki":7,"rankupmagictheseventhone":1,"rankupmagicadmirationofthethousands":1,"rankupmagicargentchaosforce":5,"rankupmagicastralforce":1,"rankupmagicbariansforce":1,"rankupmagiccipherascension":1,"rankupmagicdoomdoubleforce":1,"rankupmagiclimitedbariansforce":1,"rankupmagicmagicalforce":1,"rankupmagicnumeronforce":1,"rankupmagicquickchaos":1,"rankupmagicraidforce":1,"rankupmagicraptorsforce":1,"rankupmagicrevolutionforce":1,"rankupmagicskipforce":5,"rankupmagicsoulshaveforce":5,"rankupmagiczexalforce":1,"rasdisciple":1,"reasoning":50,"redreboot":50,"redeyesblackfullmetaldragon":33,"redeyesdarkdragoon":100,"redeyesflaremetaldragon":1,"redoxdragonrulerofboulders":7,"regenesis":33,"reinforcementofthearmy":35,"rescueaceairlifter":5,"rescueaceimpulse":5,"rescueacepreventer":10,"retaliatingc":5,"returnfromthedifferentdimension":40,"returnofthedragonlords":7,"reversalquiz":100,"riserankupmagicraidraptorsforce":1,"ritualbeasttamerelder":10,"rivalryofwarlords":100,"ronintoadin":60,"royaldecree":10,"royalmagicallibrary":100,"royaloppression":100,"runicktip":10,"ryzealdetonator":20,"ryzealduodrive":20,"salesban":100,"sangenkaimen":50,"sangensummoning":100,"sauravistheancientandascended":3,"schwarzschildinfinitydragon":33,"secretvillageofthespellcasters":100,"selfdestructbutton":100,"sengenjinwakesfromamillennium":33,"senjuofthethousandhands":1,"setrotation":33,"shaddollschism":10,"shienssmokesignal":33,"shootingriserdragon":33,"sillvawarlordofdarkworld":100,"sixthsense":65,"skilldrain":100,"smokegrenadeofthethief":87,"snatchsteal":5,"snowwunlightofdarkworld":33,"solemnjudgment":7,"solemnscolding":5,"solemnstrike":5,"solemnwarning":5,"songsofthedominators":10,"soulcharge":50,"souldrain":100,"speedroidterrortop":7,"spellcanceller":20,"spiritualbeasttamerlara":10,"sprightstarter":10,"standupcenturion":5,"starseraphscepter":5,"starseraphsovereignty":5,"stardustsifrdivinedragon":21,"starliegeseyfert":33,"straypurrelystreet":5,"substitoad":60,"subterrorguru":5,"summonlimit":100,"superpolymerization":13,"superquantalmechkinggreatmagnus":33,"superstarslayertyphonskycrisis":10,"supremekingdragonstarvingvenom":1,"swapfrog":33,"swordryzeal":20,"swordsoulemergence":10,"swordsoulgrandmasterchixiao":33,"swordsoulstrategistlongyuan":5,"tghyperlibrarian":33,"tearlamentshavnis":50,"tearlamentskitkallos":50,"tearlamentsmerrli":50,"tearlamentsreinoheart":50,"tearlamentsscheiren":50,"telekineticchargingcell":100,"tellarknightptolemaeus":100,"tempestdragonrulerofstorms":7,"tenpaidragonchundra":50,"tenpaidragongenroku":25,"tenyispiritashuna":3,"terraforming":33,"thatgrasslooksgreener":50,"theblackgoatlaughs":10,"thebystiallubellion":30,"thedragonthatdevoursthedogma":5,"thefallenthevirtuous":40,"theforcefulsentry":100,"thegatesofdarkworld":5,"thelastwarriorfromanotherplanet":100,"themelodyofawakeningdragon":33,"themonarchserupt":50,"thephantomknightsrankupmagiclaunch":1,"thetyrantneptune":100,"theunstoppableexodiaincarnate":20,"thezombievampire":50,"therecanbeonlyone":100,"therionkingregulus":20,"thunderdragoncolossus":67,"thunderkingraioh":20,"tidaldragonrulerofwaterfalls":7,"toadallyawesome":20,"totembird":10,"tourguidefromtheunderworld":3,"transactionrollback":7,"trapdustshoot":94,"trapholic":7,"traptrick":3,"traptrixrafflesia":20,"treasuresofthekings":5,"tribrigademercourier":5,"tripletacticstalent":93,"tripletacticsthrust":13,"trishuladragonoftheicebarrier":13,"truekingofallcalamities":100,"tyrantstirade":100,"ultimayatzolkin":100,"unionhangar":25,"upstartgoblin":3,"vanitysemptiness":100,"vanitysfiend":100,"vanitysruler":100,"vanquishsoulholliesue":33,"vanquishsouljiaolong":11,"vanquishsoulrazen":11,"varudrasthefinalbringeroftheendtimes":20,"virtualworldkyubishenshen":20,"virtualworldmaihimelulu":3,"wanderinggryphonrider":50,"wantedseekerofsinfulspoils":33,"welcomelabrynth":20,"windupcarrierzenmaity":15,"winduphunter":86,"wishesforeyesofblue":33,"witchofthewhiteforest":33,"worldlegacymonstrosity":1,"zaborgthemegamonarch":80,"zoodiacbarrage":33,"zoodiacbroadbull":66,"zoodiacdrident":20,"zoodiacratpier":50,"fallenofthewhitedragon":30,"elfnotepowerpatron":15,"artmagenonfinito":15,"spentathemagistussealer":15,"shiinatwintempestsofcelestialthunder":10,"zalentheshackleddragon":10,"k9xripperm":10,"forbiddencrown":10,"mercuriumthelivingquicksilver":10,"ecclesiaandthedarkdragon":3
		};
	
	const textarea = document.getElementById("deckList").value;
	const handler = pickHandler(textarea);
	const entries = handler.parse(textarea);
	console.log(`Parsed ${entries.length} card entries using handler: ${handler.name}`);

	let deckSum = 0;
	const outputLines = [];

	for (const { copies, cardName } of entries) {
		const key = cardName.toLowerCase().replace(/\W/g, '');
		const score = mydict.hasOwnProperty(key) ? parseInt(mydict[key], 10) : 0;
		console.log(`${copies} copies of ${cardName} (Score: ${score})`);
		if (score > 0) {
			outputLines.push(`${copies} copies of ${cardName} (Score: ${score})`);
		}
		deckSum += score * copies;
	}

	console.log(`\nYour deck's score is: ${deckSum}`);
	document.getElementById('outputText').value = outputLines.join('\n') + '\n';
	document.getElementById('score').textContent = "Score: " + `${deckSum}`;
}

// --- Deck list format handlers ---------------------------------------------
//
// Each handler recognizes one deck management tool's export format. To add a
// new tool, append a handler to DECK_HANDLERS with:
//   - name:    display name, shown in console logs
//   - matches: (text) => bool   — returns true if this format is detected
//   - parse:   (text) => [{ copies: number, cardName: string }, ...]
//
// Handlers are tried in order; the Edopro handler is last and acts as the
// default fallback for anything that doesn't positively identify as another
// format.

const YGOPRODECK_HANDLER = {
	name: "YGOPRODECK",
	// YGOPRODECK "Export to List" prepends a "// Yu-Gi-Oh! Deck List" comment
	// and splits cards into "== MONSTER CARDS (N cards) ==" sections.
	matches(text) {
		return /^\s*\/\/\s*Yu-Gi-Oh!/m.test(text) || /^\s*==\s+.+\s+==/m.test(text);
	},
	parse(text) {
		const entries = [];
		for (const raw of text.split('\n')) {
			const line = raw.replace(/(\r\n|\n|\r)/gm, "").trim();
			if (!line) continue;
			if (line.startsWith("//")) continue;      // comment
			if (line.startsWith("==")) continue;      // section header
			const entry = parseCountedCardLine(line);
			if (entry) entries.push(entry);
		}
		return entries;
	},
};

const EDOPRO_HANDLER = {
	name: "Edopro",
	// Edopro "Export Plaintext" produces a "Deck: <name>" header followed by
	// "N Card Name" lines. Used as the default handler, so always matches.
	matches(_text) { return true; },
	parse(text) {
		const entries = [];
		for (const raw of text.split('\n')) {
			const line = raw.replace(/(\r\n|\n|\r)/gm, "").trim();
			if (!line) continue;
			if (line.includes("Deck:")) continue;
			const entry = parseCountedCardLine(line);
			if (entry) entries.push(entry);
		}
		return entries;
	},
};

const DECK_HANDLERS = [YGOPRODECK_HANDLER, EDOPRO_HANDLER];

function pickHandler(text) {
	return DECK_HANDLERS.find(h => h.matches(text)) || EDOPRO_HANDLER;
}

// Parses "<count> <card name>" (e.g. "3 Ash Blossom & Joyous Spring"). Returns
// null for anything that doesn't start with a digit so junk lines never poison
// the score with NaN.
function parseCountedCardLine(line) {
	const match = line.match(/^(\d+)\s+(.+)$/);
	if (!match) return null;
	return { copies: parseInt(match[1], 10), cardName: match[2].trim() };
}