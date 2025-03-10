document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
        if (body.classList.contains("light-theme")) {
            themeIcon.textContent = "☀️";
            body.style.color = "orange";
        } else {
            themeIcon.textContent = "🌙";
            body.style.color = "";
        }
    });

    // Generate 20 content cards
    const contentContainer = document.getElementById("content-container");
  
    const recipes = Array.from({ length: 20 }, _ => ({
        name: ``,
        image: ``,
        ingredients: [],
        instructions: "",
    }));

   

    function renderRecipes() {
        contentContainer.innerHTML = "";
        recipes.forEach(recipe => {
            const card = document.createElement("div");
            card.classList.add("component");
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" class="card-image">
                <h3>${recipe.name}</h3>
                <button class="expand-btn">Plačiau</button>
                <div class="expanded-content">
                    <h4>Ingredientai:</h4>
                    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
                    <h4>Paruošimo būdas:</h4>
                    <p>${recipe.instructions}</p>
                </div>
            `;

            contentContainer.appendChild(card);

            const expandBtn = card.querySelector(".expand-btn");
            const expandedContent = card.querySelector(".expanded-content");
            expandBtn.addEventListener("click", () => {
                document.querySelectorAll(".expanded-content").forEach(content => {
                    if (content !== expandedContent) {
                        content.style.display = 'none';
                        content.previousElementSibling.textContent = 'Plačiau';
                    }
                });

                if (expandedContent.style.display === 'none') {
                    expandedContent.style.display = 'block';
                    expandBtn.textContent = 'Mažiau';
                } else {
                    expandedContent.style.display = 'none';
                    expandBtn.textContent = 'Plačiau';
                }
            });
        });
    }

    // Initial rendering
    renderRecipes();
    
    window.addRecipe = function(name, image, ingredients, instructions) {
        for (let i = recipes.length - 1; i >= 0; i--) 
            if (!recipes[i].name || !recipes[i].image || recipes[i].ingredients.length === 0 || !recipes[i].instructions) 
                recipes.splice(i, 1);
        recipes.push({ name, image, ingredients, instructions });
        renderRecipes();
    };
    
    // one ==================================================================================================
    addRecipe("GREITAS OBUOLIŲ PYRAGAS", 'img/01.jpg', ["Tešlai:", 
        "700 gramų obuolių (jau nuluptų, be sėklų)",
        "3 vienetai kiaušinių",
        "150 gramų miltų",
        "120 gramų cukraus",
        "100 mililitrų pieno",
        "3 šaukštai aliejaus (bekvapio)",
        "2 šaukšteliai kepimo miltelių",
        "1 žiupsnelis druskos",
        "šiek tiek vanilės aromato",
        " ",
        "Viršui:",
        "1 vienetas	kiaušinių",
        "75 gramai cukraus",
        "50 gramų sviesto (tirpinto)"
    ], `
        1.	Tešlai cukrų, vanilę ir kiaušinius išplakti iki putų. Suberti miltus, kepimo miltelius, druską ir išmaišyti. Supilti pieną ir aliejų, išmaišyti.
        2.	Obuolius nulupti, išpjauti sėklalizdžius ir supjaustyti skiltelėmis. Įmaišyti į tešlą.
        3.	Tešlą supilti į kepimo popieriumi išklotą formą. Kepti iki 200 C laipsnių įkaitintoje orkaitėje 30 minučių.
        4.	Kol pyragas kepa, pasiruošiame užpilą viršui: sviestą ištirpinti ir truputį atvėsinti, išmašyti su cukrumi ir kiaušiniu. Užpilti ant pyrago. Kepti dar 10-12 min.
        5.	Iškepusį palikti 10 min., pravėsti kepimo formoje, tik tuomet pjaustyti.`);
    // two ====================================================================================================
    addRecipe("GREITA LAZANIJA", 'img/02.jpg', ['Lazanijos lakštai',
        '300 g kiaulienos',
        'Druska',
        'Pipirai',
        '3 skiltelės česnako',
        '3 šaukštai pomodorų padažo',
        '300 g fermentinio sūrio',
        'Petražolės',
        '1 stiklinė pieno',
        '2 kiaušiniai',
        '2 šaukštai majonezo'
        ],`Kiaulieną pakepiname su prieskoniais ir smulkintais česnakais ir pagardiname pomidorų padažu. Sūrį sutarkuojame ir sumaišome su išplaktais kiaušiniais, smulkintomis petražolėmis, pienu ir majonezu bei pagardiname prieskoniais.
        Į pasirinkto dydžio kepimo indą pilame šiek tiek aliejaus, tuomet visą dugną padengiame lazanijos lakštais, juos padengiame mėsos mase, tuomet pilame gausiai sūrio ir pieno masę, tuomet vėl dedame lazanijos lakštus, ir taip sluoksniuojame, kol nebeliks produktų. Viršutinis sluoksnis turi būti lazanijos lakštų aplietų sūrio mase. Kepame orkaitėje 180 0C apie 1 valandą. Skanaus :)`);
    // three ====================================================================================================
    addRecipe("Greitasis apkepas", 'img/03.jpg', ['1 kg bulvių',
        '600 g įvairios rūkytos mėsos',
        '1 didelis svogūnas',
        '2 kiaušiniai',
        '0,75 stiklinės grietinės',
        '150 g fermentinio sūrio',
        'krapų',
        'mairūno (Kvapusis mairūnas)',
        'druskos',
        'pipirų'
    ], `Bulves išvirti su lupenomis, nulupti ir supjaustyti ritinėliais. Rūkytą mėsą ir svogūną supjaustyti ir pakepinti taukuose. Taukais išteptame atspariame karščiui inde dėti sluoksniais bulves ir rūkytą mėsą su svogūnu. Kiaušinius išmaišyti su grietine, paskaninti druska ir pipirais. Tuo padažu užpilti patiekalą, viršų pabarstyti sutarkuotu sūriu ir žiupsneliu mairūno. Kepinti karštoje orkaitėje 30 min. Patiekiant pabarstyti sukapotais krapais. Patiekti su žalių daržovių salotomis.`);
    // four ========================================================================================================
    addRecipe("Greita rūgštynių sriuba", 'img/04.jpg', ['1.5 litro daržovių sultinio (arba mėsos)',
        '400 gramų vištienos šlaunelių mėsos (apytikriai)',
        '3 vienetai	bulvių',
        '2 vienetai	kiaušinių (kietai virtų)',
        '1 pundelis	rūgštynių',
        '1 šaukštelis aliejaus',
        'pagal skonį grietinės',
        'pagal skonį druskos'
    ], `1.	Bulves supjaustyti nedideliais kubeliais, kiaušinius smulkiai supjaustyti. Vištieną supjaustyti smulkiais gabaliukais.
2.	Į puodą pilti aliejaus, įkaitinti. Dėti vištienos šlaunelių mėsą ir apkepti iš visų pusių po kelias minutes. Tuomet išimti ir supjaustyti mažesniais gabalėliais arba suplėšyti šakute.
3.	Puode užvirinti sultinį, sudėti bulves ir vištieną, virti apie 10 - 15 minučių iki kol bulvės suminkštės. Sudėti nuplautas, smulkintas rūgštynes ir virti, kol rūgštynės suminkštės. Pagardinti druska ir pipirais.
4.	Į puodą su rūgštynėmis suberti smulkiai pjaustytus kiaušinius ir dar pavirti porą minučių.

Patarimai:
    Sriubos tirštumą galima reguliuoti pagal savo skonį - jei norisi skystesnės, įpilkite daugiau sultinio ar vandens`);
    // five =========================================================================================================
    addRecipe('Kondensuoto pieno pyragas - be galo skanus ir greitas', 'img/05.jpg', [
        '400 g sutirštinto pieno (1 skardinė)',
        '200 g miltų',
        '100 g sviesto (ištirpinto)',
        '3 kiaušiniai',
        '1 šaukštelis vanilinio cukraus',
        '1 šaukštelis kepimo miltelių',
        '1 žiupsnelis druskos'
    ], `Visus ingredientus sudėti į dubenį ir gerai išplakti (geriausia mikseriu). Supilti į kepimo popieriumi išklotą kepimo formą. Kepti iki 180 laipsnių įkaitintoje orkaitėje apie 40-50 min. (priklausomai nuo formos dydžio). Ištraukus leisti atvėsti, o tada mėgautis!`);
    // six ===========================================================================================================
    addRecipe('Greitai pagaminami sausainiai su manais', 'img/06.jpg', [
        '250 gramų miltų',
        '250 gramų manų kruopų',
        '150 gramų cukraus',
        '150 gramų sviesto',
        '0.5 šaukštelio kepimo miltelių',
        '2 vienetai	kiaušinių',
        'šiek tiek pabarstukų'
    ], `Paruošimo laikas: Apie 1 val.
    1.	Išsijotus miltus sumaišyti su kepimo milteliais ir manų kruopomis.
    2.	Į šį sausąjį mišinį pilti cukrų, minkštą sviestą ir išplaktus kiaušinius. Iš visų šių produktų suminkyti vienalytę tešlą. Leisti jai pastovėti 15-20 min, kad manai pabrinktų.
    3.	Tuomet suformuoti vienodo dydžio tešlos kamuoliukus, dėti į formelę arba skardą, apibarstyti pabarstukais.
    4.	Kepti 180°C temp. karščio įkaitintoje orkaitėje apie 15 minučių, kol gražiai pagels.`);
    // seven =========================================================================================================
    addRecipe('Greitieji dešrainiai tešloje', 'img/07.jpg', [
        '1 pakelio sluoksniuotos mielinės tešlos',
        '10 vnt. dešrelių',
        '1 kiaušinio'
    ], `Paruošimo laikas: Apie 20 min.
    Tešlą ištiesti ir palaikyti šiltai apie 30 minučių. Tada tešlą supjaustyti ilgomis, maždaug 2 cm storio juostelėmis. Kiekvieną dešrelę apvynioti tešlos juosta, aptepti kiaušinio plakiniu ir pašauti į įkaitintą orkaitę maždaug 20 minučių.
    Skanaus.`);
    // eight ==========================================================================================================
    addRecipe('Vaflių tortas "Greitasis stebuklas"', 'img/08.jpg', [
        '1 skardinė kondensuoto pieno, saldinto',
        '1 stiklinė	graikinių riešutų (smulkintų)',
        '1 stiklinė sausainių (trupintų)',
        '200 gramų grietinėlės, 35% riebumo',
        '6 vienetai	vaflių'
    ], `Paruošimo laikas: Apie 20 min.
    1.	Vaflius pertepti kondensuotu pienu ir sudėti vieną ant kito.
    2.	Grietinėlę standžiai išplakti ir ja aptepti tortą. Torto viršų pabarstyti sausainių trupiniais, o šonus - trupiniais bei sausoje keptuvėje paskrudintais riešutais. Skanaus.`);
    // nine ==============================================================================================================
    addRecipe('Greitos bandelės', 'img/09.jpg', [
        '400 g  tešlos',
        '100 g juodūjų serbentų',
        '100 g abrikosų marmelado'
    ], `Sluoksniuotą tešlą supjaustome kvadračiukais. Kampukus užlenkiam, kad neišbėgtų įdaras. Dedame po šaukštą marmelado. Į vieną - serbentų marmelado, į kitą - abrikosų. Kepame 200 laipsniu orkiatėje 12 - 15 min. Skanaus`);
    // ten ================================================================================================================
    addRecipe('Spurgos „Lengvai ir greitai“', 'img/10.jpg', [
        '600 gramų varškės',
        '15 šaukštų miltų',
        '2 vienetai kiaušinių',
        '1 šaukštas	acto',
        '1 šaukštelis sodos',
        ' ',
        'Kepimui:',
        '500 mililitrų aliejaus',
        ' ',
        'Pabarstymui:',
        'šiek tiek cukraus pudros'
    ], `Paruošimo laikas: Apie 30 min.
    1.	Į dubenėlį su varške įmušame kiaušinius, nugesiname sodą su trupučiu acto arba citrinos sulčių ir viską išmaišome. Į masę beriame miltus ir minkome tol, kol tešla bus tinkama kočioti. Jei reikia, berti dar šiek tiek miltų.
    2.	Tešlą iškočiojame maždaug 1 cm storio, padarome puoduku spurgos formą, vidury padarome skylutę ir dedame į puodą su įkaitusiu aliejumi.
    3.	Pabarstome cukraus pudra.`);
    // eleven ============================================================================================================================
    addRecipe('Greita Vezuvijaus pica', 'img/11.jpg', [
        'Daktariškos dešros',
        'Fermentinio sūrio',
        'Picos prieskonių',
        '1 šaldytas picos padas',
        'Majonezo', 'Kečupo'
    ], `Taigi, kaip žinote yra tokia populiari pica "Vezuvijaus" pica. Sugalvojau pagaminti palengvintą variantą. Pirmiausiai ant šaldyto picos pado užtepame kečupą ir majonezą plonesniu sluoksniu, sudedame smulkintą dešrą, užtarkuojame sūrį, pabarstome picos prieskoniais ir šauname į orkaitę. Galite valgyti su mėgstamu padažu arba sumaisyti kečupą, majonezą ir įberti picos prieskonių.`);
    // twelve ========================================================================================================================
    addRecipe('Greitas varškės apkepas', 'img/12.jpg', [
        '3 kiaušiniai',
        'Grietinė, 1 stiklinė',
        'Varškė, 600 g',
        'Manų kruopos, 5 šaukštai',
        'Cukrus, 4 šaukštai',
        'Druska, žiupsnelis'
    ], `Paruošimo laikas: Apie 45 min.
    Viską suverčiame į dubenį. Gerai išmaišome. Supilame į skardą, kuri prieš tai patepta riebalais, ir pašauname į įkaitintą orkaitę. Kepti 180 C temperatūroje apie 40 min.`);
    // 13 ============================================================================================================
    addRecipe('Greitas omletas', 'img/13.jpg', [
        'Kiaušiniai, 4 vienetai',
        'Cukraus pudra, 4 šaukšteliai',
        'Sviestas, 2 šaukštai'
    ], `Tryniai išsukami su cukraus pudra ir sumaišomi su atskirai išplaktais baltymais. Iš gautos masės labai karštoje keptuvėje iškepami 2 omletai. Jie tučtuojau paduodami kartu su užgėrimu.`);
    // 14 ========================================================================================================================
    addRecipe('Ukrainietiški barščiai (klasikinis receptas)', 'img/14.jpg', [
        '500 gramų jautienos',
        '500 gramų kiaulienos',
        '300 gramų kopūstų',
        '200 gramų bulvių',
        '2 vienetai burokėlių',
        '1 vienetas	morkų',
        '1 vienetas	svogūnų',
        '1 vienetas	paprikos',
        '1 šaukštas	pomidorų pastos',
        '1 šaukštas pomidorų pastos',
        'šiek tiek aliejaus',
        'šiek tiek lauro lapų',
        'šiek tiek druskos',
        'šiek tiek pipirų'
    ], `Paruošimo laikas: Daugiau nei 1 val.
    1.	Mėsą supjaustykite kubeliais sudėkite į gilų puodą, užpilkite 3 litrais šalto vandens, užvirinkite, kaitrą sumažinkite ir virkite 2 valandas. Po 2 valandų mėsa bus minkštutėlė, o puode susidarys sodrus sultinys, kurį beliks papildyti daržovėmis.
    2.	Burokėlius nulupkite, sutarkuokite arba supjaustykite šiaudeliais. Dėkite į keptuvę su šaukštu įkaitinto aliejaus, keletą minučių pakaitinkite, uždenkite dangčiu ir palikite pasitroškinti apie 10 min., tuomet įmaišykite pomidorų pastą ir viską troškinkite uždengę dar 20 min. Atidėkite.
    3.	Į 2 valandas lėtai virusį puodą sudėkite plonais šiaudeliais pjaustytus kopūstus, tuomet - šiaudeliais ar kubeliais pjaustytas bulves. Virkite kol suminkštės.
    4.	Morką nuskuskite ir supjaustykite šiaudeliais, svogūną - pusžiedžiais. Atskiroje keptuvėje apkepinkite aliejuje. Apkepintas daržoves sudėkite į puodą. Į puodą taip pat dėkite nedideliais šiaudeliais supjaustytą papriką.
    5.	Į puodą sudėkite iš anksto su pomidorų pasta patroškintus burokėlius. Virkite dar 10 minučių. Barščius pagardinkite keliais lauro lapeliais, druska, pipirais, kaitrą išjunkite, puodą uždenkite ir palikite pastovėti 20 minučių.
    6.	Ukrainietiški barščiai tradiciškai tiekiami su šaukštu riebios grietinės ir česnakiniu sviestu apteptomis, šiltomis mielinėmis bandelėmis`);
    // 15 ==============================================================================================================================
    addRecipe('Greitas nekeptas varškės pyragas su žele gabaliukais ir baltu šokoladu', 'img/15.jpg', [
        '500 gramų kreminės varškės',
        '200 mililitrų grietinėlės',
        '50 gramų balto šokolado',
        '16 gramų želatinos',
        'šiek tiek vanilės esencijos',
        'šiek tiek cukraus',
        '3 pakeliai	želės (įvairių skonių)'
    ], `Paruošimo laikas: Apie 1 val.
    1.	Iš anksto paruošti želė pagal nurodymus ant pakuotes, naudojant pusę nurodyto vandens kiekio. Palikti šaldytuve sustingti.
    2.	Grietinėlę supilti į prikaistuvį, berti želatiną ir palikti 10 minučių, kad išbrintų. Išbrinkusią kaitinti ant nedidelės ugnies, vis maišant, kol ištirps. Išjungti kaitinimą, dėti laužytą šokoladą, maišyti kol ištirps, atvėsinti. Sumaišyti su varške, vanile, cukrumi.
    3.	Supjaustyti sustingusią želę nedideliais gabalėliais ir įmaišyti į varškės masę.
    4.	Kekso formą iškloti maistine plėvele ir supilti varškės masė. Palikti stingti šaldytuve.`);
    // 16 ==========================================================================================================================
    addRecipe('Greita čili sriuba su mėsa ir fermentiniu sūriu', 'img/16.jpg', [
        '7/10 litro pomidorų sulčių (arba pomidorų tyrės)',
        '300 gramų kiaulienos faršo',
        '1 stiklinė	konservuotų pupelių (arba virtų)',
        '1 vienetas	svogūnų',
        '1 vienetas	aitriosios paprikos',
        '2 skiltelės česnako',
        '1 žiupsnelis druskos',
        'šiek tiek petražolių',
        'šiek tiek krapų',
        ' ',
        'Pabarstymui:',
        '50 gramų sūrio (tarkuoto)'
    ], `Paruošimo laikas: Apie 30 min.
    1.	Pakepiname susmulkintą svogūną ir česnaką apie 3 minutes. Tuomet sudedame faršą ir, nuolat maišant, apie 10 minučių gerai apkepiname keptuvėje.
    2.	Mėsos masę reikia sukrėsti į puodą su užvirintomis pomidorų sultimis. Jei norite skystesnės sriubos, galite jas šiek tiek atskiesti vandeniu. O jeigu norisi dar tirštesnės sriubos, galite vietoje sulčių naudoti trintuvu susmulkintus konservuotus pomidorus arba pirktinę pomidorų tyrę.
    3.	Į puodą sukrėskite konservuotas pupeles, smulkintą čili pipirą, įmaišykite pomidorų padažą. Maišant pavirkite ant nedidelės ugnies apie 10 minučių. Įberkite druską, įmaišykite petražoles, bei krapus.
    4.	Kai sriubą supilstysite į dubenėlius, apibarstykite tarkuotu fermentiniu sūriu.`);
    
});
