let form = document.getElementById("form");

let que = document.getElementById("que");

let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")
let opt4 = document.getElementById("opt4")

let ops = document.getElementsByName("opt")

let score = document.getElementById("score")

let timer = document.getElementById("timer")
let counter = document.getElementById("counter")

let next = document.getElementById("next")
let finish = document.getElementById("finish")

let i = 0
let total_que = 5
let correct = 0;

let timeText = document.querySelector(".timer .time_left_txt");
let timeCount = document.querySelector(".timer .timer_sec");

let cnt;
let progress = document.getElementById("progress")
let width = 0

let ques = document.getElementById("questions")

let temp_node1, temp_node2

let replay = document.getElementById("replay")

form.addEventListener("submit", function(e){
    e.preventDefault()
    $("#start").modal('hide')
    $("#rules").modal('show')
})

ques.addEventListener("show.bs.modal", function() {
    if(sub === "dsa"){
        $("#progress").css("transition", "width 60s ease-in-out")
        $('#progress').delay(1000).queue(function () {
            $(this).css('width', '100%')
        });
        timeText.textContent = "Time Left";

        startTimer(60);
    }else if(sub === "dbms"){
        $("#progress").css("transition", "width 300s ease-in-out")
        $('#progress').delay(1000).queue(function () {
            $(this).css('width', '100%')
        });
        timeText.innerText = "Time Left";

        startTimerBig(300);
    }else{
        timeText.innerText = "Timer off"
        timeCount.innerText = "00"
    }

    que.innerText = questions[i].numb + ". " + questions[i].question;
    counter.innerText = i + 1

    opt1.innerText = questions[i].options[0]
    opt2.innerText = questions[i].options[1]
    opt3.innerText = questions[i].options[2]
    opt4.innerText = questions[i].options[3]
})

ques.addEventListener("hide.bs.modal", function() {
    i = 0;

    finish.classList.add("visually-hidden")

    temp_node1.classList.remove("btn-danger")
    temp_node1.classList.add("btn-outline-primary")

    temp_node2.classList.remove("btn-success")
    temp_node2.classList.add("btn-outline-primary")

    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;

    if (correct >= 4)
        score.innerText = "Hurray 🙂, You got " + correct + " out of 5. Keep it Up👍!"
    else if (correct >= 2)
        score.innerText = "Good 😐, You got " + correct + " out of 5. Try to do better."
    else
        score.innerText = "Uh-oh 🙁, You got only " + correct + " out of 5. Put an effort on this subject😇."
})

next.addEventListener("click", function() {
    if(sub === "dsa"){
        $("#progress").css("transition", "width 60s ease-in-out")
        $('#progress').css('width', '100%')
        timeText.innerText = "Time Left";

        clearInterval(cnt);
        startTimer(60);
    }else if(sub === "ddc"){
        timeText.innerText = "Timer off"
        timeCount.innerText = "00"
    }

    next.classList.add("visually-hidden")
    temp_node1.classList.remove("btn-danger")
    temp_node1.classList.add("btn-outline-primary")

    temp_node2.classList.remove("btn-success")
    temp_node2.classList.add("btn-outline-primary")

    i++;
    que.innerText = questions[i].numb + ". " + questions[i].question;
    counter.innerText = i + 1

    opt1.innerText = questions[i].options[0]
    opt2.innerText = questions[i].options[1]
    opt3.innerText = questions[i].options[2]
    opt4.innerText = questions[i].options[3]

    opt1.disabled = false;
    opt2.disabled = false;
    opt3.disabled = false;
    opt4.disabled = false;
})

function checkAns(event) {
    if(sub === "dsa"){
        $("#progress").css("transition", "none")
        $("#progress").css("width", "0%")
    
        clearInterval(cnt);
    }
    event.stopPropagation();

    temp_node1 = event.target

    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;

    if (i === total_que - 1)
        finish.classList.remove("visually-hidden")
    else
        next.classList.remove("visually-hidden")

    if (event.target.innerText != questions[i].answer) {
        event.target.classList.remove("btn-outline-primary")
        event.target.classList.add("btn-danger")
    } else {
        correct += 1
    }

    if (opt1.innerText == questions[i].answer) {
        opt1.classList.remove("btn-outline-primary")
        opt1.classList.add("btn-success")
        temp_node2 = opt1
    } else if (opt2.innerText == questions[i].answer) {
        opt2.classList.remove("btn-outline-primary")
        opt2.classList.add("btn-success")
        temp_node2 = opt2
    } else if (opt3.innerText == questions[i].answer) {
        opt3.classList.remove("btn-outline-primary")
        opt3.classList.add("btn-success")
        temp_node2 = opt3
    } else if (opt4.innerText == questions[i].answer) {
        opt4.classList.remove("btn-outline-primary")
        opt4.classList.add("btn-success")
        temp_node2 = opt4
    }
}

function startTimer(time) {
    cnt = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(cnt);
            timeText.textContent = "Time Off";
            $("#progress").css("transition", "none")
            $("#progress").css("width", "0%")

            opt1.disabled = true;
            opt2.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;

            if (i === total_que - 1)
                finish.classList.remove("visually-hidden")
            else
                next.classList.remove("visually-hidden")


            if (opt1.innerText == questions[i].answer) {
                opt1.classList.remove("btn-outline-primary")
                opt1.classList.add("btn-success")
                temp_node1 = opt1
                temp_node2 = opt1
            } else if (opt2.innerText == questions[i].answer) {
                opt2.classList.remove("btn-outline-primary")
                opt2.classList.add("btn-success")
                temp_node1 = opt2
                temp_node2 = opt2
            } else if (opt3.innerText == questions[i].answer) {
                opt3.classList.remove("btn-outline-primary")
                opt3.classList.add("btn-success")
                temp_node1 = opt3
                temp_node2 = opt3
            } else if (opt4.innerText == questions[i].answer) {
                opt4.classList.remove("btn-outline-primary")
                opt4.classList.add("btn-success")
                temp_node1 = opt4
                temp_node2 = opt4
            }
        }
    }
}

function startTimerBig(time) {
    cnt = setInterval(timerBig, 1000);

    function timerBig() {
        let min = parseInt(time/60)
        let sec = time - (min*60)

        let mins = document.getElementById("minutes")
        let secs = document.getElementById("seconds")
        mins.innerText = min;
        secs.innerText = sec;

        time--;
        if (min < 9) {
            let addZero = mins.innerText;
            mins.innerText = "0" + addZero;
        }
        if (sec <= 9) {
            let addZero = secs.innerText;
            secs.innerText = "0" + addZero;
        }
        if (time < 0) {
            if(i === 0){
                temp_node1 = opt1
                temp_node2 = opt1
            }

            clearInterval(cnt);
            timeText.innerText = "Time Off";
            timeCount.innerText = "00 : 00";
            $("#progress").css("transition", "none")
            $("#progress").css("width", "0%")

            opt1.disabled = true;
            opt2.disabled = true;
            opt3.disabled = true;
            opt4.disabled = true;

            finish.classList.remove("visually-hidden")
        }
    }
}

replay.addEventListener("click", function(){
    location.reload()
})