document.addEventListener('DOMContentLoaded', function() {
    // Copy invite link functionality
    const copyBtn = document.getElementById('copy-btn');
    const inviteLink = document.getElementById('invite-link');
    
    copyBtn.addEventListener('click', function() {
        inviteLink.select();
        document.execCommand('copy');
        
        // Show feedback
        const originalIcon = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
        }, 2000);
    });
    
    // Get likes button functionality
    const getLikesBtn = document.getElementById('get-likes-btn');
    const postUrlInput = document.getElementById('post-url');
    const activityList = document.getElementById('activity-list');
    
    getLikesBtn.addEventListener('click', function() {
        const postUrl = postUrlInput.value.trim();
        
        if (!postUrl) {
            alert('Please enter an Instagram post URL');
            return;
        }
        
        // Here you would typically send this URL to your backend
        // For demo purposes, we'll just add it to the activity list
        
        // Create new activity item for the like request
        const newActivity = document.createElement('div');
        newActivity.className = 'activity-item';
        newActivity.innerHTML = `
            <div class="activity-icon">
                <i class="fas fa-heart"></i>
            </div>
            <div class="activity-details">
                <p>Your like request for post <strong>${postUrl}</strong> is processing</p>
                <span class="activity-time">Just now</span>
            </div>
        `;
        
        // Add to the top of the activity list
        activityList.insertBefore(newActivity, activityList.firstChild);
        
        alert('Your post has been submitted for likes!');
        
        // Reset the input
        postUrlInput.value = '';
    });
    
    // Simulate new users joining through invite link (for demo purposes)
    // In a real app, this would come from your backend
    const simulateNewJoin = () => {
        const names = ['Alex Wong', 'Sarah Miller', 'David Chen', 'Maria Garcia'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        
        const newJoinActivity = document.createElement('div');
        newJoinActivity.className = 'activity-item';
        newJoinActivity.innerHTML = `
            <div class="activity-icon">
                <i class="fas fa-user-plus"></i>
            </div>
            <div class="activity-details">
                <p><strong>${randomName}</strong> joined with your invite link</p>
                <span class="activity-time">Just now</span>
            </div>
        `;
        
        // Add to the top of the activity list
        activityList.insertBefore(newJoinActivity, activityList.firstChild);
    };
    
    // For demo purposes, simulate a new join every 30 seconds
    // Remove this in production and replace with real data
    if (window.location.hostname !== 'production-site.com') {
        setTimeout(simulateNewJoin, 30000);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks.classList.contains('active') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.menu-toggle')) {
            navLinks.classList.remove('active');
        }
    });
    
    // Add this to your existing DOMContentLoaded event handler
    const usernameDisplay = document.querySelector('.username-display');
    if (usernameDisplay) {
        // This will be replaced with actual login logic later
        // For now, we'll just simulate a logged-in user
        const simulateLoggedInUser = () => {
            const navUsername = document.getElementById('nav-username');
            // This would normally come from a login system or session
            // For demo purposes, we'll just set a static username
            navUsername.textContent = "JohnDoe123";
        };
        
        // Call this function to simulate a logged-in user
        // In a real app, this would be part of your authentication flow
        simulateLoggedInUser();
        
        usernameDisplay.addEventListener('click', function(e) {
            const dropdown = this.querySelector('.user-dropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            e.stopPropagation();
        });
        
        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function() {
            const dropdown = document.querySelector('.user-dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    }
    
    // Check if user is coming from login/signup form
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    
    // If there's an email parameter, user just logged in
    if (email) {
        // Extract name from email (for demo purposes)
        const name = email.split('@')[0];
        
        // Store in localStorage to persist across page refreshes
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Initialize likes count (for demo)
        if (!localStorage.getItem('likesBalance')) {
            localStorage.setItem('likesBalance', '120');
        }
    }
    
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // If on dashboard page (index.html)
    if (document.getElementById('user-name')) {
        if (isLoggedIn) {
            // Update UI with user info
            document.getElementById('user-name').textContent = localStorage.getItem('userName');
            document.getElementById('likes-balance').textContent = localStorage.getItem('likesBalance');
        } else {
            // Redirect to login if not logged in
            window.location.href = 'login.html';
        }
    }
    
    // Handle logout
    const logoutLink = document.querySelector('a[href="home.html"]');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            // Clear user data on logout
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('isLoggedIn');
        });
    }
    
    // Toggle dropdown menu
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        window.addEventListener('click', function(e) {
            if (!e.target.matches('.dropdown-toggle') && !e.target.closest('.dropdown-toggle')) {
                const dropdowns = document.querySelectorAll('.dropdown-menu');
                dropdowns.forEach(function(dropdown) {
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show');
                    }
                });
            }
        });
    }
    
    // Simple toggle for logout button
    const userDropdownToggle = document.getElementById('user-dropdown-toggle');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (userDropdownToggle && logoutBtn) {
        console.log("Found elements:", userDropdownToggle, logoutBtn);
        
        userDropdownToggle.onclick = function(e) {
            e.stopPropagation();
            console.log("Username clicked");
            
            // Toggle visibility directly
            if (logoutBtn.style.display === 'none' || logoutBtn.style.display === '') {
                logoutBtn.style.display = 'flex';
                console.log("Setting logout to flex");
            } else {
                logoutBtn.style.display = 'none';
                console.log("Setting logout to none");
            }
        };
        
        // Close when clicking elsewhere
        document.body.addEventListener('click', function() {
            logoutBtn.style.display = 'none';
        });
    } else {
        console.error("Could not find user dropdown or logout button");
    }
});

// Add this function to your existing script.js file
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
} 