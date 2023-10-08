let version = JSON.parse(localStorage.getItem('version'));
let items = JSON.parse(localStorage.getItem('lastOfMistakeApp'));

if (version === null) {
    localStorage.setItem("version", JSON.stringify("1"));
}
else if (parseInt(version) != 2) {
    alert("Not the updated one")
    localStorage.setItem("version", JSON.stringify("2"));
    localStorage.setItem("lastOfMistakeApp", JSON.stringify(null));
    // items = null;  //  very vulnerable ----------------------------- --------------------------------- ------ ----- ------ -------- --------- ---- ------- --------- ----------------------- ------    -     -- ------- ---    --------
}





let heightMistakeLimiot = 0;
let actualIDofRun = 0;
console.log(items)

if (items === null) {
    items = [
        {
            idSEC: 0,
            name: '(Algebra) Linear equations in one variable',
            mistakes: 1,
            marked: true,
            otherA: true,
            otherB: true,
            otherC: true,
            otherD: true,
            otherE: true,
            otherF: true,
            otherG: true,
            otherH: true,
        },
        { idSEC: 1, name: '(Algebra) Linear equations', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 2, name: '(Algebra) Linear functions', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 3, name: '(Algebra) Linear inequalities', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 4, name: '(Advanced Maths) Equivalent expressions', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 5, name: '(Advanced Maths) Non-linear equations', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 6, name: '(Advanced Maths) Non-linear functions', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 7, name: '(Advanced Maths) Polynomial functions', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 8, name: '(Problem Solving and Data Analysis) <br/> Ratios, rates, proportional relationships, and units', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 9, name: '(Problem Solving and Data Analysis) <br/> Percentages', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 10, name: '(Problem Solving and Data Analysis) <br/> One-variable data', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 11, name: '(Problem Solving and Data Analysis) <br/> Two-variable data', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 12, name: '(Problem Solving and Data Analysis) <br/> Mean, median, mode, standard deviation', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 13, name: '(Problem Solving and Data Analysis) <br/> Probability and conditional probability', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 14, name: '(Problem Solving and Data Analysis) <br/> Inference from sample statistics and margin of error', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 15, name: '(Problem Solving and Data Analysis) <br/> Verifying data collection methods', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 16, name: '(Problem Solving and Data Analysis) <br/> statistical claims', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 17, name: '(Geometry and Trigonometry) Area and volume', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 18, name: '(Geometry and Trigonometry) Right triangles and trigonometry', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 19, name: '(Geometry and Trigonometry) Circles', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 20, name: '(ENG: Information and Ideas) Central ideas and details', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 21, name: '(ENG: Information and Ideas) Command of evidence', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 22, name: '(ENG: Information and Ideas) Interpret information from tables, graphs, lines', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 23, name: '(ENG: Information and Ideas) Quantitative inferences', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 24, name: '(ENG: Information and Ideas) Analytical and evaluative skills', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 25, name: '(ENG: Expression of Ideas) Rhetorical synthesis transitions', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 26, name: '(ENG: Expression of Ideas) Ability to revise texts', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 27, name: '(ENG: Expression of Ideas) Effectiveness of rhetoric texts', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 28, name: '(ENG: Standard English Conventions) Boundaries', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 29, name: '(ENG: Standard English Conventions) Form, structure, and sense', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 30, name: '(ENG: Standard English Conventions) Formation of English sentences', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 31, name: '(ENG: Standard English Conventions) Usage and correction of punctuation', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 32, name: '(ENG: Craft and Structure) Words in context', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 33, name: '(ENG: Craft and Structure) Text structure and purpose', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 34, name: '(ENG: Craft and Structure) Cross-text connections', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 35, name: '(ENG: Craft and Structure) Reasoning and comprehension skills', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { idSEC: 36, name: '(ENG: Craft and Structure) High-utility words and phrases', mistakes: 1, marked: true, otherA: 'SAT', otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
    ]

}

// const showData = items[num.idSEC].mistakes.sort(function (a, b) { return a - b });
//         console.log(showData);

let mistakeCOUNTS = [];
let ORDERIndx;
items.map((numb) => {
    let numbData = numb.mistakes;
    mistakeCOUNTS.push(numbData);
    ORDERIndx = mistakeCOUNTS;
});




const randerValue = () => {
    // console.log('show data')
    // console.log(items.length, ' items');
    // console.log(items, ' total .........add items');
    let text = "";
    let ORDERindexCou = 0;

    const runItem = () => {
        ORDERIndx.sort().reverse();
        console.log(ORDERIndx, '-------------------------------------- ------------------------------- --------------')
        items.map((num) => {
            if (ORDERIndx[ORDERindexCou] === num.mistakes) {
                text += "<div class='item-col'><button class='btn-simple unselect' idSEC='" + num.idSEC + "' onclick='runID(" + num.idSEC + ")'><img src='./aboutbtn.svg' alt=' srcset=' /></button><h3 class='color-text'>" + num.name + "</h3><div class='item-ceter grid'><h3 class='color-text-red mistakeNum'>" + num.mistakes + "</h3><button class='tract-btn unselect item-ceter' ' onclick='increaseMstk(" + num.idSEC + ")'><img src='./TrendUp.svg' alt=' srcset=' /></button></div></div>"
                ORDERindexCou += 1;
                console.log(ORDERindexCou, '=')
            }
            else {
                return;
            }

            // else {
            //     loopOfItems(num);

            // }
            // console.log(num, 'num length')
            // text += text + ": " + num.name + "<br>";
        });
        document.getElementById("gg").innerHTML = text;

        // runAgain({ ORDERindexCou });
        if (items.length > ORDERindexCou) {
            // if (ORDERindexCou === items.length) {
            //     ORDERindexCou = 0;
            //     console.log('order final =====', ORDERindexCou);
            // }
            // else {
            console.log(items.length, 'i', ORDERindexCou, 'o ---------------')
            runItem();
            // }
        }
    }
    runItem();


    // const runAgain = ({ ORDERindexCou }) => {
    //     if (ORDERindexCou < items.length) {
    //         console.log(items.length, 'i', ORDERindexCou, 'o ---------------')
    //         runItem();
    //     }
    //     else {
    //         return;
    //     }
    // }

    // runItem();

    console.log(items.length, 'i', ORDERindexCou, 'o ------ final---------')
    ORDERindexCou = 0;
    console.log(items.length, 'i', ORDERindexCou, 'o ------ After final---------')

}
randerValue();


const runID = (idSEC) => {
    actualIDofRun = idSEC;
    console.log(items[actualIDofRun].name + "-----------");
    showHide('modal2');
    document.getElementById('M2miskateNameField').value = items[actualIDofRun].name;
    document.getElementById('M2miskateCountField').value = items[actualIDofRun].mistakes;
}


const editFunction = () => {
    console.log(items[actualIDofRun].name + "--//-----//---//-");
    let newMistakeName = document.getElementById('M2miskateNameField').value;
    let newMistakeCount = document.getElementById('M2miskateCountField').value;
    items[actualIDofRun].name = newMistakeName;
    items[actualIDofRun].mistakes = parseInt(newMistakeCount);
    setItemToLocal();
    location.reload();
    // randerValue();
    showHide('modal2');
}
const deletItem = () => {
    // console.log('actual: ', actualIDofRun, 'item idSEC: ', items[actualIDofRun].idSEC)

    // // const newItm = items.filter((itms) => {
    // //     return itms.idSEC != actualIDofRun - 1;
    // // });
    // // items = '';
    // let count = 0
    // // items = newItm;
    // items[actualIDofRun];
    // items.map((itmValue) => {
    //     if (items[count] != items[actualIDofRun]) {
    //         console.log(itmValue);

    //         items[count] = itmValue;
    //         items[count].idSEC = count;
    //         console.log(items[count].idSEC)
    //         count += 1;
    //         setItemToLocal();
    //     }
    // })
    // // items = NewItels;

    // // location.reload();
    // // console.log(newItm, 'newites....................')
    // console.log(items, 'oldit....................')
}



const increaseMstk = (idSEC) => {
    const actualID = idSEC;
    console.log(actualID + " mistake count")
    heightMistakeLimiot = items[actualID].mistakes;
    if (parseInt(heightMistakeLimiot) < 1500) {
        items[actualID].mistakes += 1;
        // console.log(actualID + " mistake no");
        setItemToLocal();
        location.reload();
        // randerValue();
    }
    else {
        // console.log('value is riched max');
        alert('you reached the max value. If you are making this many mistakes probably you are doing/learning it wrong. Better change the strategy and give it a whole new try. I am taking it into a subject of learning, look at the subject section (coming soon) for more details. ((((((GOOD LUCK))))))')
        items[actualID].mistakes = 1;
        setItemToLocal();
        location.reload();
        // randerValue();
    }
}

let enterVluInf = 1;
const inpCheckndActive = () => {
    const isInpText = document.getElementById('miskateNameField').value;
    if (isInpText.length > 1) {
        addItem(), showHide('modal1');
        document.getElementById('miskateNameField').value = '';
    }
    else {
        if (enterVluInf === 1) {
            document.getElementById('miskateNameField').placeholder = 'Enter a value';
            enterVluInf = 2;
            // console.log(enterVluInf, '-----------------------');
        }
        else if (enterVluInf === 2) {
            document.getElementById('miskateNameField').placeholder = 'Please enter a value';
            enterVluInf = 1;
            // console.log(enterVluInf, '-----------------------');
        }

    }
}
// items.forEach((num) => {
// });

// document.getElementById("").innerHTML = text;

let IsmodalActive = false;

const showHide = (modalN) => {
    // console.log('modal');

    if (!IsmodalActive) {
        document.getElementById(modalN).style.display = 'block';
        IsmodalActive = true;
    }
    else {
        document.getElementById(modalN).style.display = "none";
        IsmodalActive = false;
    }
}

const addItem = () => {
    // console.log('add items');
    const mistakeName = document.getElementById("miskateNameField").value;
    // console.log("ss", mistakeName);
    items.push({ idSEC: items.length, name: mistakeName, mistakes: 1 },);
    setItemToLocal();
    location.reload();
    // randerValue();

}

const setItemToLocal = () => {
    localStorage.setItem("lastOfMistakeApp", JSON.stringify(items));
}