const quizData = [
    {
        questionJP: "山",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["かわ", "やま", "うみ", "もり"],
        answer: "やま"
    },
    {
        questionJP: "黒い",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["くろい", "しろい", "とおい", "ながい"],
        answer: "くろい"
    },
    {
        questionJP: "川",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["かわ", "やま", "うみ", "もり"],
        answer: "かわ"
    },
    {
        questionJP: "白い",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あかい", "おおい", "しろい", "おもい"],
        answer: "しろい"
    },
    {
        questionJP: "海",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["かわ", "あめ", "うみ", "もり"],
        answer: "うみ"
    },
    {
        questionJP: "英語",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["えご", "いえご", "えいご", "ことば"],
        answer: "えいご"
    },
    {
        questionJP: "多い",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["おい", "おもしろい", "おおい", "あおい"],
        answer: "おおい"
    },
    {
        questionJP: "空",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["そら", "あめ", "よる", "かわ"],
        answer: "そら"
    },
    {
        questionJP: "広い",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["せまい", "ながい", "みじかい", "ひろい"],
        answer: "ひろい"
    },
    {
        questionJP: "日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["きょう", "にち", "にし", "ほし"],
        answer: "にち"
    },
    {
        questionJP: "今年",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["ねん", "こんかい", "ことし", "ことば"],
        answer: "ことし"
    },
    {
        questionJP: "月",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["つき", "にち", "ねん", "けす"],
        answer: "つき"
    },
    {
        questionJP: "来年",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["らねん", "きねん", "らいねん", "さらいねん"],
        answer: "らいねん"
    },
    {
        questionJP: "花",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["くさ", "はな", "き", "もり"],
        answer: "はな"
    },
    {
        questionJP: "国",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["にく", "くみ", "こに", "くに"],
        answer: "くに"
    },
    {
        questionJP: "木",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["くさ", "ほん", "き", "もん"],
        answer: "き"
    },
    {
        questionJP: "森",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["くさ", "ほん", "き", "もり"],
        answer: "もり"
    },
    {
        questionJP: "雨",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あね", "あに", "あめ", "あれ"],
        answer: "あめ"
    },
    {
        questionJP: "車",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["くるめ", "くる", "くるま", "くま"],
        answer: "くるま"
    },
    {
        questionJP: "火",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["はなび", "ひ", "かぜ", "そら"],
        answer: "ひ"
    },
    {
        questionJP: "私",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["わたち", "わし", "あなた", "わたし"],
        answer: "わたし"
    },
    {
        questionJP: "今日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["いま", "きのう", "あした", "きょう"],
        answer: "きょう"
    },
    {
        questionJP: "明日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あさって", "きのう", "あした", "きょう"],
        answer: "あした"
    },
    {
        questionJP: "昨日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あさって", "きのう", "あした", "きょう"],
        answer: "きのう"
    },
    {
        questionJP: "明後日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あさって", "きのう", "あした", "きょう"],
        answer: "あさって"
    },
    {
        questionJP: "朝",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あざ", "ひる", "あさ", "けさ"],
        answer: "あさ"
    },
    {
        questionJP: "昼",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["よる", "ひる", "あさ", "けさ"],
        answer: "ひる"
    },
    {
        questionJP: "夜",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["よる", "ひる", "あさ", "けさ"],
        answer: "よる"
    },
    {
        questionJP: "時間",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["しかん", "じかん", "ちかん", "みかん"],
        answer: "じかん"
    },
    {
        questionJP: "時",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["どき", "とき", "とぎ", "とけい"],
        answer: "とき"
    },
    {
        questionJP: "間",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あいた", "あいだ", "あうだ", "あれだ"],
        answer: "あいだ"
    },
    {
        questionJP: "上",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["うれ", "うえ", "した", "そと"],
        answer: "うえ"
    },
    {
        questionJP: "下",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["うしろ", "うえ", "した", "そと"],
        answer: "した"
    },
    {
        questionJP: "話す",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["はいす", "ななす", "はす", "はなす"],
        answer: "はなす"
    },
    {
        questionJP: "前",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["うしろ", "うえ", "まえ", "そと"],
        answer: "まえ"
    },
    {
        questionJP: "高い",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["やすい", "みじかい", "やわらかい", "たかい"],
        answer: "たかい"
    },
    {
        questionJP: "外",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["なか", "ぞと", "そた", "そと"],
        answer: "そと"
    },
    {
        questionJP: "中",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["なか", "まんなか", "となり", "そと"],
        answer: "なか"
    },
    {
        questionJP: "遠い",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["とおい", "おおい", "まちがい", "もんだい"],
        answer: "なか"
    },
    {
        questionJP: "食べる",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["たえる", "だべる", "たべる", "たへる"],
        answer: "たべる"
    },
    {
        questionJP: "寝る",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["みる", "とる", "ねる", "うる"],
        answer: "ねる"
    },
    {
        questionJP: "見る",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["みえる", "みる", "みた", "みせる"],
        answer: "みる"
    },
    {
        questionJP: "会う",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あえ", "あお", "あう", "あか"],
        answer: "あう"
    },
    {
        questionJP: "合う",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あえ", "あお", "あか", "あう"],
        answer: "あう"
    },
    {
        questionJP: "父",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["しし", "ぢぢ", "じじ", "ちち"],
        answer: "ちち"
    },
    {
        questionJP: "母",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["はち", "ばば", "はは", "はこ"],
        answer: "はは"
    },
    {
        questionJP: "兄",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あれ", "あば", "あね", "あに"],
        answer: "はは"
    },
    {
        questionJP: "姉",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["あれ", "あば", "あね", "あに"],
        answer: "あね"
    },
    {
        questionJP: "妹",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["いも", "いなか", "あね", "いもうと"],
        answer: "あね"
    },
    {
        questionJP: "弟",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["おかね", "おとうと", "おとうさん", "あに"],
        answer: "おとうと"
    },
    {
        questionJP: "家族",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["いえ", "かそく", "かぞく", "かじょく"],
        answer: "かぞく"
    },
    {
        questionJP: "月曜日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["かようび", "にちようび", "げつようび", "どようび"],
        answer: "げつようび"
    },
    {
        questionJP: "木曜日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["かようび", "にちようび", "げつようび", "もくようび"],
        answer: "もくようび"
    },
    {
        questionJP: "日曜日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["げつようび", "にちようび", "どようび", "もくようび"],
        answer: "にちようび"
    },
    {
        questionJP: "土曜日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["げつようび", "どようび", "げつようび", "もくようび"],
        answer: "にちようび"
    },
    {
        questionJP: "金曜日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["げつようび", "きんようび", "ぎんようび", "もくようび"],
        answer: "きんようび"
    },
    {
        questionJP: "火曜日",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["げつようび", "きんようび", "かようび", "もくようび"],
        answer: "かようび"
    },
    {
        questionJP: "二月",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["さんがつ", "にんがつ", "にがつ", "にかつ"],
        answer: "にがつ"
    },
    {
        questionJP: "十月",
        questionTH: "เลือกคำอ่านให้ถูกต้อง:",
        options: ["じゅうがつ", "じょうがつ", "ぎょうがつ", "くがつ"],
        answer: "じゅうがつ"
    }
    
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionJPEl = document.getElementById("question-jp");
const questionTHEl = document.getElementById("question-th");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionJPEl.textContent = currentQuestion.questionJP;
    questionTHEl.textContent = currentQuestion.questionTH;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });

    resultEl.textContent = "";
    nextBtn.style.display = "none";

    // รีเซ็ตเวลา
    timeLeft = 15;
    timerEl.textContent = `เวลา: ${timeLeft} วินาที`;
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `เวลา: ${timeLeft} วินาที`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(null); // หมดเวลา
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    clearInterval(timer);

    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer.trim(); // ลบช่องว่าง
    const userAnswer = selectedOption ? selectedOption.trim() : ""; // ลบช่องว่าง

    if (userAnswer === correctAnswer) {
        resultEl.textContent = "ถูกต้อง!";
        resultEl.style.color = "green";
        score++;
        correctSound.play();
    } else {
        resultEl.textContent = `ผิด! คำตอบที่ถูกต้องคือ "${correctAnswer}"`;
        resultEl.style.color = "red";
        wrongSound.play();
    }
    nextBtn.style.display = "block";
}


nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
};

function showFinalScore() {
    questionJPEl.textContent = "เกมจบแล้ว!";
    questionTHEl.textContent = "";
    optionsEl.innerHTML = "";
    resultEl.textContent = `คะแนนของคุณ: ${score}/${quizData.length}`;
    nextBtn.style.display = "none";
    timerEl.style.display = "none";
}

loadQuestion();
