function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfMonth() {
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let monthDays = document.querySelector("#days")
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dayss = dezDaysList[index]
        let monthDaysItem = document.createElement("li")
        monthDaysItem.innerHTML = dayss
        monthDays.appendChild(monthDaysItem);
        monthDaysItem.className = "day"
        if (dayss === 24 | dayss === 25 | dayss === 31) {
            monthDaysItem.className = "day holiday"
        }
        if (dayss === 4 | dayss === 11 | dayss === 18 | dayss === 25) {
            monthDaysItem.className = "day friday"
        }
    }

}
createDaysOfMonth();

function createButtonHoliday(buttonHoliday) {
    let buttonContainer = document.querySelector(".buttons-container")
    let newButton = document.createElement("button")
    newButton.innerHTML = buttonHoliday
    newButton.id = "btn-holiday"
    buttonContainer.appendChild(newButton)
};
createButtonHoliday("Feriados");

function mudaHolidays() {
    let holidayButton = document.querySelector("#btn-holiday")
    let holidayDays = document.querySelectorAll(".holiday")
    let backColor = "rgb(238,238,238)"
    let newColor = "white"

    holidayButton.addEventListener("click", clickColor)

    function clickColor() {
        for (let index = 0; index < holidayDays.length; index += 1) {
            if (holidayDays[index].style.backgroundColor === newColor) {
                holidayDays[index].style.backgroundColor = backColor;
            } else {
                holidayDays[index].style.backgroundColor = newColor
            }
        }
    }
};
mudaHolidays();

function createButtonFriday(buttonFriday) {
    let buttonFridayContainer = document.querySelector(".buttons-container")
    let fridayButton = document.createElement("button")
    fridayButton.innerHTML = buttonFriday
    fridayButton.id = "btn-friday"
    buttonFridayContainer.appendChild(fridayButton)
};
createButtonFriday("Sexta-Feira");

function mudaFriday() {
    let fridayButton = document.querySelector("#btn-friday")
    let friday = document.getElementsByClassName("friday")
    let newText = "Sextou!"
    let fridayDays = [4, 11, 18, 25]

    fridayButton.addEventListener("click", mudaTextFriday)

    function mudaTextFriday() {
        for (let index = 0; index < friday.length; index += 1) {
            if (friday[index].innerHTML !== newText) {
                friday[index].innerHTML = newText
            } else {
                friday[index].innerHTML = fridayDays[index]
            }
        }
    }
};
mudaFriday();

function zoomOn() {
    let getDay = document.querySelector("#days")
    getDay.addEventListener("mouseover", daZoom)

    function daZoom(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    }
};
zoomOn();

function zoomOff() {
    let getDay = document.querySelector("#days")
    getDay.addEventListener("mouseout", tiraZoom)

    function tiraZoom(event) {
        event.target.style.fontSize = "20px"
        event.target.style.fontWeight = "200"
    }
};
zoomOff();

function tarefaPersonalizada(tarefa) {
    let work = document.querySelector(".my-tasks")
    let workName = document.createElement("span")

    workName.innerHTML = tarefa
    work.appendChild(workName)
};
tarefaPersonalizada("Ir pra Aula");

function legenda (cor){
    let legend = document.querySelector(".my-tasks")
    let newDiv = document.createElement("div")
    
    newDiv.className = "task"
    newDiv.style.backgroundColor = cor
    legend.appendChild(newDiv)

};
legenda("green");

function selecionaTarefa(){
    let clicaDiv = document.getElementsByClassName("task selected")
    let task = document.querySelector(".task")
    task.addEventListener("click", tarefaSelecionada)
    function tarefaSelecionada(event){   
    if (clicaDiv.length === 0){
        event.target.className = "task selected"
    } else {
        event.target.className = "task"
    }
}
}; 
selecionaTarefa();

// function selecionaDay(){
//     let selecionaday = document.querySelector("#days")
//     let selecionatask = document.getElementsByClassName("task selected")
//     let taskDiv = document.querySelector(".task")
//     let mudaTaskCor = taskDiv.style.backgroundColor

// }

function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();