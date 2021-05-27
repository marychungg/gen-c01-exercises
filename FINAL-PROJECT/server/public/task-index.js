// GET CARD ----- [todo] 
async function showCard(){  
    const data = await fetch('http://localhost:8080/todolist')
    const jsonResponse = await data.json()
    let displayArea = document.querySelector('#card-fetch-area')
    let displayhtml = ``
    for (let i of jsonResponse){
        displayhtml = displayhtml + `
        <!-- Task Card -->
        <div class="task-card-kit ">
        <div class="clearfix">
            <button type="button " class="status-overlap rounded-pill btn btn-info float-left ">${i.status}</button>
            <button type="button " class="star-overlap btn btn btn-outline-warning float-right "><i class="fas fa-star "></i></button>
        </div>
        <div class="card bg-light mb-3 ">
            <div class="card-body " data-toggle="modal" data-target="#ViewCard1Modal${i.id}">
                <h5 class="card-title ">${i.name}</h5>
                <p class="card-text ">${i.description}</p>
                <div class="bg-transparent clearfix ">
                    <button type="button " class="btn btn-light rounded-pill float-left "><i class="fas fa-clock "></i> ${i.duedate}</button>
                    <button type="button " class="btn btn-light rounded-pill float-right "> ${i.assignedto}</button>

                </div>
            </div>
        </div>
    </div>



        <!-- VIEW CARD MODAL -->
        <div class="modal fade" id="ViewCard1Modal${i.id}" tabindex="-1" role="dialog" aria-labelledby="ViewCard1ModalLabel" aria-hidden="true" style="max-width: 100%;">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="ViewCardModalLabel">View Card</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-left ">
                    <form id='ViewCardForm'>
                        <label class='hide' name='id'>Id: 
                            ${i.id}
                            <input type='text' name='delId' id='delId' value="${i.id}"/>
                        </label>
                        <label name='name' for="taskcard-name" class="col-form-label w-100"><span style="font-size: 1rem; font-weight: bold;">Task Name:</span> 
                            <p>${i.name}</p>
                        </label>
                        <label name='description' for="taskcard-description" class="col-form-label w-100"><span style="font-size: 1rem; font-weight: bold;">Task Description:</span> 
                            <p>${i.description}</p>
                        </label>
                        <label name='assignedto' for="colFormLabel" class="col-form-label w-100"><i class="fas fa-tags fa-sm m-1"></i><span style="font-size: 1rem; font-weight: bold;">Members:</span> 
                            <p>${i.assignedto}</p>
                        </label>
                        <label name='duedate' for="example-date-input" class="col-form-label w-100"><i class="fas fa-clock fa-sm m-1"></i><span style="font-size: 1rem; font-weight: bold;">Due-Date:</span> 
                            <p>${i.duedate}</p>
                        </label>
                        <label name='status' class="col-form-label w-100"><span style="font-size: 1rem; font-weight: bold;">Status:</span> 
                            <p>${i.status}</p>
                        </label>
                        <div class="modal-footer px-0">
                            <button id='delButton' type="submit button" class="btn btn-outline-danger mr-auto" onclick="javascript:window.location.reload()"><i class="far fa-trash-alt "></i></button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-info " data-dismiss="modal" data-toggle="modal" data-target="#EditCard1Modal${i.id}"><i class="fas fa-edit mr-2"></i>Edit Card</button>

                        </div>
                    </form>
                    <div id='deleteArea'></div>
                </div>

            </div>
        </div>
        </div>





        <!-- EDIT CARD MODAL -->
        <div class="modal fade" id="EditCard1Modal${i.id}" tabindex="-1" role="dialog" aria-labelledby="EditCard1ModalLabel" aria-hidden="true" style="max-width: 100%;">
        <div class="modal-dialog" role="document">
            <div class="modal-content text-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="EditCard1ModalLabel">Edit Card</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>

                <div class="modal-body text-left">
                    <form method="PUT" id='fetchSaveCardForm' action='http://localhost:8080/todolist/'>
                        
                    <label class='hide' name='id'>Id: 
                            <input type='text' name='putId' id='putId' value="${i.id}"/>
                    </label>
                    <label name='name' class="col-form-label w-100"><span style="font-size: 1rem; font-weight: bold;">Task Name:</span>
                        <input type='text' name='putName' id='putName' value="${i.name}" class="form-control"/>
                    </label><br>
                    <label name='description' class="col-form-label w-100"><span style="font-size: 1rem; font-weight: bold;">Task Description:</span>  
                        <textarea type='text' name='putDescription' id='putDescription' value="${i.description}" class="form-control"/>${i.description}</textarea>
                    </label><br>
                    <label name='assignedto' class="col-form-label w-100"><i class="fas fa-tags fa-sm m-1"></i><span style="font-size: 1rem; font-weight: bold;">Members:</span> 
                        <input type='text' name='putAssignedto' id='putAssignedto' value="${i.assignedto}" class="form-control"/>
                    </label><br>
                    <label name='duedate' class="col-form-label w-100"><i class="fas fa-clock fa-sm m-1"></i><span style="font-size: 1rem; font-weight: bold;">Due-Date:</span> 
                        <input type='date' name='putDuedate' id='putDuedate' value="${i.duedate}" class="form-control"/>
                    </label><br>
                    <label name='status' class="col-form-label w-100"><span style="font-size: 1rem; font-weight: bold;">Status:</span> 
                        <select type='text' name='putStatus' id='putStatus' value="${i.status}"class="form-control" required>
                            <option value="TO DO">TO DO</option>
                            <option value="IN PROGRESS">IN PROGRESS</option>
                            <option value="REVIEW">REVIEW</option>
                            <option value="DONE">DONE</option>
                        </select>


                    </label><br>

                        <div class="modal-footer px-0 mt-4">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id='saveButton' type="submit button" class="btn btn-info" onclick="javascript:window.location.reload()">Save Changes</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
        </div>


       `        
    }
    displayArea.innerHTML = displayhtml;

    

    //--------------------- EDIT CARD BELOW-----------------------------
    var newScript = document.createElement("script");
    var inlineScript = document.createTextNode(`
    
    addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.target;
        const formObject = {};
        formObject['id'] = form.putId.value;
        formObject['name'] = form.putName.value;
        formObject['description'] = form.putDescription.value;
        formObject['assignedto'] = form.putAssignedto.value;
        formObject['duedate'] = form.putDuedate.value;
        formObject['status'] = form.putStatus.value;
        fetchLink = 'http://localhost:8080/todolist/' + form.putId.value;
        const response = await fetch(fetchLink , {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formObject),
        })
            let jsonResponse = await response.json();
        })
        
        `);
    newScript.appendChild(inlineScript);
    document.querySelector('#fetchSaveCardForm').appendChild(newScript);
    //--------------------- EDIT CARD ABOVE-----------------------------





    //--------------------- DELETE CARD BELOW-----------------------------
    var newNewScript = document.createElement("script");
    var delScript = document.createTextNode(`
    addEventListener('submit', async (event) => {
        event.preventDefault();
        const form = event.target;
        const formObject = {};
        formObject['id'] = form.delId.value;
        fetchLink = 'http://localhost:8080/todolist/' + form.delId.value;
        const response = await fetch(fetchLink , {
            method: 'DELETE',
            headers: {
            "Content-Type": "application/json"
        },
        })
        .then(res => res.text()) 
        .then(res => console.log(res))
        })`
        )
    newNewScript.appendChild(delScript);
    document.querySelector('#delButton').appendChild(newNewScript);

    //--------------------- DELETE CARD ABOVE-----------------------------



}
showCard();




//------------------ADD CARD BELOW------------------------
const fetchAddCardForm = document.querySelector('#fetchAddCardForm')
fetchAddCardForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = event.target;
    const formObject = {};
    formObject['id'] = Math.floor(Math.random()*1000);
    formObject['name'] = form.fetchName.value;
    formObject['description'] = form.fetchDescription.value;
    formObject['assignedto'] = form.fetchAssignedto.value;
    formObject['duedate'] = form.fetchDuedate.value;
    formObject['status'] = form.fetchStatus.value;
    const response = await fetch('http://localhost:8080/todolist/', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formObject),
    })
    let jsonResponse = await response.json();
})
//------------------ADD CARD ABOVE------------------------



