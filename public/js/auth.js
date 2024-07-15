// ------------------------ start register form ------------------------------

if(window.location.pathname == '/signup'){
    (function () {
    
        const age = document.querySelector('#age');
        const registerForm = document.registerForm 
        const invisible = document.querySelector('#invisible');
        const visible = document.querySelector('#visible');
        const password = registerForm.password;
        const re_password = registerForm.re_password;
        const lowercaseReq = document.getElementById('lowercaseReq');
        const uppercaseReq = document.getElementById('uppercaseReq');
        const digitReq = document.getElementById('digitReq');
        const sp_charReq = document.getElementById('sp_charReq');
        const strongReq = document.getElementById('strongReq');
        const validation = document.getElementById('validation');
        const re_strong = document.getElementById('re_strong');
        const matcher = document.getElementById('matcher');
        const errorEmail = document.getElementById('errorEmail');
        
        registerForm.addEventListener('input', () =>{
            errorEmail.style="display: none"
        });
        age.addEventListener('input', (event) => {
            const value = parseInt(event.target.value, 10);
            if(value > 100) {
                event.target.value = 100;
            }
        });
        invisible.addEventListener('click', () => {
            invisible.style="display: none"
            visible.style="display: block"
            password.type = "text";
            re_password.type = "text"; 
        })
        visible.addEventListener('click', () => {
            visible.style="display: none"
            invisible.style="display: block"
            password.type = "password";
            re_password.type = "password"; 
        })
        
        password.addEventListener('focus', () => {
            validation.style="display: block"
        })
        password.addEventListener('blur', () => {
            Array.from(validation.children).forEach((li) => {
                validation.style="display: none"
            });
        });
        
        password.addEventListener('input', (code) => {
            const password = code.target.value;
            (/(?=.*[a-z])/.test(password)) ? lowercaseReq.style="display: none" : lowercaseReq.style="display: bock";
            (/(?=.*[A-Z])/.test(password)) ? uppercaseReq.style="display: none" : uppercaseReq.style="display: bock";
            (/(?=.*[0-9])/.test(password)) ? digitReq.style="display: none" : digitReq.style="display: bock";
            (/(?=.*[@$!%*?&])/.test(password)) ? sp_charReq.style="display: none" : sp_charReq.style="display: bock"; 
            (password.length >= 8 && password.length <= 32) ? strongReq.style="display: none" : strongReq.style="display: bock" ;
            (password.length > 32) ? password.value = password.substring(0, 32) : null;
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/.test(password)){
                console.log(34434);
                re_strong.style = 'display: none'
            }
            (code.target.value  == re_password.value) ? matcher.style='display:none' : null
        });
        re_password.addEventListener('input', (code) => {
            (password.length > 32) ? password.value = password.substring(0, 32) : null
            (password.value  == code.target.value) ? matcher.style='display:none' : null
        })
        registerForm.addEventListener('submit', (event) => {
            if(password.value !== re_password.value) {
                event.preventDefault();
                matcher.style = 'display: block'
            }
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/.test(password.value)){
                event.preventDefault();
                re_strong.style = 'display: block'
            }
        })  
    
    })();
}

// ------------------------ end register form ------------------------------

// ------------------------ start login form ------------------------------

if (window.location.pathname === '/login') {
    const invisible = document.querySelector('#invisible');
    const visible = document.querySelector('#visible');
    const loginForm = document.loginForm;
    const error = document.getElementById('error');

    invisible.addEventListener('click', () => {
        invisible.style="display: none"
        visible.style="display: block"
        password.type = "text";
    })
    visible.addEventListener('click', () => {
        visible.style="display: none"
        invisible.style="display: block"
        password.type = "password";
    })

    if (window.location.pathname === '/login') {
        const loginForm = document.loginForm;
        const error = document.getElementById('error');
    
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
    
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
    
                const data = await response.json(); // Parse JSON response
    
                if (!response.ok) {
                    throw new Error(data.error || 'Login failed');
                }
    
                // Clear previous errors
                error.textContent = '';
                error.style.display = 'none';
    
                // Redirect to dashboard or another route after successful login
                window.location.href = '/'; // Replace with your desired redirect URL
            } catch (err) {
                console.error('Error during login:', err);
                error.textContent = err.message;
                error.style.display = 'inline';
            }
        });
    }
    
    
    // loginForm.addEventListener('submit', async (event) => {
    //     event.preventDefault();
        
    //     const email = loginForm.email.value;
    //     const password = loginForm.password.value;
    //     try {
    //         const response = await fetch('/login', {
    //             method: 'POST', // Specify the HTTP method as 'POST'
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }), // Send the email and password as JSON
    //         });

    //         const data = await response.json();
    //         if (!response.ok) {
    //             throw new Error(data.error || 'Login failed');
    //         }

    //         // Clear previous errors
    //         error.textContent = '';
    //         error.style.display = 'none';

    //         // Redirect or update UI accordingly after successful login
    //         console.log('Login successful:', data.message);
    //         // Example: window.location.href = '/dashboard'; // Redirect to dashboard
    //     } catch (err) {
    //         console.log('Error during login:', err);
    //         error.textContent = err.message;
    //         error.style.display = 'inline';
    //     }
    // });
}


