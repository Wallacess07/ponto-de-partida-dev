document.addEventListener('DOMContentLoaded', function () {
    // Cadastro
    const openRegisterBtn = document.getElementById('open-register-modal');
    const registerModal = document.getElementById('register-modal');
    const closeRegisterBtn = document.getElementById('close-register-modal');
    const registerForm = document.getElementById('register-form-fields');

    // Login
    const openLoginBtn = document.getElementById('open-login-modal');
    const loginModal = document.getElementById('login-modal');
    const closeLoginBtn = document.getElementById('close-login-modal');
    const loginForm = document.getElementById('login-form-fields');

    // Perfil
    const userProfileArea = document.getElementById('user-profile-area');
    const userProfileBtn = document.getElementById('user-profile-btn');
    const userProfileName = document.getElementById('user-profile-name');
    const profileDropdown = document.getElementById('profile-dropdown');
    const logoutBtn = document.getElementById('logout-btn');

    // Funções para abrir/fechar modais
    function openModal(modal) {
        if (modal) modal.style.display = 'flex';
    }
    function closeModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    // Persistência do login usando localStorage
    function saveLogin(nome) {
        localStorage.setItem('ppd_user', nome);
    }
    function clearLogin() {
        localStorage.removeItem('ppd_user');
    }
    function getLogin() {
        return localStorage.getItem('ppd_user');
    }

    // Cadastro
    if (openRegisterBtn && registerModal && closeRegisterBtn) {
        openRegisterBtn.addEventListener('click', () => openModal(registerModal));
        closeRegisterBtn.addEventListener('click', () => closeModal(registerModal));
        registerModal.addEventListener('click', (e) => {
            if (e.target === registerModal) closeModal(registerModal);
        });
        if (registerForm) {
            registerForm.addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Cadastro enviado!');
                closeModal(registerModal);
                registerForm.reset();
            });
        }
    }

    // Login
    if (openLoginBtn && loginModal && closeLoginBtn) {
        openLoginBtn.addEventListener('click', () => openModal(loginModal));
        closeLoginBtn.addEventListener('click', () => closeModal(loginModal));
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) closeModal(loginModal);
        });
        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                // Simula login e mostra perfil
                const email = loginForm.querySelector('input[type="email"]').value;
                let nome = email.split('@')[0];
                nome = nome.charAt(0).toUpperCase() + nome.slice(1);
                saveLogin(nome); // Salva login no localStorage
                showUserProfile(nome);
                closeModal(loginModal);
                loginForm.reset();
            });
        }
    }

    // Mostrar perfil e esconder botões login/cadastro
    function showUserProfile(nome) {
        if (userProfileArea && userProfileName) {
            userProfileName.textContent = nome;
            userProfileArea.style.display = 'flex';
        }
        if (openLoginBtn) openLoginBtn.style.display = 'none';
        if (openRegisterBtn) openRegisterBtn.style.display = 'none';
    }

    // Checa se já está logado ao carregar a página
    const usuarioSalvo = getLogin();
    if (usuarioSalvo) {
        showUserProfile(usuarioSalvo);
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            userProfileArea.style.display = 'none';
            if (openLoginBtn) openLoginBtn.style.display = '';
            if (openRegisterBtn) openRegisterBtn.style.display = '';
            profileDropdown.style.display = 'none';
            clearLogin(); // Limpa login do localStorage
        });
    }

    // Dropdown do perfil
    if (userProfileBtn && profileDropdown) {
        userProfileBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', function () {
            profileDropdown.style.display = 'none';
        });
        profileDropdown.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
});