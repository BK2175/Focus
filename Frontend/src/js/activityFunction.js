import Activity from "./components/activity"
import ActivityEdit from "./components/activityEdit"
import apiActions from "./api/apiActions"

export default () =>{
    displayActivity()
}

function displayActivity(){
    const activityBTN = document.querySelector("#activityButton");
    activityBTN.addEventListener("click", function(){
        apiActions.getRequest("https://localhost:44306/api/activities", activities =>{
            document.querySelector("#app").innerHTML = Activity(activities);
        });
    });
    const app = document.querySelector("#app");
    app.addEventListener("click", function(){
        if(event.target.classList.contains("activityName")){
        const activityid = event.target.parentElement.querySelector(".activity_id").value;
        apiActions.getRequest(`https://localhost:44306/api/activities/${activityid}`, activities => {
            document.querySelector("#app").innerHTML = Activity(activities);
            console.log(activities);
        })

    }
})
app.addEventListener("click", function(){
    if(event.target.classList.contains("add-activity")){
    const addName = event.target.parentElement.querySelector(".add-activity_name").value
    const addDescription = event.target.parentElement.querySelector(".add-activity_description").value
    const addImportance = event.target.parentElement.querySelector(".add-activity_importance").value
    const addUrgency = event.target.parentElement.querySelector(".add-activity_urgency").value
    const addCategoryid = event.target.parentElement.querySelector(".add-activity_categoryId").value
    console.log(addName, addDescription, addImportance, addUrgency, addCategoryid)
    apiActions.postRequest
    ( 
        "https://localhost:44306/api/activities",{  
        name: addName,
        description: addDescription,
        creation: Date.now,
        completion: Date.now,
        importance: addImportance,
        urgency: addUrgency,
        categoryid: addCategoryid
        },

        activities => {
            document.querySelector("#app").innerHTML = Activity(activities)
        }
       
    )}
});

app.addEventListener("click", function(){
    if(event.target.classList.contains("delete-activity")) {
        const activityId = event.target.parentElement.querySelector("activity_id").value;
        console.log("delete" + activityId);
        apiActions.deleteRequest(`https://localhost:44306/api/activities/${activityId}`,
        activities => {
            app.innerHTML = Activity(activities)
        })
    }
});

app.addEventListener("click", function(){
    if(event.target.classList.contains("edit-activity")) {
        const activityid = event.target.parentElement.querySelector("activity_id").value;
        console.log("edit"  + activityId);
        apiActions.getRequest(`https://localhost:44306/api/activities/${activityid}`, 
        editActivity => {
            app.innerHTML = ActivityEdit(editActivity)
        })
    }
});

app.addEventListener("click", function() {
    if(event.target.classList.contains("update-activity")) {
        const updateName = event.target.parentElement.querySelector(".update-activity_name").value
        const updateDescription = event.target.parentElement.querySelector(".update-activity_description").value
        const updateImportance = event.target.parentElement.querySelector(".update-activity_importance").value
        const updateUrgency = event.target.parentElement.querySelector(".update-activity_urgency").value
        const updateCategoryid = event.target.parentElement.querySelector(".update-activity_categoryId").value
        console.log(updateName, updateDescription, updateImportance, updateUrgency, updateCategoryid)

        const activityData = {
            name: updateName,
            description: updateDescription,
            creation: Date.now,
            completion: null,
            importance: updateImportance,
            urgency: updateUrgency,
            categoryid: updateCategoryid
        }
        apiActions.putRequest(
            `https://localhost:44306/api/activities/${activityid}`,
            activityData,
            activities => {
                document.querySelector("#app").innerHTML = Activity(activities)
            }
        )
    }
})
}