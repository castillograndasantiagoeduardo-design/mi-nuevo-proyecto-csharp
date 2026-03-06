  function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.btn-nav').forEach(b => b.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            document.getElementById('nav-' + tabId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }