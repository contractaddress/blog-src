// i don't believe mdx has any way to add copy buttons to code blocks (pre elements) so this script does just that! see slug for implementation

if (window.innerWidth > 768) {
    document.querySelectorAll('pre').forEach((pre) => {
        if (pre.querySelector('.copy-btn')) return;

        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.className = 'copy-btn';

        button.addEventListener('click', () => {
            const code = pre.querySelector('code')?.innerText ?? '';
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => button.textContent = 'Copy', 2000);
            });
        });

        pre.style.position = 'relative';
        pre.appendChild(button);
    });
}
