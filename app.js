//INIT GITHUB CLASS
const github = new Github;
//INIT UI CLASS
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;
    if(userText !== ''){
        //make HTTP call
        github.getUser(userText)
        .then(data =>{
            console.log(data);
            if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
});