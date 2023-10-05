let items = JSON.parse(localStorage.getItem('lastOfMistakeApp'));
let heightMistakeLimiot = 0;
console.log(items)

if (items === null) {
    items = [
        { id: 1, name: 'reading module', mistakes: 1 },
        { id: 2, name: 'array and object', mistakes: 1 },
    ]

}




const randerValue = () => {
    console.log('show data')
    console.log(items.length, ' items');
    console.log(items, ' total .........add items');
    let text = "";
    items.map((num) => {
        console.log(num, 'num length')
        text += "<div class='item-col'><button class='btn-simple unselect' id='" + num.id + "' onclick='runID(" + num.id + ")'><img src='./aboutbtn.svg' alt=' srcset=' /></button><h3 class='color-text'>" + num.name + "</h3><div class='item-ceter grid'><h3 class='color-text-red mistakeNum'>" + num.mistakes + "</h3><button class='tract-btn unselect item-ceter' ' onclick='increaseMstk(" + num.id + ")'><img src='./TrendUp.svg' alt=' srcset=' /></button></div></div>"
        // text += text + ": " + num.name + "<br>";
    });
    document.getElementById("gg").innerHTML = text;

}
randerValue();


const runID = (id) => {
    console.log(id + "ddd")
}
const increaseMstk = (id) => {
    const actualID = id - 1;
    console.log(actualID + " mistake count")
    heightMistakeLimiot = items[actualID].mistakes;
    if (parseInt(heightMistakeLimiot) < 3000) {
        items[actualID].mistakes += 1;
        console.log(actualID + " mistake no");
        setItemToLocal();
        randerValue();
    }
    else {
        console.log('value is riched max');
        alert('you reached the max value. If you are making this many mistakes probably you are doing/learning it wrong. Better change the strategy and give it a whole new try. I am taking it into a subject of learning, look at the subject section (coming soon) for more details. ((((((GOOD LUCK))))))')
        items[actualID].mistakes = 1;
        setItemToLocal();
        randerValue();
    }
}

// items.forEach((num) => {
// });

// document.getElementById("").innerHTML = text;

let IsmodalActive = false;

const showHide = () => {
    console.log('modal');
    if (!IsmodalActive) {
        document.getElementById('modal1').style.display = 'block';
        IsmodalActive = true;
    }
    else {
        document.getElementById('modal1').style.display = "none";
        IsmodalActive = false;
    }
}

const addItem = () => {
    console.log('add items');
    const mistakeName = document.getElementById("miskateNameField").value;
    console.log("ss", mistakeName);
    items.push({ id: items.length + 1, name: mistakeName, mistakes: 1 },);
    setItemToLocal();
    randerValue();

}

const setItemToLocal = () => {
    localStorage.setItem("lastOfMistakeApp", JSON.stringify(items));
}