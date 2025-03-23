
 // Add collapsible functionality
 document.querySelectorAll('.toggle-btn').forEach(button => {
     button.addEventListener('click', () => {
         const content = button.nextElementSibling;
         const icon = button.querySelector('i');
 
         content.classList.toggle('open');
         icon.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
     });
 });
