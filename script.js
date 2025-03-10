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
});
