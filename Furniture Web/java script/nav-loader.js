function loadNavbar() {
    fetch('nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading header: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Extract and append <script> tags
            const scripts = tempDiv.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                if (oldScript.src) {
                    newScript.src = oldScript.src; // External scripts
                } else {
                    newScript.textContent = oldScript.textContent; // Inline scripts
                }
                document.body.appendChild(newScript); // Add to document
            });

            document.getElementById('navbar').innerHTML = tempDiv.innerHTML;

            updateCartCount();
        })
        .catch(error => console.error('Error loading navbar:', error));
}


loadNavbar();


// footer
fetch('footer.html')
      .then(response => {
        if (!response.ok) {
        throw new Error(`Error loading footer: ${response.status}`);
      }
      return response.text();
      })
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
    .catch(error => console.error(error));
