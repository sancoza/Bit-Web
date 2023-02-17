// Init Github
const gitHub = new Github();
// Init UI
const ui = new UI();

// Search input
const serachUser = document.getElementById('searchUser');

// Search input event listener

serachUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    gitHub.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
