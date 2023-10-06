let version = JSON.parse(localStorage.getItem('version'));
if (version === null) {
    localStorage.setItem("version", JSON.stringify("1"));
}
else if (parseInt(version) != 2) {
    alert("Not the updated one")
    localStorage.setItem("version", JSON.stringify("2"));
}





let items = JSON.parse(localStorage.getItem('lastOfMistakeApp'));
let heightMistakeLimiot = 0;
let actualIDofRun = 0;
console.log(items)

if (items === null) {
    items = [
        {
            id: 1,
            name: 'IELTS Map',
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
        { id: 1, name: 'IELTS Gap-filling', mistakes: 1, marked: true, otherA: true, otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
        { id: 1, name: 'SAT MATH Data Analysis', mistakes: 1, marked: true, otherA: true, otherB: true, otherC: true, otherD: true, otherE: true, otherF: true, otherG: true, otherH: true, },
    ]

}




const randerValue = () => {
    // console.log('show data')
    // console.log(items.length, ' items');
    // console.log(items, ' total .........add items');
    let text = "";
    items.map((num) => {
        // console.log(num, 'num length')
        text += "<div class='item-col'><button class='btn-simple unselect' id='" + num.id + "' onclick='runID(" + num.id + ")'><img src='./aboutbtn.svg' alt=' srcset=' /></button><h3 class='color-text'>" + num.name + "</h3><div class='item-ceter grid'><h3 class='color-text-red mistakeNum'>" + num.mistakes + "</h3><button class='tract-btn unselect item-ceter' ' onclick='increaseMstk(" + num.id + ")'><img src='./TrendUp.svg' alt=' srcset=' /></button></div></div>"
        // text += text + ": " + num.name + "<br>";
    });
    document.getElementById("gg").innerHTML = text;

}
randerValue();


const runID = (id) => {
    actualIDofRun = id - 1;
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
    randerValue();
    showHide('modal2');
}



const increaseMstk = (id) => {
    const actualID = id - 1;
    // console.log(actualID + " mistake count")
    heightMistakeLimiot = items[actualID].mistakes;
    if (parseInt(heightMistakeLimiot) < 300) {
        items[actualID].mistakes += 1;
        // console.log(actualID + " mistake no");
        setItemToLocal();
        randerValue();
    }
    else {
        // console.log('value is riched max');
        alert('you reached the max value. If you are making this many mistakes probably you are doing/learning it wrong. Better change the strategy and give it a whole new try. I am taking it into a subject of learning, look at the subject section (coming soon) for more details. ((((((GOOD LUCK))))))')
        items[actualID].mistakes = 1;
        setItemToLocal();
        randerValue();
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
    items.push({ id: items.length + 1, name: mistakeName, mistakes: 1 },);
    setItemToLocal();
    randerValue();

}

const setItemToLocal = () => {
    localStorage.setItem("lastOfMistakeApp", JSON.stringify(items));
}