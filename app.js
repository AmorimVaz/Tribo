teams = [
    {"seed": 1,"name": "FURIA", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/furi.png"},
    {"seed": 2,"name": "Complexity", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/col.png"},
    {"seed": 3,"name": "MIBR", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/mibr.png"},
    {"seed": 4,"name": "M80", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/m80.png"},
    {"seed": 5,"name": "paIN", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/pain.png"},
    {"seed": 6,"name": "RED Canids", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/red.png"},
    {"seed": 7,"name": "BESTIA", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/best.png"},
    {"seed": 8,"name": "Imperial", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/impe.png"},
    {"seed": 9,"name": "Nouns", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/noun.png"},
    {"seed": 10,"name": "timbermen", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/timb.png"},
    {"seed": 11,"name": "BOSS", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/boss.png"},
    {"seed": 12,"name": "ODDIK", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/oddi.png"},
    {"seed": 13,"name": "Legacy", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/lega.png"},
    {"seed": 14,"name": "Wildcard", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/wild.png"},
    {"seed": 15,"name": "Rocket", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/rock.png"},
    {"seed": 16,"name": "Team Liquid", "prev": 0, "img":"https://img.majors.im/rmr/copenhagen2024_rmr/liqu.png"},
]

const apoka = document.getElementById("apoka");
const result = document.getElementById("result");

teams.forEach(team => {
    result.innerHTML += `
    <div class="qualify result-box">
        <!-- <span>#${team.seed}</span> -->
        <div id="drag_${team.seed}"><img id="drag${team.seed}" src="${team.img}" alt="${team.name}" 
        draggable="true" ondragstart="drag(event)"/></div>
        <span class="result-team">${team.name}</span>
    </div>`
});